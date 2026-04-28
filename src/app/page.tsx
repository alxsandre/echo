'use client'

import { useCallback, useState } from 'react'
import { Nav } from '@/components/organisms/Nav'
import { AlbumCard } from '@/components/molecules/AlbumCard'
import { HistoryRow } from '@/components/molecules/HistoryRow'
import { NewAlbumModal } from '@/components/organisms/NewAlbumModal'
import { Avatar } from '@/components/atoms/Avatar'
import { PlusIcon } from '@/components/atoms/Icon'
import { ALBUMS } from '@/data/albums'
import { HISTORY } from '@/data/history'
import type { Album } from '@/types'

export default function MonEspace() {
  const [albums, setAlbums] = useState<Album[]>(ALBUMS)
  const [expandedAlbum, setExpandedAlbum] = useState<number | null>(null)
  const [playingId, setPlayingId] = useState<number | string | null>(null)
  const [showNewAlbum, setShowNewAlbum] = useState(false)

  const handlePlay = useCallback((id: number | string) => {
    setPlayingId(prev => (prev === id ? null : id))
  }, [])

  const handleExpand = (id: number) => {
    setExpandedAlbum(prev => (prev === id ? null : id))
  }

  return (
    <div>
      <Nav />
      <main className="max-w-[900px] mx-auto px-6 pb-20">

        {/* Profile hero */}
        <div className="pt-10 pb-8 animate-fade-up">
          <div className="flex items-end gap-5">
            <Avatar initials="MR" size="lg" />
            <div>
              <h1 className="font-display text-[22px] font-medium tracking-[-0.02em] leading-none">
                Marie Roux
              </h1>
              <p className="text-muted text-[13px] mt-[5px]">
                46 sons · 4 albums · membre depuis jan. 2024
              </p>
            </div>
            <button
              onClick={() => setShowNewAlbum(true)}
              className="ml-auto text-xs px-3.5 py-[7px] rounded-full border border-border bg-transparent text-muted cursor-pointer hover:border-accent hover:text-accent transition-colors duration-150"
            >
              + Nouvel album
            </button>
          </div>
        </div>

        {/* Albums section */}
        <section>
          <h2 className="text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-3.5">
            Albums sonores
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3">
            {albums.map((album, i) => (
              <AlbumCard
                key={album.id}
                album={album}
                expanded={expandedAlbum === album.id}
                onExpand={() => handleExpand(album.id)}
                playingId={typeof playingId === 'number' ? playingId : null}
                onPlay={handlePlay}
                animDelay={`${i * 0.08}s`}
              />
            ))}
            {/* Add album card */}
            <div
              onClick={() => setShowNewAlbum(true)}
              className="border border-dashed border-border rounded-card min-h-24 flex items-center justify-center cursor-pointer text-muted text-xs gap-1.5 animate-fade-up [animation-delay:0.32s] hover:border-accent hover:text-accent transition-colors duration-200"
            >
              <PlusIcon size={14} />
              Nouvel album
            </div>
          </div>
        </section>

        {/* History section */}
        <section className="mt-12">
          <h2 className="text-[11px] font-medium tracking-[0.12em] uppercase text-muted mb-3.5">
            Écoutes récentes
          </h2>
          <div className="bg-bg2 border border-border rounded-card px-[18px]">
            {HISTORY.map((item, i) => (
              <HistoryRow
                key={item.id}
                item={item}
                playing={playingId === item.id}
                onPlay={() => handlePlay(item.id)}
                index={i}
              />
            ))}
          </div>
        </section>
      </main>

      {showNewAlbum && (
        <NewAlbumModal
          onClose={() => setShowNewAlbum(false)}
          onCreate={({ title, description, label, color, count }) => {
            const newAlbum: Album = {
              id: Date.now(),
              title,
              description,
              count,
              duration: '0 min',
              cover: null,
              color,
              label,
              sounds: [],
            }
            setAlbums(prev => [newAlbum, ...prev])
          }}
        />
      )}
    </div>
  )
}
