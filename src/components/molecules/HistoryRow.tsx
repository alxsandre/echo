'use client'

import { PlayButton } from '@/components/atoms/PlayButton'
import type { HistoryItem } from '@/types'

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
      className="flex items-center gap-3 py-2.5 border-b border-border cursor-pointer hover:opacity-75 transition-opacity duration-150 animate-fade-up"
      style={{ animationDelay: `${0.3 + index * 0.07}s` }}
    >
      <div
        className="size-1 rounded-full shrink-0"
        style={{ background: item.albumColor }}
      />

      <div className="flex-1 min-w-0">
        <div className={`text-[13px] font-medium truncate ${playing ? 'text-accent' : 'text-text'}`}>
          {item.soundTitle}
        </div>
        <div className="text-[11px] text-muted mt-0.5">
          {item.albumTitle} · {item.location}
        </div>
      </div>

      <div className="flex flex-col items-end gap-0.5 shrink-0">
        <span className="text-[11px] text-muted">{item.duration}</span>
        <span className="text-[10px] text-muted opacity-70">{item.ago}</span>
      </div>

      <PlayButton playing={playing} size="sm" />
    </div>
  )
}
