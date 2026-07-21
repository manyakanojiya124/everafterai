import {
  FileText,
  HeartHandshake,
  Image as ImageIcon,
  MessageCircle,
  Mic,
  PhoneCall,
  Video,
} from "lucide-react";

import { cn, formatFullDateTime } from "@/lib/utils";
import type { ChatMessage, RetrievedSource } from "@/lib/types";

function AiMonogram() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary font-serif text-xs font-medium text-white">
      EA
    </div>
  );
}

export function UserBubble({ message }: { message: ChatMessage }) {
  return (
    <div className="flex justify-end">
      <div
        title={formatFullDateTime(message.created_at)}
        className="max-w-[78%] rounded-[20px] rounded-tr-md bg-primary/12 px-4 py-2.5 text-[15px] leading-relaxed text-ink"
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}

function sourceIcon(sourceType: string) {
  const type = sourceType.toLowerCase();
  if (type.includes("photo") || type.includes("image")) return ImageIcon;
  if (type.includes("voice") || type.includes("audio")) return Mic;
  if (type.includes("video")) return Video;
  if (type.includes("chat")) return MessageCircle;
  return FileText;
}

function SourceChips({ sources }: { sources?: RetrievedSource[] }) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="ml-[42px] mt-1.5 flex flex-wrap gap-1.5">
      {sources.map((source, index) => {
        const Icon = sourceIcon(source.source_type);
        return (
          <span
            key={index}
            title={source.snippet}
            className="inline-flex max-w-[220px] items-center gap-1.5 truncate rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] text-ink-muted"
          >
            <Icon size={11} className="shrink-0" />
            <span className="truncate">{source.source_label ?? source.source_type}</span>
          </span>
        );
      })}
    </div>
  );
}

export function AssistantBubble({
  message,
  sources,
}: {
  message: ChatMessage;
  sources?: RetrievedSource[];
}) {
  return (
    <div>
      <div className="flex items-end gap-2.5">
        <AiMonogram />
        <div
          title={formatFullDateTime(message.created_at)}
          className="max-w-[78%] rounded-[20px] rounded-bl-md bg-sunken px-4 py-2.5 text-[15px] leading-relaxed text-ink"
        >
          <p className="whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
      <SourceChips sources={sources} />
    </div>
  );
}

const PHONE_PATTERN = /^\+?[\d\s().-]{6,}$/;

function ResourceRow({ resource }: { resource: string }) {
  const isPhone = PHONE_PATTERN.test(resource.trim());
  const isUrl = /^https?:\/\//i.test(resource.trim());

  const content = (
    <span className="flex items-center gap-2.5 rounded-xl bg-surface/70 px-3.5 py-2.5 text-sm text-crisis-ink transition-colors hover:bg-surface">
      <PhoneCall size={15} className="shrink-0" />
      <span>{resource}</span>
    </span>
  );

  if (isPhone) {
    return (
      <a href={`tel:${resource.replace(/[^\d+]/g, "")}`} className="block">
        {content}
      </a>
    );
  }
  if (isUrl) {
    return (
      <a href={resource} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}

export function CrisisCard({
  message,
  resources,
}: {
  message: ChatMessage;
  resources: string[] | null;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <AiMonogram />
      <div className="w-full max-w-[86%] rounded-2xl bg-crisis p-5">
        <div className="flex items-center gap-2 text-crisis-ink">
          <HeartHandshake size={18} />
          <h3 className="font-serif text-base font-medium">
            You matter, and support is here
          </h3>
        </div>
        <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-crisis-ink">
          {message.content}
        </p>
        {resources && resources.length > 0 && (
          <div className="mt-4 space-y-2">
            {resources.map((resource, index) => (
              <ResourceRow key={index} resource={resource} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function DependencyNote({ children }: { children: string }) {
  return (
    <p className={cn("ml-[42px] max-w-[78%] text-xs italic leading-relaxed text-ink-muted")}>
      {children}
    </p>
  );
}
