export interface Sound {
  id: number
  title: string
  duration: string
  location: string
  date: string
  waves: number[]
}

export interface Album {
  id: number
  title: string
  count: number
  duration: string
  cover: null
  color: string
  label: string
  description: string
  sounds: Sound[]
}

export interface HistoryItem {
  id: string
  soundTitle: string
  albumTitle: string
  duration: string
  location: string
  ago: string
  albumColor: string
}

export interface FeedEntry {
  id: string
  user: string
  avatar: string
  soundTitle: string
  duration: string
  location: string
  ago: string
  likes: number
  comments: number
  waves: number[]
  albumColor: string
  note?: string
}
