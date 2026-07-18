export interface MemoryCompanion {
  // ==========================
  // Basic Information
  // ==========================
  full_name: string;
  nickname: string;
  relationship: string;
  gender: string;
  birth_date: string;
  passing_date: string;

  // ==========================
  // Profile
  // ==========================
  profile_picture: File | null;

  occupation: string;
  country: string;
  city: string;
  languages: string;

  // ==========================
  // Personality
  // ==========================
  biography: string;

  favorite_quote: string;
  favorite_food: string;
  favorite_song: string;
  favorite_color: string;
  hobbies: string;

  personality_traits: string[];

  // ==========================
  // Your Relationship
  // ==========================
  bond_story: string;

  nickname_for_user: string;

  special_memories: string;

  topics_to_avoid: string;

  communication_style: string;

  // ==========================
  // AI Configuration
  // ==========================
  speaking_style: string;

  humor_level: string;

  emotional_tone: string;

  // ==========================
  // Metadata
  // ==========================
  is_public: boolean;
}