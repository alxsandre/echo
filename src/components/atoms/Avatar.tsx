interface AvatarProps {
  initials: string
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

const sizes = {
  sm: 'size-[30px] text-[11px]',
  md: 'size-8 text-[11px] font-medium',
  lg: 'size-16 text-xl',
}

export function Avatar({ initials, size = 'md', color }: AvatarProps) {
  return (
    <div
      className={`rounded-full flex items-center justify-center shrink-0 ${sizes[size]} ${
        color ? 'text-bg' : 'bg-bg3 border border-border text-muted'
      }`}
      style={color ? { background: color } : undefined}
    >
      {initials}
    </div>
  )
}
