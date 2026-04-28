'use client'

import { PlayButton } from '@/components/atoms/PlayButton'
import { Waveform } from '@/components/atoms/Waveform'
import { useAudioProgress } from '@/hooks/useAudioProgress'
import type { Sound } from '@/types'

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
      className="flex items-center gap-3 py-2.5 border-b border-border cursor-pointer hover:opacity-80 transition-opacity duration-150"
    >
      <PlayButton playing={playing} size="sm" />

      <div className="flex-1 min-w-0">
        <div className={`font-medium text-[13px] truncate ${playing ? 'text-accent' : 'text-text'}`}>
          {sound.title}
        </div>
        <div className="text-[11px] text-muted mt-0.5">
          📍 {sound.location} · {sound.date}
        </div>
      </div>

      <Waveform waves={sound.waves} playing={playing} progress={progress} small />

      <div className="text-[11px] text-muted shrink-0">{sound.duration}</div>
    </div>
  )
}
