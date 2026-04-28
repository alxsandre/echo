"use client"

import { useState } from "react"
import { PlayButton } from "@/components/atoms/PlayButton"
import { Waveform } from "@/components/atoms/Waveform"
import { Avatar } from "@/components/atoms/Avatar"
import { HeartIcon, ChatIcon, ShareIcon } from "@/components/atoms/Icon"
import { useAudioProgress } from "@/hooks/useAudioProgress"
import type { FeedEntry } from "@/types"

interface FeedItemProps {
  item: FeedEntry
  playing: boolean
  onPlay: () => void
  index: number
}

export function FeedItem({ item, playing, onPlay, index }: FeedItemProps) {
  const [liked, setLiked] = useState(false)
  const progress = useAudioProgress(playing, 0.008)

  return (
    <article
      className="bg-bg2 border-border rounded-card animate-fade-up border p-[18px_20px]"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Header */}
      <div className="mb-3.5 flex items-center gap-2.5">
        <Avatar initials={item.avatar} size="md" color={item.albumColor} />
        <div>
          <div className="text-text text-[13px] font-medium">{item.user}</div>
          <div className="text-muted text-[11px]">
            {item.location} · {item.ago}
          </div>
        </div>
      </div>

      {/* Sound block */}
      <div
        onClick={onPlay}
        className={`bg-bg3 cursor-pointer rounded-lg p-[12px_14px] transition-opacity duration-150 hover:opacity-85 ${item.note ? "mb-3" : "mb-3.5"}`}
      >
        <div className="flex items-center gap-2.5">
          <PlayButton playing={playing} />
          <div className="min-w-0 flex-1">
            <div
              className={`font-display text-sm font-normal ${playing ? "text-accent" : "text-text"}`}
            >
              {item.soundTitle}
            </div>
            <div className="text-muted mt-0.5 text-[11px]">{item.duration}</div>
          </div>
          <Waveform waves={item.waves} playing={playing} progress={progress} />
        </div>
      </div>

      {/* Note */}
      {item.note && (
        <p className="text-muted mb-3.5 text-[13px] leading-[1.6] italic">{item.note}</p>
      )}

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setLiked((l) => !l)}
          className={`flex cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 text-xs transition-colors duration-150 ${liked ? "text-accent" : "text-muted"}`}
        >
          <HeartIcon filled={liked} />
          {item.likes + (liked ? 1 : 0)}
        </button>
        <button className="text-muted flex cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 text-xs">
          <ChatIcon />
          {item.comments}
        </button>
        <button className="text-muted ml-auto flex cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 text-xs">
          <ShareIcon />
          Partager
        </button>
      </div>
    </article>
  )
}
