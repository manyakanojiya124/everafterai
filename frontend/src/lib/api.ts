// ======================================================
// EverAfter AI API Client
// ======================================================

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

// ======================================================
// Dashboard Companion Card
// ======================================================

export type MemoryPerson = {
  id: number;

  full_name: string;

  nickname: string | null;

  relationship: string;

  profile_picture: string | null;

  created_at: string;
};

// ======================================================
// Authentication Types
// ======================================================

type AuthResponse = {
  access_token: string;
  token_type: "bearer";
  user: User;
};

type RegistrationResponse = {
  message: string;
  email: string;
};

// ======================================================
// API Configuration
// ======================================================

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "http://localhost:8000/api/v1";

const ACCESS_TOKEN_KEY =
  "everafter_access_token";

// ======================================================
// Token Helpers
// ======================================================

function getAccessToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return sessionStorage.getItem(
    ACCESS_TOKEN_KEY
  );
}

function storeAccessToken(token: string) {
  sessionStorage.setItem(
    ACCESS_TOKEN_KEY,
    token
  );
}

function removeAccessToken() {
  sessionStorage.removeItem(
    ACCESS_TOKEN_KEY
  );
}

// ======================================================
// Base Request Helper
// ======================================================

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const headers = new Headers(
    options.headers
  );

  headers.set(
    "Content-Type",
    "application/json"
  );

  const token = getAccessToken();

  if (token) {
    headers.set(
      "Authorization",
      `Bearer ${token}`
    );
  }

  const response = await fetch(
    `${API_BASE_URL}${path}`,
    {
      ...options,
      headers,
      credentials: "include",
    }
  );

  if (!response.ok) {
    const body = await response
      .json()
      .catch(() => null);

    throw new Error(
      body?.detail ??
        "Something went wrong."
    );
  }

  return response.json() as Promise<T>;
}

// ======================================================
// Session Helper
// ======================================================

function rememberSession(
  session: AuthResponse
) {
  storeAccessToken(
    session.access_token
  );

  return session.user;
}

// ======================================================
// Authentication
// ======================================================

export async function register(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  const registration =
    await request<RegistrationResponse>(
      "/auth/register",
      {
        method: "POST",

        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          confirm_password:
            confirmPassword,
        }),
      }
    );

  sessionStorage.setItem(
    "everafter_verification_email",
    registration.email
  );

  return registration;
}

export async function login(
  email: string,
  password: string
) {
  const session =
    await request<AuthResponse>(
      "/auth/login",
      {
        method: "POST",

        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

  return rememberSession(session);
}

export async function googleLogin(
  credential: string
) {
  const session =
    await request<AuthResponse>(
      "/auth/google",
      {
        method: "POST",

        body: JSON.stringify({
          credential,
        }),
      }
    );

  return rememberSession(session);
}

// ======================================================
// Refresh Token
// ======================================================

async function refresh() {
  const session =
    await request<AuthResponse>(
      "/auth/refresh",
      {
        method: "POST",
      }
    );

  return rememberSession(session);
}

// ======================================================
// Current User
// ======================================================

export async function getCurrentUser() {
  try {
    return await request<User>(
      "/users/me"
    );
  } catch (error) {
    try {
      await refresh();

      return request<User>(
        "/users/me"
      );
    } catch {
      throw error;
    }
  }
}

// ======================================================
// Logout
// ======================================================

export async function logout() {
  try {
    await request<{
      message: string;
    }>("/auth/logout", {
      method: "POST",
    });
  } finally {
    removeAccessToken();
  }
}

// ======================================================
// Verify Email
// ======================================================

export async function verifyEmail(
  email: string,
  otp: string
) {
  const session =
    await request<AuthResponse>(
      "/auth/verify-email",
      {
        method: "POST",

        body: JSON.stringify({
          email,
          otp,
        }),
      }
    );

  return rememberSession(session);
}

// ======================================================
// Resend Verification
// ======================================================

export async function resendVerification(
  email: string
) {
  return request<{
    message: string;
  }>("/auth/resend-verification", {
    method: "POST",

    body: JSON.stringify({
      email,
    }),
  });
}

// ======================================================
// Dashboard Memory People
// ======================================================

export async function getMemoryPeople() {
  return request<MemoryPerson[]>(
    "/memory-people"
  );
}

// ======================================================
// Memory Companion
// ======================================================

export interface MemoryCompanion {
  id: number;

  full_name: string;

  nickname: string | null;

  relationship: string;

  gender: string | null;

  birth_date: string | null;

  passing_date: string | null;

  profile_picture: string | null;

  occupation: string | null;

  country: string | null;

  city: string | null;

  languages: string | null;

  biography: string | null;

  favorite_quote: string | null;

  favorite_food: string | null;

  favorite_song: string | null;

  favorite_color: string | null;

  hobbies: string | null;

  personality_traits: string[];

  bond_story: string | null;

  nickname_for_user: string | null;

  special_memories: string | null;

  topics_to_avoid: string | null;

  communication_style: string | null;

  speaking_style: string | null;

  humor_level: string | null;

  emotional_tone: string | null;

  is_public: boolean;

  created_at: string;

  updated_at: string;
}

export async function createCompanion(
  data: Record<string, unknown>
) {
  return request<MemoryCompanion>(
    "/memory-people",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}

export async function getCompanions() {
  return request<MemoryCompanion[]>(
    "/memory-people"
  );
}

export async function getCompanion(id: number) {
  return request<MemoryCompanion>(
    `/memory-people/${id}`
  );
}

export async function updateCompanion(
  id: number,
  data: Record<string, unknown>
) {
  return request<MemoryCompanion>(
    `/memory-people/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(data),
    }
  );
}

export async function deleteCompanion(id: number) {
  return request<{ message: string }>(
    `/memory-people/${id}`,
    {
      method: "DELETE",
    }
  );
}