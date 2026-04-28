'use client'

import { useState } from 'react'
import { SoundsField } from '@/components/molecules/SoundsField'
import { CloseIcon, ChevronRightIcon, CheckIcon } from '@/components/atoms/Icon'
import type { Album } from '@/types'

const COLORS = [
  'oklch(38% 0.06 200)',
  'oklch(38% 0.06 30)',
  'oklch(38% 0.06 320)',
  'oklch(38% 0.06 100)',
  'oklch(38% 0.06 260)',
  'oklch(38% 0.06 0)',
]

interface SoundEntry {
  id: number
  title: string
  location: string
  file: null
}

interface NewAlbumModalProps {
  onClose: () => void
  onCreate: (album: Omit<Album, 'id' | 'cover' | 'sounds'> & { soundCount: number }) => void
}

function DescriptionField({ value, onChange, open, onToggle }: {
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
        className={`bg-transparent border-none cursor-pointer p-0 flex items-center gap-1.5 text-xs transition-colors duration-200 ${open ? 'text-muted' : 'text-[oklch(45%_0.01_70)]'}`}
      >
        <ChevronRightIcon className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`} />
        <span className="text-[11px] tracking-[0.08em] uppercase">
          {open ? 'Description' : 'Ajouter une description'}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[120px] opacity-100 mt-2.5' : 'max-h-0 opacity-0 mt-0'}`}>
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Ce que vous voulez vous rappeler de ces sons..."
          rows={3}
          className="w-full bg-bg3 border border-border rounded-lg px-3 py-2.5 text-text text-[13px] outline-none resize-none leading-[1.6] transition-colors duration-150 focus:border-accent"
        />
      </div>
    </div>
  )
}

function ColorPicker({ colors, selected, onChange }: {
  colors: string[]
  selected: string
  onChange: (c: string) => void
}) {
  return (
    <div className="mb-6">
      <span className="text-[11px] tracking-[0.1em] uppercase text-muted block mb-2">Couleur</span>
      <div className="flex gap-2">
        {colors.map(c => (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={`size-6 rounded-full border-none cursor-pointer transition-transform duration-150 outline outline-2 outline-offset-2 ${selected === c ? 'outline-accent scale-[1.15]' : 'outline-transparent scale-100'}`}
            style={{ background: c }}
          />
        ))}
      </div>
    </div>
  )
}

function SuccessStep({ title, soundCount }: { title: string; soundCount: number }) {
  return (
    <div className="px-7 py-12 text-center animate-fade-in">
      <div className="size-12 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center text-bg">
        <CheckIcon />
      </div>
      <h3 className="font-display text-xl font-normal mb-1.5">{title}</h3>
      <p className="text-muted text-[13px]">
        Album créé avec succès
        {soundCount > 0 ? ` · ${soundCount} son${soundCount > 1 ? 's' : ''}` : ''}
      </p>
    </div>
  )
}

export function NewAlbumModal({ onClose, onCreate }: NewAlbumModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [color, setColor] = useState(COLORS[0])
  const [descOpen, setDescOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [pendingSounds, setPendingSounds] = useState<SoundEntry[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!title.trim()) return
    setStep(2)
    setTimeout(() => {
      onCreate({ title, description, label: tags, color, count: pendingSounds.length, duration: '0 min', soundCount: pendingSounds.length })
      onClose()
    }, 1400)
  }

  return (
    <div
      className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-[6px] flex items-center justify-center p-6 animate-fade-in"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-bg2 border border-border rounded-2xl w-full max-w-[460px] overflow-hidden animate-fade-up">
        {/* Color strip */}
        <div className="h-[5px] transition-colors duration-300" style={{ background: color }} />

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-7 pb-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-[22px] font-normal">Nouvel album</h2>
              <button
                type="button"
                onClick={onClose}
                className="bg-transparent border-none cursor-pointer text-muted p-1 leading-none hover:text-text transition-colors duration-150"
              >
                <CloseIcon size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Titre */}
            <label className="block mb-4">
              <span className="text-[11px] tracking-[0.1em] uppercase text-muted block mb-1.5">
                Titre de l'album
              </span>
              <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="ex. Été 2024 — Normandie"
                required
                autoFocus
                className="w-full bg-bg3 border border-border rounded-lg px-3 py-2.5 text-text text-[15px] font-display outline-none transition-colors duration-150 focus:border-accent"
              />
            </label>

            <DescriptionField
              value={description}
              onChange={setDescription}
              open={descOpen}
              onToggle={() => setDescOpen(o => !o)}
            />

            {/* Tags */}
            <label className="block mb-5">
              <span className="text-[11px] tracking-[0.1em] uppercase text-muted block mb-1.5">
                Mots-clés{' '}
                <span className="opacity-50 normal-case tracking-normal">séparés par des virgules</span>
              </span>
              <input
                value={tags}
                onChange={e => setTags(e.target.value)}
                placeholder="voyage, nature, famille..."
                className="w-full bg-bg3 border border-border rounded-lg px-3 py-2.5 text-text text-[13px] outline-none transition-colors duration-150 focus:border-accent"
              />
            </label>

            {/* Sons */}
            <div className="mb-5">
              <span className="text-[11px] tracking-[0.1em] uppercase text-muted block mb-2">
                Sons{' '}
                <span className="opacity-50 normal-case tracking-normal">— optionnel</span>
              </span>
              <SoundsField sounds={pendingSounds} onChange={setPendingSounds} />
            </div>

            <ColorPicker colors={COLORS} selected={color} onChange={setColor} />

            {/* Submit */}
            <div className="flex gap-2.5 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-[18px] py-[9px] rounded-lg border border-border bg-transparent text-muted cursor-pointer text-[13px] hover:text-text transition-colors duration-150"
              >
                Annuler
              </button>
              <button
                type="submit"
                className={`px-5 py-[9px] rounded-lg border-none bg-accent text-bg cursor-pointer text-[13px] font-medium transition-opacity duration-150 ${title.trim() ? 'opacity-100' : 'opacity-40'}`}
              >
                Créer l'album
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
