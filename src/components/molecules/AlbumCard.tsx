'use client'

import { SoundRow } from '@/components/molecules/SoundRow'
import { PlayButton } from '@/components/atoms/PlayButton'
import { ChevronDownIcon } from '@/components/atoms/Icon'
import type { Album } from '@/types'

interface AlbumCardProps {
  album: Album
  expanded: boolean
  onExpand: () => void
  playingId: number | null
  onPlay: (id: number) => void
  animDelay: string
}

export function AlbumCard({ album, expanded, onExpand, playingId, onPlay, animDelay }: AlbumCardProps) {
  const firstSound = album.sounds[0]
  const isFirstPlaying = firstSound != null && playingId === firstSound.id

  return (
    <div
      className="bg-bg2 border border-border rounded-card overflow-hidden animate-fade-up hover:shadow-[0_8px_32px_oklch(0%_0%_0_/_0.4)] transition-shadow duration-200"
      style={{ animationDelay: animDelay }}
    >
      {/* Color strip */}
      <div className="h-[6px] w-full" style={{ background: album.color }} />

      {/* Header */}
      <div onClick={onExpand} className="p-[16px_18px] cursor-pointer select-none">
        <div className="flex items-start justify-between gap-2">
          {firstSound && (
            <PlayButton
              playing={isFirstPlaying}
              variant="accent"
              onClick={e => { e.stopPropagation(); onPlay(firstSound.id) }}
              title={firstSound.title}
              className="mt-0.5 mr-1.5"
            />
          )}

          <div className="flex-1 min-w-0">
            <h3 className="font-display text-[15px] font-medium leading-[1.2] text-text mb-1.5">
              {album.title}
            </h3>
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-[11px] text-muted">
                {album.count} sons · {album.duration}
              </span>
              <span className="text-[10px] bg-bg3 text-muted px-[7px] py-0.5 rounded-full border border-border">
                {album.label}
              </span>
            </div>
          </div>

          <ChevronDownIcon
            className={`shrink-0 mt-[3px] transition-transform duration-300 text-muted ${expanded ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* Expanded sounds */}
      {expanded && (
        <div className="px-[18px] pb-3.5 animate-fade-in">
          {album.description && (
            <p className="text-xs text-muted leading-[1.7] py-[10px] pb-3 border-b border-border">
              {album.description}
            </p>
          )}
          <div className="pt-1">
            {album.sounds.map(s => (
              <SoundRow
                key={s.id}
                sound={s}
                playing={playingId === s.id}
                onPlay={() => onPlay(s.id)}
              />
            ))}
          </div>
          <div className="flex gap-2 mt-3.5 justify-end">
            <button className="text-[11px] px-3 py-[5px] rounded-full border border-border bg-transparent text-muted cursor-pointer hover:border-accent hover:text-accent transition-colors duration-150">
              + Ajouter un son
            </button>
            <button className="text-[11px] px-3 py-[5px] rounded-full border border-border bg-transparent text-muted cursor-pointer hover:border-accent hover:text-accent transition-colors duration-150">
              Modifier
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
