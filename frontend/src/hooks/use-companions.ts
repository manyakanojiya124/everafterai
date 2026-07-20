"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createCompanion,
  deleteCompanion,
  getCompanion,
  getCompanions,
  updateCompanion,
} from "@/lib/api";
import type {
  MemoryPerson,
  MemoryPersonCreateInput,
  MemoryPersonUpdateInput,
} from "@/lib/types";

export const companionsKey = ["companions"] as const;
export const companionKey = (id: number) => ["companions", id] as const;

export function useCompanions() {
  return useQuery({
    queryKey: companionsKey,
    queryFn: getCompanions,
  });
}

export function useCompanion(id: number | null) {
  return useQuery({
    queryKey: companionKey(id ?? -1),
    queryFn: () => getCompanion(id as number),
    enabled: id !== null && Number.isFinite(id),
  });
}

export function useCreateCompanion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: MemoryPersonCreateInput) => createCompanion(input),
    onSuccess: (created) => {
      queryClient.setQueryData<MemoryPerson[]>(companionsKey, (prev) =>
        prev ? [created, ...prev] : [created],
      );
      queryClient.setQueryData(companionKey(created.id), created);
    },
  });
}

export function useUpdateCompanion(id: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: MemoryPersonUpdateInput) => updateCompanion(id, input),
    onSuccess: (updated) => {
      queryClient.setQueryData(companionKey(id), updated);
      queryClient.setQueryData<MemoryPerson[]>(companionsKey, (prev) =>
        prev?.map((person) => (person.id === id ? updated : person)),
      );
    },
  });
}

export function useDeleteCompanion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteCompanion(id),
    onSuccess: (_data, id) => {
      queryClient.setQueryData<MemoryPerson[]>(companionsKey, (prev) =>
        prev?.filter((person) => person.id !== id),
      );
      queryClient.removeQueries({ queryKey: companionKey(id) });
    },
  });
}
