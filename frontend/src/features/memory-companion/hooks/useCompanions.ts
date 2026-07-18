"use client";

import { useQuery } from "@tanstack/react-query";
import { getCompanions } from "@/lib/api";

export function useCompanions() {
  return useQuery({
    queryKey: ["companions"],
    queryFn: getCompanions,
  });
}