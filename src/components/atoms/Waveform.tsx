"use client"

interface WaveformProps {
  waves: number[]
  playing: boolean
  progress?: number
  small?: boolean
}

export function Waveform({ waves, playing, progress = 0, small }: WaveformProps) {
  const h = small ? 24 : 32
  const barW = small ? 2 : 3
  const gap = small ? 1.5 : 2
  const total = waves.length
  const width = total * (barW + gap) - gap
  const played = Math.floor(progress * total)

  return (
    <svg width={width} height={h} className="block shrink-0">
      {waves.map((v, i) => {
        const bh = Math.max(2, v * h)
        const x = i * (barW + gap)
        const y = (h - bh) / 2
        const isPast = i < played
        const isCurrent = playing && i === played
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barW}
            height={bh}
            rx={barW / 2}
            fill={isPast ? "var(--accent)" : "currentColor"}
            opacity={isPast ? 1 : isCurrent ? 1 : 0.28}
            style={
              isCurrent
                ? {
                    animation: `waveAnim 0.6s ease-in-out infinite`,
                    transformOrigin: `${x + barW / 2}px ${h / 2}px`,
                    animationDelay: `${i * 0.03}s`,
                  }
                : undefined
            }
          />
        )
      })}
    </svg>
  )
}
