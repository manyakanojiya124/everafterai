import { z } from "zod";

export const RELATIONSHIP_OPTIONS = [
  "Mother",
  "Father",
  "Brother",
  "Sister",
  "Grandmother",
  "Grandfather",
  "Partner",
  "Friend",
  "Mentor",
  "Child",
  "Other",
].map((label) => ({ label, value: label }));

export const GENDER_OPTIONS = ["Male", "Female", "Non-binary", "Prefer not to say"].map(
  (label) => ({ label, value: label }),
);

export const HUMOR_LEVEL_OPTIONS = ["Very low", "Low", "Moderate", "High", "Very high"].map(
  (label) => ({ label, value: label }),
);

export const EMOTIONAL_TONE_OPTIONS = [
  "Warm",
  "Calm",
  "Friendly",
  "Cheerful",
  "Serious",
  "Supportive",
].map((label) => ({ label, value: label }));

export const companionFormSchema = z.object({
  full_name: z.string().trim().min(2, "Full name must be at least 2 characters").max(150),
  nickname: z.string().trim().max(100).optional(),
  relationship: z.string().min(1, "Relationship is required"),
  gender: z.string().optional(),
  birth_date: z.string().optional(),
  passing_date: z.string().optional(),
  profile_picture: z.string().trim().optional(),
  occupation: z.string().trim().optional(),
  country: z.string().trim().optional(),
  city: z.string().trim().optional(),
  languages: z.string().trim().optional(),
  biography: z.string().trim().optional(),
  favorite_quote: z.string().trim().optional(),
  favorite_food: z.string().trim().optional(),
  favorite_song: z.string().trim().optional(),
  favorite_color: z.string().trim().optional(),
  hobbies: z.string().trim().optional(),
  personality_traits: z.string().trim().optional(),
  bond_story: z.string().trim().optional(),
  nickname_for_user: z.string().trim().optional(),
  special_memories: z.string().trim().optional(),
  topics_to_avoid: z.string().trim().optional(),
  communication_style: z.string().trim().optional(),
  speaking_style: z.string().trim().optional(),
  humor_level: z.string().optional(),
  emotional_tone: z.string().optional(),
  is_public: z.boolean(),
});

export type CompanionFormValues = z.infer<typeof companionFormSchema>;

export const companionFormDefaults: CompanionFormValues = {
  full_name: "",
  nickname: "",
  relationship: "",
  gender: "",
  birth_date: "",
  passing_date: "",
  profile_picture: "",
  occupation: "",
  country: "",
  city: "",
  languages: "",
  biography: "",
  favorite_quote: "",
  favorite_food: "",
  favorite_song: "",
  favorite_color: "",
  hobbies: "",
  personality_traits: "",
  bond_story: "",
  nickname_for_user: "",
  special_memories: "",
  topics_to_avoid: "",
  communication_style: "",
  speaking_style: "",
  humor_level: "",
  emotional_tone: "",
  is_public: false,
};

/** Turn a comma-separated trait string into the array the backend expects. */
export function traitsToArray(value?: string): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((trait) => trait.trim())
    .filter(Boolean);
}

export function traitsToString(value?: string[] | null): string {
  return value?.join(", ") ?? "";
}
