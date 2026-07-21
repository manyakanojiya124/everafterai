// ============================================================================
// Types mirroring the EverAfter AI backend OpenAPI schema (v1.0.0).
// Keep this in sync with /openapi.json if the backend contract changes.
// ============================================================================

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

export type AuthResponse = {
  access_token: string;
  token_type: "bearer";
  user: User;
};

export type RegistrationResponse = {
  message: string;
  email: string;
};

export type MessageResponse = {
  message: string;
};

// ----------------------------------------------------------------------------
// Memory People (Companions)
// ----------------------------------------------------------------------------

export type MemoryPerson = {
  id: number;
  user_id: number;
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
};

/** Fields accepted by POST /memory-people. `full_name` + `relationship` required. */
export type MemoryPersonCreateInput = Partial<
  Omit<MemoryPerson, "id" | "user_id" | "created_at" | "updated_at">
> &
  Pick<MemoryPerson, "full_name" | "relationship">;

/** Fields accepted by PATCH /memory-people/{id} — everything optional. */
export type MemoryPersonUpdateInput = Partial<
  Omit<MemoryPerson, "id" | "user_id" | "created_at" | "updated_at">
>;

// ----------------------------------------------------------------------------
// Memory Vault (files)
// ----------------------------------------------------------------------------

export type MemoryFileType = "photo" | "voice" | "video" | "letter" | "chat" | string;

export type MemoryFile = {
  id: number;
  memory_person_id: number;
  file_name: string;
  original_name: string;
  file_path: string;
  thumbnail_path: string | null;
  file_type: MemoryFileType;
  mime_type: string;
  extension: string | null;
  file_size: number | null;
  duration: number | null;
  description: string | null;
  is_processed: boolean;
  processing_status: "pending" | "completed" | "failed" | string;
  processing_error: string | null;
  chunk_count: number;
  created_at: string;
  updated_at: string;
};

// ----------------------------------------------------------------------------
// Chat
// ----------------------------------------------------------------------------

export type ChatRole = "user" | "assistant" | string;

export type ChatMessage = {
  id: number;
  role: ChatRole;
  content: string;
  is_crisis_flagged: boolean;
  is_safety_response: boolean;
  created_at: string;
};

export type ChatHistory = {
  memory_person_id: number;
  messages: ChatMessage[];
};

export type RetrievedSource = {
  source_type: string;
  source_label: string | null;
  snippet: string;
};

export type ChatReply = {
  user_message: ChatMessage;
  assistant_message: ChatMessage;
  is_crisis_response: boolean;
  resources: string[] | null;
  sources_used: RetrievedSource[];
};

// ----------------------------------------------------------------------------
// Errors
// ----------------------------------------------------------------------------

export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
