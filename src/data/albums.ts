import type { Album } from "@/types"

export const ALBUMS: Album[] = [
  {
    id: 1,
    title: "Été 2023 — Bretagne",
    count: 12,
    duration: "38 min",
    cover: null,
    color: "oklch(38% 0.06 200)",
    label: "plage, vagues",
    description:
      "Une semaine en Bretagne avec Thomas. Le bruit de la mer le soir, les cris du marché le matin — tout ce que les photos ne peuvent pas capturer.",
    sounds: [
      {
        id: 11,
        title: "Le marché de Cancale",
        duration: "2:14",
        location: "Cancale, Bretagne",
        date: "12 août 2023",
        waves: [
          0.3, 0.6, 0.9, 0.5, 0.7, 0.4, 0.8, 0.5, 0.3, 0.6, 0.9, 0.7, 0.4, 0.5, 0.8, 0.3, 0.6, 0.4,
          0.7, 0.9,
        ],
      },
      {
        id: 12,
        title: "Vagues sur les rochers",
        duration: "4:02",
        location: "Pointe du Grouin",
        date: "13 août 2023",
        waves: [
          0.5, 0.8, 0.4, 0.9, 0.6, 0.3, 0.7, 0.8, 0.5, 0.4, 0.9, 0.6, 0.3, 0.8, 0.5, 0.7, 0.4, 0.9,
          0.6, 0.3,
        ],
      },
      {
        id: 13,
        title: "Goélands du port",
        duration: "1:45",
        location: "Saint-Malo",
        date: "14 août 2023",
        waves: [
          0.4, 0.7, 0.5, 0.3, 0.8, 0.6, 0.9, 0.4, 0.5, 0.7, 0.3, 0.8, 0.6, 0.4, 0.9, 0.5, 0.7, 0.3,
          0.6, 0.8,
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Naissances",
    count: 4,
    duration: "9 min",
    cover: null,
    color: "oklch(38% 0.06 30)",
    label: "famille, précieux",
    description:
      "Les sons qu'on ne peut plus jamais recréer. Les premiers cris, les premiers rires. Pour ne rien oublier.",
    sounds: [
      {
        id: 21,
        title: "Premiers pleurs — Lucie",
        duration: "1:12",
        location: "Maternité Lariboisière",
        date: "3 mars 2022",
        waves: [
          0.8, 0.9, 0.7, 0.6, 0.8, 0.9, 0.5, 0.7, 0.8, 0.6, 0.9, 0.7, 0.5, 0.8, 0.6, 0.9, 0.7, 0.5,
          0.8, 0.9,
        ],
      },
      {
        id: 22,
        title: "Son rire à 3 mois",
        duration: "0:48",
        location: "Paris, XIe",
        date: "1 juin 2022",
        waves: [
          0.3, 0.5, 0.7, 0.9, 0.6, 0.4, 0.8, 0.5, 0.7, 0.3, 0.9, 0.6, 0.4, 0.8, 0.5, 0.7, 0.3, 0.9,
          0.6, 0.4,
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Tokyo, mars 2024",
    count: 23,
    duration: "1h 12min",
    cover: null,
    color: "oklch(38% 0.06 320)",
    label: "voyage, urbain",
    description:
      "10 jours à Tokyo seul. La ville a un son unique — dense, poli, inattendu. J'ai enregistré tout ce qui me surprenait.",
    sounds: [
      {
        id: 31,
        title: "Shibuya crossing — rush hour",
        duration: "3:21",
        location: "Shibuya, Tokyo",
        date: "8 mars 2024",
        waves: [
          0.6, 0.9, 0.5, 0.8, 0.4, 0.7, 0.9, 0.6, 0.5, 0.8, 0.4, 0.7, 0.9, 0.6, 0.5, 0.8, 0.4, 0.7,
          0.9, 0.6,
        ],
      },
      {
        id: 32,
        title: "Temple Senso-ji matin",
        duration: "5:14",
        location: "Asakusa, Tokyo",
        date: "9 mars 2024",
        waves: [
          0.2, 0.4, 0.6, 0.3, 0.5, 0.8, 0.3, 0.4, 0.6, 0.2, 0.5, 0.8, 0.3, 0.4, 0.6, 0.2, 0.5, 0.8,
          0.3, 0.4,
        ],
      },
      {
        id: 33,
        title: "Pluie sur les toits",
        duration: "6:44",
        location: "Yanaka, Tokyo",
        date: "10 mars 2024",
        waves: [
          0.5, 0.6, 0.5, 0.7, 0.6, 0.5, 0.7, 0.6, 0.5, 0.7, 0.6, 0.5, 0.7, 0.6, 0.5, 0.7, 0.6, 0.5,
          0.7, 0.6,
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Voix de grand-mère",
    count: 7,
    duration: "21 min",
    cover: null,
    color: "oklch(38% 0.06 100)",
    label: "mémoire, voix",
    description:
      "Sa voix. Ses histoires. Ses silences. Enregistrés lors du dernier Noël à Bordeaux, sans vraiment savoir pourquoi — on sait maintenant.",
    sounds: [
      {
        id: 41,
        title: "Sa recette de quiche",
        duration: "4:30",
        location: "Bordeaux",
        date: "Noël 2021",
        waves: [
          0.4, 0.6, 0.5, 0.7, 0.4, 0.6, 0.5, 0.7, 0.4, 0.6, 0.5, 0.7, 0.4, 0.6, 0.5, 0.7, 0.4, 0.6,
          0.5, 0.7,
        ],
      },
      {
        id: 42,
        title: "Histoires d'enfance",
        duration: "8:12",
        location: "Bordeaux",
        date: "25 déc. 2021",
        waves: [
          0.3, 0.5, 0.7, 0.9, 0.4, 0.6, 0.8, 0.3, 0.5, 0.7, 0.9, 0.4, 0.6, 0.8, 0.3, 0.5, 0.7, 0.9,
          0.4, 0.6,
        ],
      },
    ],
  },
]
