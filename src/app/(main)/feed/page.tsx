"use client"

import { useCallback, useState } from "react"
import { FeedItem } from "@/components/molecules/FeedItem"
import { FEED } from "@/data/feed"

export default function FilActualite() {
  const [playingId, setPlayingId] = useState<string | null>(null)

  const handlePlay = useCallback((id: string) => {
    setPlayingId((prev) => (prev === id ? null : id))
  }, [])

  return (
    <main className="mx-auto max-w-[560px] px-6 pt-8 pb-20">
      <div className="animate-fade-up mb-6">
        <h1 className="font-display text-[26px] font-normal">Fil d&apos;actualité</h1>
        <p className="text-muted mt-1 text-[13px]">Sons récemment partagés</p>
      </div>
      <div className="flex flex-col gap-3.5">
        {FEED.map((item, i) => (
          <FeedItem
            key={item.id}
            item={item}
            playing={playingId === item.id}
            onPlay={() => handlePlay(item.id)}
            index={i}
          />
        ))}
      </div>
    </main>
  )
}
