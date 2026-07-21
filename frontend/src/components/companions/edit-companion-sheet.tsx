"use client";

import { useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Trash2 } from "lucide-react";

import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PresenceAvatar } from "@/components/ui/presence-avatar";
import {
  CompanionFormValues,
  companionFormSchema,
  traitsToArray,
  traitsToString,
} from "@/components/wizard/schema";
import { BasicInfoStep } from "@/components/wizard/steps/basic-info";
import { AboutStep } from "@/components/wizard/steps/about";
import { RelationshipStep } from "@/components/wizard/steps/relationship-step";
import {
  useDeleteCompanionPhoto,
  useUpdateCompanion,
  useUploadCompanionPhoto,
} from "@/hooks/use-companions";
import { toast } from "@/components/ui/toaster";
import { resolveFileUrl } from "@/lib/api";
import type { MemoryPerson } from "@/lib/types";

function AvatarUploader({ companion }: { companion: MemoryPerson }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadPhoto = useUploadCompanionPhoto(companion.id);
  const deletePhoto = useDeleteCompanionPhoto(companion.id);

  async function handleSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    try {
      await uploadPhoto.mutateAsync(file);
      toast.success("Photo updated.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to upload photo.");
    }
  }

  async function handleRemove() {
    try {
      await deletePhoto.mutateAsync();
      toast.success("Photo removed.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to remove photo.");
    }
  }

  const isBusy = uploadPhoto.isPending || deletePhoto.isPending;

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <PresenceAvatar
          name={companion.full_name}
          src={resolveFileUrl(companion.profile_picture)}
          size="lg"
          ring={false}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={isBusy}
          title="Change photo"
          className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow transition-colors hover:bg-primary-hover disabled:opacity-60"
        >
          <Camera size={14} />
        </button>
      </div>

      <div>
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleSelect} />
        <Button
          type="button"
          variant="secondary"
          size="sm"
          isLoading={uploadPhoto.isPending}
          onClick={() => inputRef.current?.click()}
        >
          <Camera size={14} />
          Change photo
        </Button>
        {companion.profile_picture && (
          <button
            type="button"
            onClick={handleRemove}
            disabled={isBusy}
            className="ml-3 inline-flex items-center gap-1 text-sm text-danger hover:underline disabled:opacity-60"
          >
            <Trash2 size={13} />
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export function EditCompanionSheet({
  companion,
  open,
  onClose,
}: {
  companion: MemoryPerson;
  open: boolean;
  onClose: () => void;
}) {
  const mutation = useUpdateCompanion(companion.id);

  const methods = useForm<CompanionFormValues>({
    resolver: zodResolver(companionFormSchema),
    defaultValues: toFormValues(companion),
  });

  useEffect(() => {
    if (open) methods.reset(toFormValues(companion));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, companion]);

  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      await mutation.mutateAsync({
        ...values,
        personality_traits: traitsToArray(values.personality_traits),
      });
      toast.success("Profile updated.");
      onClose();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to save changes.");
    }
  });

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title="Edit profile"
      description={`Update what EverAfter knows about ${companion.full_name}.`}
      footer={
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button isLoading={mutation.isPending} onClick={onSubmit}>
            Save changes
          </Button>
        </div>
      }
    >
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="space-y-10">
          <AvatarUploader companion={companion} />
          <BasicInfoStep />
          <AboutStep />
          <RelationshipStep />
        </form>
      </FormProvider>
    </Sheet>
  );
}

function toFormValues(companion: MemoryPerson): CompanionFormValues {
  return {
    full_name: companion.full_name,
    nickname: companion.nickname ?? "",
    relationship: companion.relationship,
    gender: companion.gender ?? "",
    birth_date: companion.birth_date ?? "",
    passing_date: companion.passing_date ?? "",
    profile_picture: companion.profile_picture ?? "",
    occupation: companion.occupation ?? "",
    country: companion.country ?? "",
    city: companion.city ?? "",
    languages: companion.languages ?? "",
    biography: companion.biography ?? "",
    favorite_quote: companion.favorite_quote ?? "",
    favorite_food: companion.favorite_food ?? "",
    favorite_song: companion.favorite_song ?? "",
    favorite_color: companion.favorite_color ?? "",
    hobbies: companion.hobbies ?? "",
    personality_traits: traitsToString(companion.personality_traits),
    bond_story: companion.bond_story ?? "",
    nickname_for_user: companion.nickname_for_user ?? "",
    special_memories: companion.special_memories ?? "",
    topics_to_avoid: companion.topics_to_avoid ?? "",
    communication_style: companion.communication_style ?? "",
    speaking_style: companion.speaking_style ?? "",
    humor_level: companion.humor_level ?? "",
    emotional_tone: companion.emotional_tone ?? "",
    is_public: companion.is_public,
  };
}
