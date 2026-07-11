export type User = {
  id: number;
  full_name: string;
  email: string;
  profile_picture: string | null;
  provider: string;
  is_verified: boolean;
  is_active: boolean;
  created_at: string;
};

type AuthResponse = { access_token: string; token_type: "bearer"; user: User };
type RegistrationResponse = { message: string; email: string };

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000/api/v1";
const ACCESS_TOKEN_KEY = "everafter_access_token";

function getAccessToken() {
  return typeof window === "undefined" ? null : sessionStorage.getItem(ACCESS_TOKEN_KEY);
}

function storeAccessToken(token: string) {
  sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");
  const token = getAccessToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
    credentials: "include",
  });
  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.detail ?? "Something went wrong. Please try again.");
  }
  return response.json() as Promise<T>;
}

function rememberSession(session: AuthResponse) {
  storeAccessToken(session.access_token);
  return session.user;
}

export async function register(firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
  const registration = await request<RegistrationResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password, confirm_password: confirmPassword }),
  });
  sessionStorage.setItem("everafter_verification_email", registration.email);
  return registration;
}

export async function login(email: string, password: string) {
  const session = await request<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  return rememberSession(session);
}

async function refresh() {
  const session = await request<AuthResponse>("/auth/refresh", { method: "POST" });
  return rememberSession(session);
}

export async function getCurrentUser() {
  try {
    return await request<User>("/users/me");
  } catch (error) {
    try {
      await refresh();
      return request<User>("/users/me");
    } catch {
      throw error;
    }
  }
}
export async function googleLogin(credential: string) {
  const session = await request<AuthResponse>("/auth/google", {
    method: "POST",
    body: JSON.stringify({
      credential,
    }),
  });

  return rememberSession(session);
}
export async function logout() {
  try {
    await request<{ message: string }>("/auth/logout", { method: "POST" });
  } finally {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}

export async function verifyEmail(email: string, otp: string) {
  const session = await request<AuthResponse>("/auth/verify-email", {
    method: "POST",
    body: JSON.stringify({ email, otp }),
  });
  return rememberSession(session);
}

export async function resendVerification(email: string) {
  return request<{ message: string }>("/auth/resend-verification", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}
