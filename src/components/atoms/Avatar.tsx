interface AvatarProps {
  initials: string
  size?: "sm" | "md" | "lg"
  color?: string
}

const sizes = {
  sm: "size-[30px] text-[11px]",
  md: "size-8 text-[11px] font-medium",
  lg: "size-16 text-xl",
}

export function Avatar({ initials, size = "md", color }: AvatarProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full ${sizes[size]} ${
        color ? "text-bg" : "bg-bg3 border-border text-muted border"
      }`}
      style={color ? { background: color } : undefined}
    >
      {initials}
    </div>
  )
}
