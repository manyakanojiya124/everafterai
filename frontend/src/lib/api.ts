import type {
  AuthResponse,
  ChatHistory,
  ChatReply,
  MemoryFile,
  MemoryPerson,
  MemoryPersonCreateInput,
  MemoryPersonUpdateInput,
  MessageResponse,
  RegistrationResponse,
  User,
  ValidationError,
} from "./types";

// ============================================================================
// Configuration
// ============================================================================

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000/api/v1";

const ACCESS_TOKEN_KEY = "everafter_access_token";

// ============================================================================
// Token storage — the backend issues a short-lived bearer access token plus
// an httpOnly refresh cookie (set by the server itself on login/verify).
// ============================================================================

export function getAccessToken(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(ACCESS_TOKEN_KEY);
}

function storeAccessToken(token: string) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
}

function removeAccessToken() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function isAuthed(): boolean {
  return Boolean(getAccessToken());
}

// ============================================================================
// Errors
// ============================================================================

export class ApiError extends Error {
  status: number;
  details?: ValidationError[];

  constructor(message: string, status: number, details?: ValidationError[]) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

function friendlyMessage(detail: unknown): {
  message: string;
  details?: ValidationError[];
} {
  if (typeof detail === "string") return { message: detail };

  if (Array.isArray(detail)) {
    const validation = detail as ValidationError[];
    const first = validation[0];
    const field = first?.loc?.[first.loc.length - 1];
    const message = first
      ? `${field ? `${String(field)}: ` : ""}${first.msg}`
      : "Some fields need attention.";
    return { message, details: validation };
  }

  return { message: "Something went wrong. Please try again." };
}

// ============================================================================
// Core request helpers
// ============================================================================

async function handleResponse<T>(response: Response): Promise<T> {
  if (response.status === 204) return undefined as T;

  const isJson = response.headers.get("content-type")?.includes("application/json");
  const body = isJson ? await response.json().catch(() => null) : null;

  if (!response.ok) {
    const { message, details } = friendlyMessage(body?.detail);
    throw new ApiError(message, response.status, details);
  }

  return body as T;
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  const token = getAccessToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);

  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers,
      credentials: "include",
    });
  } catch {
    throw new ApiError(
      "Couldn't reach the server. Check your connection and try again.",
      0,
    );
  }

  return handleResponse<T>(response);
}

/** Same as `request`, but retries once after a silent token refresh on 401. */
async function requestAuthed<T>(path: string, options: RequestInit = {}): Promise<T> {
  try {
    return await request<T>(path, options);
  } catch (error) {
    if (error instanceof ApiError && error.status === 401 && getAccessToken()) {
      await refresh();
      return request<T>(path, options);
    }
    throw error;
  }
}

async function requestForm<T>(
  path: string,
  formData: FormData,
  options: RequestInit = {},
): Promise<T> {
  const headers = new Headers(options.headers);
  const token = getAccessToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);
  // Intentionally no Content-Type — the browser sets the multipart boundary.

  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      method: options.method ?? "POST",
      headers,
      body: formData,
      credentials: "include",
    });
  } catch {
    throw new ApiError(
      "Couldn't reach the server. Check your connection and try again.",
      0,
    );
  }

  return handleResponse<T>(response);
}

// ============================================================================
// Session helper
// ============================================================================

function persistSession(session: AuthResponse): User {
  storeAccessToken(session.access_token);
  return session.user;
}

// ============================================================================
// Authentication — /api/v1/auth/*
// ============================================================================

