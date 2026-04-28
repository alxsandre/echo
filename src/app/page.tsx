"use client"

import { useCallback, useState } from "react"
import { AlbumCard } from "@/components/molecules/AlbumCard"
import { HistoryRow } from "@/components/molecules/HistoryRow"
import { NewAlbumModal } from "@/components/organisms/NewAlbumModal"
import { Avatar } from "@/components/atoms/Avatar"
import { PlusIcon } from "@/components/atoms/Icon"
import { ALBUMS } from "@/data/albums"
import { HISTORY } from "@/data/history"
import type { Album } from "@/types"

export default function MonEspace() {
  const [albums, setAlbums] = useState<Album[]>(ALBUMS)
  const [expandedAlbum, setExpandedAlbum] = useState<number | null>(null)
  const [playingId, setPlayingId] = useState<number | string | null>(null)
  const [showNewAlbum, setShowNewAlbum] = useState(false)

  const handlePlay = useCallback((id: number | string) => {
    setPlayingId((prev) => (prev === id ? null : id))
  }, [])

  const handleExpand = (id: number) => {
    setExpandedAlbum((prev) => (prev === id ? null : id))
  }

  return (
    <>
      <main className="mx-auto max-w-[900px] px-6 pb-20">
        {/* Profile hero */}
        <div className="animate-fade-up pt-10 pb-8">
          <div className="flex items-end gap-5">
            <Avatar initials="MR" size="lg" />
            <div>
              <h1 className="font-display text-[22px] leading-none font-medium tracking-[-0.02em]">
                Marie Roux
              </h1>
              <p className="text-muted mt-[5px] text-[13px]">
                46 sons · 4 albums · membre depuis jan. 2024
              </p>
            </div>
            <button
              onClick={() => setShowNewAlbum(true)}
              className="border-border text-muted hover:border-accent hover:text-accent ml-auto cursor-pointer rounded-full border bg-transparent px-3.5 py-[7px] text-xs transition-colors duration-150"
            >
              + Nouvel album
            </button>
          </div>
        </div>

        {/* Albums section */}
        <section>
          <h2 className="text-muted mb-3.5 text-[11px] font-medium tracking-[0.12em] uppercase">
            Albums sonores
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3">
            {albums.map((album, i) => (
              <AlbumCard
                key={album.id}
                album={album}
                expanded={expandedAlbum === album.id}
                onExpand={() => handleExpand(album.id)}
                playingId={typeof playingId === "number" ? playingId : null}
                onPlay={handlePlay}
                animDelay={`${i * 0.08}s`}
              />
            ))}
            {/* Add album card */}
            <div
              onClick={() => setShowNewAlbum(true)}
              className="border-border rounded-card text-muted animate-fade-up hover:border-accent hover:text-accent flex min-h-24 cursor-pointer items-center justify-center gap-1.5 border border-dashed text-xs transition-colors duration-200 [animation-delay:0.32s]"
            >
              <PlusIcon size={14} />
              Nouvel album
            </div>
          </div>
        </section>

        {/* History section */}
        <section className="mt-12">
          <h2 className="text-muted mb-3.5 text-[11px] font-medium tracking-[0.12em] uppercase">
            Écoutes récentes
          </h2>
          <div className="bg-bg2 border-border rounded-card border px-[18px]">
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
              duration: "0 min",
              cover: null,
              color,
              label,
              sounds: [],
            }
            setAlbums((prev) => [newAlbum, ...prev])
          }}
        />
      )}
    </>
  )
}
