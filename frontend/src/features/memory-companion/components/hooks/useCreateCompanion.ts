"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createCompanionSchema,
  CreateCompanionInput,
} from "../schemas/create-companion";

export function useCreateCompanion() {
  return useForm<CreateCompanionInput>({
    resolver: zodResolver(createCompanionSchema),

    mode: "onChange",

    defaultValues: {
      // ==================================================
      // Basic Information
      // ==================================================
      full_name: "",
      nickname: "",
      relationship: "",
      gender: "",
      birth_date: "",
      passing_date: "",

      // ==================================================
      // Profile
      // ==================================================
      profile_picture: null,
      occupation: "",
      country: "",
      city: "",
      languages: "",

      // ==================================================
      // About
      // ==================================================
      biography: "",
      favorite_quote: "",
      favorite_food: "",
      favorite_song: "",
      favorite_color: "",
      hobbies: "",

      // Stored as string[] in the backend
      personality_traits: [],

      // ==================================================
      // Relationship
      // ==================================================
      bond_story: "",
      nickname_for_user: "",
      special_memories: "",
      topics_to_avoid: "",
      communication_style: "",

      // ==================================================
      // AI Behaviour
      // ==================================================
      speaking_style: "",
      humor_level: "",
      emotional_tone: "",

      // ==================================================
      // Settings
      // ==================================================
      is_public: false,
    },
  });
}