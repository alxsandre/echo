"use client"

import { useState } from "react"
import { SoundsField } from "@/components/molecules/SoundsField"
import { CloseIcon, ChevronRightIcon, CheckIcon } from "@/components/atoms/Icon"
import type { Album } from "@/types"

const COLORS = [
  "oklch(38% 0.06 200)",
  "oklch(38% 0.06 30)",
  "oklch(38% 0.06 320)",
  "oklch(38% 0.06 100)",
  "oklch(38% 0.06 260)",
  "oklch(38% 0.06 0)",
]

interface SoundEntry {
  id: number
  title: string
  location: string
  file: null
}

interface NewAlbumModalProps {
  onClose: () => void
  onCreate: (album: Omit<Album, "id" | "cover" | "sounds"> & { soundCount: number }) => void
}

function DescriptionField({
  value,
  onChange,
  open,
  onToggle,
}: {
  value: string
  onChange: (v: string) => void
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={onToggle}
        className={`flex cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 text-xs transition-colors duration-200 ${open ? "text-muted" : "text-[oklch(45%_0.01_70)]"}`}
      >
        <ChevronRightIcon
          className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}
        />
        <span className="text-[11px] tracking-[0.08em] uppercase">
          {open ? "Description" : "Ajouter une description"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "mt-2.5 max-h-[120px] opacity-100" : "mt-0 max-h-0 opacity-0"}`}
      >
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Ce que vous voulez vous rappeler de ces sons..."
          rows={3}
          className="bg-bg3 border-border text-text focus:border-accent w-full resize-none rounded-lg border px-3 py-2.5 text-[13px] leading-[1.6] transition-colors duration-150 outline-none"
        />
      </div>
    </div>
  )
}

function ColorPicker({
  colors,
  selected,
  onChange,
}: {
  colors: string[]
  selected: string
  onChange: (c: string) => void
}) {
  return (
    <div className="mb-6">
      <span className="text-muted mb-2 block text-[11px] tracking-[0.1em] uppercase">Couleur</span>
      <div className="flex gap-2">
        {colors.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={`size-6 cursor-pointer rounded-full border-none outline outline-2 outline-offset-2 transition-transform duration-150 ${selected === c ? "outline-accent scale-[1.15]" : "scale-100 outline-transparent"}`}
            style={{ background: c }}
          />
        ))}
      </div>
    </div>
  )
}

function SuccessStep({ title, soundCount }: { title: string; soundCount: number }) {
  return (
    <div className="animate-fade-in px-7 py-12 text-center">
      <div className="bg-accent text-bg mx-auto mb-4 flex size-12 items-center justify-center rounded-full">
        <CheckIcon />
      </div>
      <h3 className="font-display mb-1.5 text-xl font-normal">{title}</h3>
      <p className="text-muted text-[13px]">
        Album créé avec succès
        {soundCount > 0 ? ` · ${soundCount} son${soundCount > 1 ? "s" : ""}` : ""}
      </p>
    </div>
  )
}

export function NewAlbumModal({ onClose, onCreate }: NewAlbumModalProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")
  const [color, setColor] = useState(COLORS[0])
  const [descOpen, setDescOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [pendingSounds, setPendingSounds] = useState<SoundEntry[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!title.trim()) return
    setStep(2)
    setTimeout(() => {
      onCreate({
        title,
        description,
        label: tags,
        color,
        count: pendingSounds.length,
        duration: "0 min",
        soundCount: pendingSounds.length,
      })
      onClose()
    }, 1400)
  }

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[500] flex items-center justify-center bg-black/60 p-6 backdrop-blur-[6px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="bg-bg2 border-border animate-fade-up w-full max-w-[460px] overflow-hidden rounded-2xl border">
        {/* Color strip */}
        <div className="h-[5px] transition-colors duration-300" style={{ background: color }} />

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-7 pb-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-[22px] font-normal">Nouvel album</h2>
              <button
                type="button"
                onClick={onClose}
                className="text-muted hover:text-text cursor-pointer border-none bg-transparent p-1 leading-none transition-colors duration-150"
              >
                <CloseIcon size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Titre */}
            <label className="mb-4 block">
              <span className="text-muted mb-1.5 block text-[11px] tracking-[0.1em] uppercase">
                Titre de l&apos;album
              </span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="ex. Été 2024 — Normandie"
                required
                autoFocus
                className="bg-bg3 border-border text-text font-display focus:border-accent w-full rounded-lg border px-3 py-2.5 text-[15px] transition-colors duration-150 outline-none"
              />
            </label>

            <DescriptionField
              value={description}
              onChange={setDescription}
              open={descOpen}
              onToggle={() => setDescOpen((o) => !o)}
            />

            {/* Tags */}
            <label className="mb-5 block">
              <span className="text-muted mb-1.5 block text-[11px] tracking-[0.1em] uppercase">
                Mots-clés{" "}
                <span className="tracking-normal normal-case opacity-50">
                  séparés par des virgules
                </span>
              </span>
              <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="voyage, nature, famille..."
                className="bg-bg3 border-border text-text focus:border-accent w-full rounded-lg border px-3 py-2.5 text-[13px] transition-colors duration-150 outline-none"
              />
            </label>

            {/* Sons */}
            <div className="mb-5">
              <span className="text-muted mb-2 block text-[11px] tracking-[0.1em] uppercase">
                Sons <span className="tracking-normal normal-case opacity-50">— optionnel</span>
              </span>
              <SoundsField sounds={pendingSounds} onChange={setPendingSounds} />
            </div>

            <ColorPicker colors={COLORS} selected={color} onChange={setColor} />

            {/* Submit */}
            <div className="flex justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="border-border text-muted hover:text-text cursor-pointer rounded-lg border bg-transparent px-[18px] py-[9px] text-[13px] transition-colors duration-150"
              >
                Annuler
              </button>
              <button
                type="submit"
                className={`bg-accent text-bg cursor-pointer rounded-lg border-none px-5 py-[9px] text-[13px] font-medium transition-opacity duration-150 ${title.trim() ? "opacity-100" : "opacity-40"}`}
              >
                Créer l&apos;album
              </button>
            </div>
          </form>
        ) : (
          <SuccessStep title={title} soundCount={pendingSounds.length} />
        )}
      </div>
    </div>
  )
}
