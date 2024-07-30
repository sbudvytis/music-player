import { Song } from '@/types'

async function fetchSongs(): Promise<Song[]> {
  const response = await fetch('/api/songs.json')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const songs: Song[] = await response.json()
  return songs
}

export default fetchSongs
