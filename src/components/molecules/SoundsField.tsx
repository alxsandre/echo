'use client'

import { CloseIcon, PlusIcon, UploadIcon } from '@/components/atoms/Icon'

interface SoundEntry {
  id: number
  title: string
  location: string
  file: null
}

interface SoundsFieldProps {
  sounds: SoundEntry[]
  onChange: (sounds: SoundEntry[]) => void
}

export function SoundsField({ sounds, onChange }: SoundsFieldProps) {
  const addSound = () =>
    onChange([...sounds, { id: Date.now(), title: '', location: '', file: null }])
  const removeSound = (id: number) => onChange(sounds.filter(s => s.id !== id))
  const update = (id: number, key: 'title' | 'location', val: string) =>
    onChange(sounds.map(s => (s.id === id ? { ...s, [key]: val } : s)))

  return (
    <div>
      {sounds.map((s, i) => (
        <div
          key={s.id}
          className="bg-bg3 border border-border rounded-lg p-[12px_12px_10px] mb-2 animate-fade-in"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="size-9 rounded-md border border-dashed border-border flex items-center justify-center shrink-0 cursor-pointer text-muted hover:border-accent hover:text-accent transition-colors duration-150">
              <UploadIcon />
            </div>
            <input
              value={s.title}
              onChange={e => update(s.id, 'title', e.target.value)}
              placeholder={`Son ${i + 1} — titre`}
              className="flex-1 bg-transparent border-0 border-b border-border pb-1 text-text text-[13px] outline-none transition-colors duration-150 focus:border-accent"
            />
            <button
              type="button"
              onClick={() => removeSound(s.id)}
              className="bg-transparent border-none cursor-pointer text-muted p-0.5 shrink-0 hover:text-text transition-colors duration-150"
            >
              <CloseIcon />
            </button>
          </div>
          <input
            value={s.location}
            onChange={e => update(s.id, 'location', e.target.value)}
            placeholder="Lieu d'enregistrement — optionnel"
            className="w-full bg-transparent border-0 border-b border-border pb-0.5 text-muted text-[11px] outline-none transition-colors duration-150 focus:border-accent"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addSound}
        className="w-full py-[9px] rounded-lg border border-dashed border-border bg-transparent text-muted text-xs cursor-pointer flex items-center justify-center gap-1.5 hover:border-accent hover:text-accent transition-colors duration-150"
      >
        <PlusIcon />
        Ajouter un son
      </button>
    </div>
  )
}
