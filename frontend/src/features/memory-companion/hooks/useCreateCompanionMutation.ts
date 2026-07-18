"use client";

import { useMutation } from "@tanstack/react-query";

import { createCompanion } from "@/lib/api";

export function useCreateCompanionMutation() {
  return useMutation({
    mutationFn: createCompanion,
  });
}