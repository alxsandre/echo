import type { FeedEntry } from '@/types'

export const FEED: FeedEntry[] = [
  { id: 'f1', user: 'camille_b', avatar: 'CB', soundTitle: 'Marché du dimanche', duration: '3:42', location: 'Lyon, Croix-Rousse', ago: 'il y a 1h', likes: 14, comments: 3, waves: [0.4,0.7,0.5,0.9,0.6,0.3,0.8,0.5,0.4,0.7,0.9,0.5,0.3,0.8,0.6,0.4,0.7,0.9,0.5,0.3], albumColor: 'oklch(38% 0.06 150)' },
  { id: 'f2', user: 'thibault_r', avatar: 'TR', soundTitle: 'Orage dans la montagne', duration: '6:12', location: 'Alpes, Chamonix', ago: 'il y a 3h', likes: 41, comments: 8, waves: [0.6,0.9,0.7,0.5,0.8,0.6,0.9,0.4,0.7,0.5,0.8,0.6,0.9,0.7,0.5,0.8,0.6,0.9,0.4,0.7], albumColor: 'oklch(38% 0.06 240)', note: "Coincé par l'orage en descendant du refuge. Ce moment de suspension avant les premiers grondements..." },
  { id: 'f3', user: 'sara.m', avatar: 'SM', soundTitle: 'Café du matin — fenêtre ouverte', duration: '2:01', location: 'Marseille, Vieux-Port', ago: 'hier', likes: 27, comments: 5, waves: [0.3,0.5,0.4,0.6,0.5,0.3,0.7,0.4,0.6,0.5,0.3,0.7,0.4,0.6,0.5,0.3,0.7,0.4,0.6,0.5], albumColor: 'oklch(38% 0.06 60)' },
  { id: 'f4', user: 'pierre_w', avatar: 'PW', soundTitle: 'Premier mot de Théo : "papa"', duration: '0:22', location: 'Paris', ago: 'hier', likes: 183, comments: 24, waves: [0.5,0.3,0.7,0.8,0.9,0.7,0.5,0.3,0.6,0.8,0.7,0.9,0.5,0.3,0.6,0.8,0.7,0.9,0.5,0.3], albumColor: 'oklch(38% 0.06 30)', note: "On attendait ça depuis des semaines." },
]
