type MusicPlayerState = {
  songs: Song[]
  currentSong: Song | null
  isPlaying: boolean
  volume: number
  sound: Howl | null
  duration: number
  progress: number
  intervalId: number | null
}

type FavoritesState = {
  favorites: string[]
  addToFavorites: (songUrl: string) => void
  removeFromFavorites: (songUrl: string) => void
}

type MusicPlayerActions = {
  setCurrentSong: (song: Song) => void
  togglePlay: () => void
  skipNext: () => void
  skipPrevious: () => void
  setVolume: (volume: number) => void
  setProgress: (progress: number) => void
  fetchSongs: () => Promise<void>
}

type Song = {
  id: number
  title: string
  artist: string
  url: string
  cover: string
  duration: number
}

type DisabledPropType = {
  disabled: boolean
}

export type { MusicPlayerState, FavoritesState, MusicPlayerActions, Song, DisabledPropType }
