"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { deleteFile, listFiles, uploadFile } from "@/lib/api";
import type { MemoryFile } from "@/lib/types";

const filesKey = (companionId: number, fileType?: string) =>
  ["files", companionId, fileType ?? "all"] as const;

export function useFiles(companionId: number, fileType?: string) {
  return useQuery({
    queryKey: filesKey(companionId, fileType),
    queryFn: () => listFiles(companionId, fileType),
    enabled: Number.isFinite(companionId),
  });
}

export function useUploadFile(companionId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ file, description }: { file: File; description?: string }) =>
      uploadFile(companionId, file, description),
    onSuccess: (created) => {
      queryClient.setQueryData<MemoryFile[]>(filesKey(companionId), (prev) =>
        prev ? [created, ...prev] : [created],
      );
      queryClient.invalidateQueries({ queryKey: ["files", companionId] });
    },
  });
}

export function useDeleteFile(companionId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (fileId: number) => deleteFile(companionId, fileId),
    onSuccess: (_data, fileId) => {
      queryClient.setQueriesData<MemoryFile[]>(
        { queryKey: ["files", companionId] },
        (prev) => prev?.filter((file) => file.id !== fileId),
      );
    },
  });
}
