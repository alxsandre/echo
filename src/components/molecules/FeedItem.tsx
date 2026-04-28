'use client'

import { useState } from 'react'
import { PlayButton } from '@/components/atoms/PlayButton'
import { Waveform } from '@/components/atoms/Waveform'
import { Avatar } from '@/components/atoms/Avatar'
import { HeartIcon, ChatIcon, ShareIcon } from '@/components/atoms/Icon'
import { useAudioProgress } from '@/hooks/useAudioProgress'
import type { FeedEntry } from '@/types'

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
      className="bg-bg2 border border-border rounded-card p-[18px_20px] animate-fade-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-3.5">
        <Avatar initials={item.avatar} size="md" color={item.albumColor} />
        <div>
          <div className="text-[13px] font-medium text-text">{item.user}</div>
          <div className="text-[11px] text-muted">{item.location} · {item.ago}</div>
        </div>
      </div>

      {/* Sound block */}
      <div
        onClick={onPlay}
        className={`bg-bg3 rounded-lg p-[12px_14px] cursor-pointer hover:opacity-85 transition-opacity duration-150 ${item.note ? 'mb-3' : 'mb-3.5'}`}
      >
        <div className="flex items-center gap-2.5">
          <PlayButton playing={playing} />
          <div className="flex-1 min-w-0">
            <div className={`text-sm font-display font-normal ${playing ? 'text-accent' : 'text-text'}`}>
              {item.soundTitle}
            </div>
            <div className="text-[11px] text-muted mt-0.5">{item.duration}</div>
          </div>
          <Waveform waves={item.waves} playing={playing} progress={progress} />
        </div>
      </div>

      {/* Note */}
      {item.note && (
        <p className="text-[13px] text-muted leading-[1.6] italic mb-3.5">{item.note}</p>
      )}

      {/* Actions */}
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setLiked(l => !l)}
          className={`flex items-center gap-1.5 text-xs cursor-pointer bg-transparent border-none p-0 transition-colors duration-150 ${liked ? 'text-accent' : 'text-muted'}`}
        >
          <HeartIcon filled={liked} />
          {item.likes + (liked ? 1 : 0)}
        </button>
        <button className="flex items-center gap-1.5 text-xs text-muted cursor-pointer bg-transparent border-none p-0">
          <ChatIcon />
          {item.comments}
        </button>
        <button className="flex items-center gap-1.5 text-xs text-muted cursor-pointer bg-transparent border-none p-0 ml-auto">
          <ShareIcon />
          Partager
        </button>
      </div>
    </article>
  )
}
