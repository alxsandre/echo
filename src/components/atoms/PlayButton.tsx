'use client'

interface PlayButtonProps {
  playing: boolean
  size?: 'sm' | 'md'
  variant?: 'default' | 'accent'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  title?: string
  className?: string
}

export function PlayButton({ playing, size = 'md', variant = 'default', onClick, title, className = '' }: PlayButtonProps) {
  const dim = size === 'sm' ? 'size-[26px]' : 'size-8'
  const barClass = size === 'sm' ? 'w-0.5 h-2' : 'w-[2.5px] h-2.5'
  const isAccent = variant === 'accent'

  const visual = playing ? (
    <span className="flex gap-0.5">
      <span className={`${barClass} rounded-sm animate-pulse-bar bg-bg`} />
      <span className={`${barClass} rounded-sm animate-pulse-bar-delayed bg-bg`} />
    </span>
  ) : (
    <svg width="10" height="11" viewBox="0 0 10 11" fill={isAccent ? 'var(--accent)' : 'var(--text-muted)'}>
      <path d="M2 1.5l7 4-7 4V1.5z" />
    </svg>
  )

  const base = [
    dim,
    'rounded-full flex items-center justify-center shrink-0 transition-all duration-150',
    isAccent
      ? `border border-accent ${playing ? 'bg-accent' : 'bg-accent-dim'}`
      : (playing ? 'bg-accent border-0' : 'bg-bg3 border border-border'),
    onClick ? 'cursor-pointer' : '',
    className,
  ].filter(Boolean).join(' ')

  if (onClick) {
    return (
      <button type="button" onClick={onClick} title={title} className={base}>
        {visual}
      </button>
    )
  }

  return <div className={base}>{visual}</div>
}
