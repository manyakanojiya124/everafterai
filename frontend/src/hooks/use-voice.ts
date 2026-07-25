"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  deleteVoiceReference,
  getVoiceReference,
  uploadVoiceReference,
} from "@/lib/api";
import { ApiError } from "@/lib/api";

const voiceReferenceKey = (companionId: number) => ["voice-reference", companionId] as const;

/** 404 just means "no reference uploaded yet" — not a real error. */
export function useVoiceReference(companionId: number) {
  return useQuery({
    queryKey: voiceReferenceKey(companionId),
    queryFn: () => getVoiceReference(companionId),
    enabled: Number.isFinite(companionId),
    retry: false,
    throwOnError: false,
  });
}

export function useUploadVoiceReference(companionId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => uploadVoiceReference(companionId, file),
    onSuccess: (reference) => {
      queryClient.setQueryData(voiceReferenceKey(companionId), reference);
    },
  });
}

export function useDeleteVoiceReference(companionId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteVoiceReference(companionId),
    onSuccess: () => {
      queryClient.setQueryData(voiceReferenceKey(companionId), null);
    },
  });
}

export function isNotFound(error: unknown): boolean {
  return error instanceof ApiError && error.status === 404;
}