export async function register(input: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}) {
  return request<RegistrationResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function verifyEmail(email: string, otp: string) {
  const session = await request<AuthResponse>("/auth/verify-email", {
    method: "POST",
    body: JSON.stringify({ email, otp }),
  });
  return persistSession(session);
}

export async function resendVerification(email: string) {
  return request<MessageResponse>("/auth/resend-verification", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function login(email: string, password: string) {
  const session = await request<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  return persistSession(session);
}

export async function googleLogin(credential: string) {
  const session = await request<AuthResponse>("/auth/google", {
    method: "POST",
    body: JSON.stringify({ credential }),
  });
  return persistSession(session);
}

export async function refresh() {
  const session = await request<AuthResponse>("/auth/refresh", { method: "POST" });
  return persistSession(session);
}

export async function logout() {
  try {
    await request<MessageResponse>("/auth/logout", { method: "POST" });
  } finally {
    removeAccessToken();
  }
}

// ============================================================================
// Users — /api/v1/users/*
// ============================================================================

export async function getCurrentUser() {
  return requestAuthed<User>("/users/me");
}

// ============================================================================
// Memory People (companions) — /api/v1/memory-people
// ============================================================================

export async function getCompanions() {
  return requestAuthed<MemoryPerson[]>("/memory-people");
}

export async function getCompanion(id: number) {
  return requestAuthed<MemoryPerson>(`/memory-people/${id}`);
}

export async function createCompanion(input: MemoryPersonCreateInput) {
  return requestAuthed<MemoryPerson>("/memory-people", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function updateCompanion(id: number, input: MemoryPersonUpdateInput) {
  return requestAuthed<MemoryPerson>(`/memory-people/${id}`, {
    method: "PATCH",
    body: JSON.stringify(input),
  });
}

export async function deleteCompanion(id: number) {
  return requestAuthed<unknown>(`/memory-people/${id}`, { method: "DELETE" });
}

/** POST /memory-people/{id}/profile-picture — dedicated avatar upload.
 * Assumed to return the updated companion (same shape as GET/PATCH); the
 * paste of the OpenAPI schema didn't include its response model. */
export async function uploadCompanionProfilePicture(id: number, file: File) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    return await requestForm<MemoryPerson>(`/memory-people/${id}/profile-picture`, formData);
  } catch (error) {
    if (error instanceof ApiError && error.status === 401 && getAccessToken()) {
      await refresh();
      return requestForm<MemoryPerson>(`/memory-people/${id}/profile-picture`, formData);
    }
    throw error;
  }
}

export async function deleteCompanionProfilePicture(id: number) {
  return requestAuthed<MemoryPerson>(`/memory-people/${id}/profile-picture`, {
    method: "DELETE",
  });
}

// ============================================================================
// Memory Vault — /api/v1/memory-people/{id}/files
// ============================================================================

export async function listFiles(companionId: number, fileType?: string) {
  const query = fileType ? `?file_type=${encodeURIComponent(fileType)}` : "";
  return requestAuthed<MemoryFile[]>(`/memory-people/${companionId}/files${query}`);
}

export async function getFile(companionId: number, fileId: number) {
  return requestAuthed<MemoryFile>(`/memory-people/${companionId}/files/${fileId}`);
}

export async function uploadFile(
  companionId: number,
  file: File,
  description?: string,
) {
  const formData = new FormData();
  formData.append("file", file);
  if (description) formData.append("description", description);

  try {
    return await requestForm<MemoryFile>(`/memory-people/${companionId}/files`, formData);
  } catch (error) {
    if (error instanceof ApiError && error.status === 401 && getAccessToken()) {
      await refresh();
      return requestForm<MemoryFile>(`/memory-people/${companionId}/files`, formData);
    }
    throw error;
  }
}

export async function deleteFile(companionId: number, fileId: number) {
  return requestAuthed<unknown>(`/memory-people/${companionId}/files/${fileId}`, {
    method: "DELETE",
  });
}

// ============================================================================
// Chat — /api/v1/memory-people/{id}/chat
// ============================================================================

export async function getChatHistory(companionId: number) {
  return requestAuthed<ChatHistory>(`/memory-people/${companionId}/chat`);
}

export async function sendChatMessage(companionId: number, message: string) {
  return requestAuthed<ChatReply>(`/memory-people/${companionId}/chat`, {
    method: "POST",
    body: JSON.stringify({ message }),
  });
}

export async function clearChat(companionId: number) {
  return requestAuthed<unknown>(`/memory-people/${companionId}/chat`, {
    method: "DELETE",
  });
}

/** Resolve a possibly-relative file path returned by the backend into a full URL. */
export function resolveFileUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  const base = API_BASE_URL.replace(/\/api\/v1\/?$/, "");
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
}
