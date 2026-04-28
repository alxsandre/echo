'use client'

import { useCallback, useState } from 'react'
import { Nav } from '@/components/organisms/Nav'
import { FeedItem } from '@/components/molecules/FeedItem'
import { FEED } from '@/data/feed'

export default function FilActualite() {
  const [playingId, setPlayingId] = useState<string | null>(null)

  const handlePlay = useCallback((id: string) => {
    setPlayingId(prev => (prev === id ? null : id))
  }, [])

  return (
    <div>
      <Nav />
      <main className="max-w-[560px] mx-auto px-6 pt-8 pb-20">
        <div className="mb-6 animate-fade-up">
          <h1 className="font-display text-[26px] font-normal">Fil d'actualité</h1>
          <p className="text-muted text-[13px] mt-1">Sons récemment partagés</p>
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
    </div>
  )
}
