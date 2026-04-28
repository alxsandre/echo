"use client"

import { PlayButton } from "@/components/atoms/PlayButton"
import { Waveform } from "@/components/atoms/Waveform"
import { useAudioProgress } from "@/hooks/useAudioProgress"
import type { Sound } from "@/types"

interface SoundRowProps {
  sound: Sound
  playing: boolean
  onPlay: () => void
}

export function SoundRow({ sound, playing, onPlay }: SoundRowProps) {
  const progress = useAudioProgress(playing)

  return (
    <div
      onClick={onPlay}
      className="border-border flex cursor-pointer items-center gap-3 border-b py-2.5 transition-opacity duration-150 hover:opacity-80"
    >
      <PlayButton playing={playing} size="sm" />

      <div className="min-w-0 flex-1">
        <div
          className={`truncate text-[13px] font-medium ${playing ? "text-accent" : "text-text"}`}
        >
          {sound.title}
        </div>
        <div className="text-muted mt-0.5 text-[11px]">
          📍 {sound.location} · {sound.date}
        </div>
      </div>

      <Waveform waves={sound.waves} playing={playing} progress={progress} small />

      <div className="text-muted shrink-0 text-[11px]">{sound.duration}</div>
    </div>
  )
}
