import { z } from "zod";

export const createCompanionSchema = z.object({
  // ==================================================
  // Basic Information
  // ==================================================
  full_name: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters"),

  nickname: z.string().default(""),

  relationship: z
    .string()
    .min(1, "Relationship is required"),

  gender: z.string().default(""),

  birth_date: z.string().default(""),

  passing_date: z.string().default(""),

  // ==================================================
  // Profile
  // ==================================================
  profile_picture: z.any().nullable(),

  occupation: z.string().default(""),

  country: z.string().default(""),

  city: z.string().default(""),

  languages: z.string().default(""),

  // ==================================================
  // About
  // ==================================================
  biography: z.string().default(""),

  favorite_quote: z.string().default(""),

  favorite_food: z.string().default(""),

  favorite_song: z.string().default(""),

  favorite_color: z.string().default(""),

  hobbies: z.string().default(""),

  personality_traits: z.preprocess(
    (value) => {
      if (Array.isArray(value)) return value;

      if (typeof value === "string") {
        return value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean);
      }

      return [];
    },
    z.array(z.string())
  ),

  // ==================================================
  // Relationship
  // ==================================================
  bond_story: z.string().default(""),

  nickname_for_user: z.string().default(""),

  special_memories: z.string().default(""),

  topics_to_avoid: z.string().default(""),

  communication_style: z.string().default(""),

  // ==================================================
  // AI Behaviour
  // ==================================================
  speaking_style: z.string().default(""),

  humor_level: z.string().default(""),

  emotional_tone: z.string().default(""),

  // ==================================================
  // Settings
  // ==================================================
  is_public: z.boolean().default(false),
});

export type CreateCompanionInput = z.infer<
  typeof createCompanionSchema
>;