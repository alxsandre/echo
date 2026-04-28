"use client"

import { SoundRow } from "@/components/molecules/SoundRow"
import { PlayButton } from "@/components/atoms/PlayButton"
import { ChevronDownIcon } from "@/components/atoms/Icon"
import type { Album } from "@/types"

interface AlbumCardProps {
  album: Album
  expanded: boolean
  onExpand: () => void
  playingId: number | null
  onPlay: (id: number) => void
  animDelay: string
}

export function AlbumCard({
  album,
  expanded,
  onExpand,
  playingId,
  onPlay,
  animDelay,
}: AlbumCardProps) {
  const firstSound = album.sounds[0]
  const isFirstPlaying = firstSound != null && playingId === firstSound.id

  return (
    <div
      className="bg-bg2 border-border rounded-card animate-fade-up overflow-hidden border transition-shadow duration-200 hover:shadow-[0_8px_32px_oklch(0%_0%_0_/_0.4)]"
      style={{ animationDelay: animDelay }}
    >
      {/* Color strip */}
      <div className="h-[6px] w-full" style={{ background: album.color }} />

      {/* Header */}
      <div onClick={onExpand} className="cursor-pointer p-[16px_18px] select-none">
        <div className="flex items-start justify-between gap-2">
          {firstSound && (
            <PlayButton
              playing={isFirstPlaying}
              variant="accent"
              onClick={(e) => {
                e.stopPropagation()
                onPlay(firstSound.id)
              }}
              title={firstSound.title}
              className="mt-0.5 mr-1.5"
            />
          )}

          <div className="min-w-0 flex-1">
            <h3 className="font-display text-text mb-1.5 text-[15px] leading-[1.2] font-medium">
              {album.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted text-[11px]">
                {album.count} sons · {album.duration}
              </span>
              <span className="bg-bg3 text-muted border-border rounded-full border px-[7px] py-0.5 text-[10px]">
                {album.label}
              </span>
            </div>
          </div>

          <ChevronDownIcon
            className={`text-muted mt-[3px] shrink-0 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {/* Expanded sounds */}
      {expanded && (
        <div className="animate-fade-in px-[18px] pb-3.5">
          {album.description && (
            <p className="text-muted border-border border-b py-[10px] pb-3 text-xs leading-[1.7]">
              {album.description}
            </p>
          )}
          <div className="pt-1">
            {album.sounds.map((s) => (
              <SoundRow
                key={s.id}
                sound={s}
                playing={playingId === s.id}
                onPlay={() => onPlay(s.id)}
              />
            ))}
          </div>
          <div className="mt-3.5 flex justify-end gap-2">
            <button className="border-border text-muted hover:border-accent hover:text-accent cursor-pointer rounded-full border bg-transparent px-3 py-[5px] text-[11px] transition-colors duration-150">
              + Ajouter un son
            </button>
            <button className="border-border text-muted hover:border-accent hover:text-accent cursor-pointer rounded-full border bg-transparent px-3 py-[5px] text-[11px] transition-colors duration-150">
              Modifier
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
