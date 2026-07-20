"use client";

import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import {
  FileText,
  Image as ImageIcon,
  Mic,
  Trash2,
  UploadCloud,
  Video,
  Star,
} from "lucide-react";

import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { EmptyState } from "@/components/ui/empty-state";
import { toast } from "@/components/ui/toaster";
import { useDeleteFile, useFiles, useUploadFile } from "@/hooks/use-files";
import { useUpdateCompanion } from "@/hooks/use-companions";
import { resolveFileUrl } from "@/lib/api";
import { bytesToSize, cn } from "@/lib/utils";
import type { MemoryFile } from "@/lib/types";

const FILTERS: { label: string; value: string }[] = [
  { label: "All", value: "" },
  { label: "Photos", value: "photo" },
  { label: "Voice", value: "voice" },
  { label: "Videos", value: "video" },
  { label: "Letters", value: "letter" },
];

function FileGlyph({ file }: { file: MemoryFile }) {
  const mime = file.mime_type ?? "";
  if (mime.startsWith("image/")) return <ImageIcon size={22} />;
  if (mime.startsWith("audio/")) return <Mic size={22} />;
  if (mime.startsWith("video/")) return <Video size={22} />;
  return <FileText size={22} />;
}

function statusDotClass(status: string) {
  if (status === "completed") return "bg-success";
  if (status === "failed") return "bg-danger";
  return "bg-accent";
}

export function MemoryVaultSheet({
  companionId,
  open,
  onClose,
}: {
  companionId: number;
  open: boolean;
  onClose: () => void;
}) {
  const [filter, setFilter] = useState("");
  const [pendingDelete, setPendingDelete] = useState<MemoryFile | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: files, isLoading } = useFiles(companionId, filter || undefined);
  const uploadMutation = useUploadFile(companionId);
  const deleteMutation = useDeleteFile(companionId);
  const updateCompanion = useUpdateCompanion(companionId);

  async function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (selected.length === 0) return;

    setIsUploading(true);
    try {
      for (const file of selected) {
        await uploadMutation.mutateAsync({ file });
      }
      toast.success(
        selected.length === 1 ? "File uploaded." : `${selected.length} files uploaded.`,
      );
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setIsUploading(false);
    }
  }

  async function handleDelete() {
    if (!pendingDelete) return;
    try {
      await deleteMutation.mutateAsync(pendingDelete.id);
      toast.success("File removed.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to remove this file.");
    } finally {
      setPendingDelete(null);
    }
  }

  async function handleSetAsProfilePhoto(file: MemoryFile) {
    try {
      await updateCompanion.mutateAsync({ profile_picture: file.file_path });
      toast.success("Profile photo updated.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to set profile photo.");
    }
  }

  return (
    <>
      <Sheet
        open={open}
        onClose={onClose}
        title="Memory Vault"
        description="Photos, voice notes, videos and letters that help them sound more like them."
        footer={
          <>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              hidden
              onChange={handleFilesSelected}
            />
            <Button
              className="w-full"
              isLoading={isUploading}
              onClick={() => fileInputRef.current?.click()}
            >
              <UploadCloud size={16} />
              Upload files
            </Button>
          </>
        }
      >
        <div className="mb-5 flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm transition-colors",
                filter === item.value
                  ? "bg-primary text-white"
                  : "bg-sunken text-ink-muted hover:text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="grid grid-cols-2 gap-3">
            {[0, 1, 2, 3].map((key) => (
              <div key={key} className="aspect-square animate-pulse rounded-xl bg-sunken/70" />
            ))}
          </div>
        )}

        {!isLoading && (!files || files.length === 0) && (
          <EmptyState
            icon={<UploadCloud size={28} />}
            title="Nothing uploaded yet"
            description="Every voice note, photo, or letter helps them sound more like them."
          />
        )}

        {!isLoading && files && files.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {files.map((file) => {
              const isImage = file.mime_type?.startsWith("image/");
              const thumb = resolveFileUrl(file.thumbnail_path ?? (isImage ? file.file_path : null));

              return (
                <div
                  key={file.id}
                  className="group relative overflow-hidden rounded-xl border border-line bg-surface"
                >
                  <div className="relative flex aspect-square items-center justify-center bg-sunken text-ink-muted">
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt={file.original_name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <FileGlyph file={file} />
                    )}

                    <span
                      title={file.processing_status}
                      className={cn(
                        "absolute right-2 top-2 h-2 w-2 rounded-full",
                        statusDotClass(file.processing_status),
                      )}
                    />

                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-ink/0 opacity-0 transition-opacity group-hover:bg-ink/30 group-hover:opacity-100">
                      {isImage && (
                        <button
                          title="Set as profile photo"
                          onClick={() => handleSetAsProfilePhoto(file)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-ink shadow"
                        >
                          <Star size={15} />
                        </button>
                      )}
                      <button
                        title="Delete"
                        onClick={() => setPendingDelete(file)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-danger shadow"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  <div className="p-2.5">
                    <p className="truncate text-xs font-medium text-ink">
                      {file.original_name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-ink-muted">
                      {bytesToSize(file.file_size)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Sheet>

      <ConfirmDialog
        open={pendingDelete !== null}
        title="Remove this file?"
        description={`"${pendingDelete?.original_name}" will be permanently removed from the Memory Vault.`}
        confirmLabel="Remove"
        danger
        isLoading={deleteMutation.isPending}
        onConfirm={handleDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </>
  );
}
