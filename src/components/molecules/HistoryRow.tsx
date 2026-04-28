"use client"

import { PlayButton } from "@/components/atoms/PlayButton"
import type { HistoryItem } from "@/types"

interface HistoryRowProps {
  item: HistoryItem
  playing: boolean
  onPlay: () => void
  index: number
}

export function HistoryRow({ item, playing, onPlay, index }: HistoryRowProps) {
  return (
    <div
      onClick={onPlay}
      className="border-border animate-fade-up flex cursor-pointer items-center gap-3 border-b py-2.5 transition-opacity duration-150 hover:opacity-75"
      style={{ animationDelay: `${0.3 + index * 0.07}s` }}
    >
      <div className="size-1 shrink-0 rounded-full" style={{ background: item.albumColor }} />

      <div className="min-w-0 flex-1">
        <div
          className={`truncate text-[13px] font-medium ${playing ? "text-accent" : "text-text"}`}
        >
          {item.soundTitle}
        </div>
        <div className="text-muted mt-0.5 text-[11px]">
          {item.albumTitle} · {item.location}
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-0.5">
        <span className="text-muted text-[11px]">{item.duration}</span>
        <span className="text-muted text-[10px] opacity-70">{item.ago}</span>
      </div>

      <PlayButton playing={playing} size="sm" />
    </div>
  )
}
