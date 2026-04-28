import { useEffect, useRef, useState } from 'react'

export function useAudioProgress(playing: boolean, speed = 0.01) {
  const [progress, setProgress] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (playing) {
      timer.current = setInterval(() => setProgress(p => Math.min(p + speed, 1)), 100)
    } else {
      if (timer.current) clearInterval(timer.current)
      setProgress(0)
    }
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [playing, speed])

  return progress
}
