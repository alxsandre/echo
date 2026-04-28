"use client"

import { CloseIcon, PlusIcon, UploadIcon } from "@/components/atoms/Icon"

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
    onChange([...sounds, { id: Date.now(), title: "", location: "", file: null }])
  const removeSound = (id: number) => onChange(sounds.filter((s) => s.id !== id))
  const update = (id: number, key: "title" | "location", val: string) =>
    onChange(sounds.map((s) => (s.id === id ? { ...s, [key]: val } : s)))

  return (
    <div>
      {sounds.map((s, i) => (
        <div
          key={s.id}
          className="bg-bg3 border-border animate-fade-in mb-2 rounded-lg border p-[12px_12px_10px]"
        >
          <div className="mb-2 flex items-center gap-2">
            <div className="border-border text-muted hover:border-accent hover:text-accent flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-md border border-dashed transition-colors duration-150">
              <UploadIcon />
            </div>
            <input
              value={s.title}
              onChange={(e) => update(s.id, "title", e.target.value)}
              placeholder={`Son ${i + 1} — titre`}
              className="border-border text-text focus:border-accent flex-1 border-0 border-b bg-transparent pb-1 text-[13px] transition-colors duration-150 outline-none"
            />
            <button
              type="button"
              onClick={() => removeSound(s.id)}
              className="text-muted hover:text-text shrink-0 cursor-pointer border-none bg-transparent p-0.5 transition-colors duration-150"
            >
              <CloseIcon />
            </button>
          </div>
          <input
            value={s.location}
            onChange={(e) => update(s.id, "location", e.target.value)}
            placeholder="Lieu d'enregistrement — optionnel"
            className="border-border text-muted focus:border-accent w-full border-0 border-b bg-transparent pb-0.5 text-[11px] transition-colors duration-150 outline-none"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addSound}
        className="border-border text-muted hover:border-accent hover:text-accent flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-dashed bg-transparent py-[9px] text-xs transition-colors duration-150"
      >
        <PlusIcon />
        Ajouter un son
      </button>
    </div>
  )
}
