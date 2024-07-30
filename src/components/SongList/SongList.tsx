import { useEffect } from 'react'
import { Song } from '@/types'
import { useMusicPlayerStore } from '@/store/music'
import AddFavourite from './AddFavourite'
import { formatTime } from '@/libs/utils'

import { CirclePlayIcon, CirclePauseIcon } from '@/components/Icons'

function SongList() {
  const { songs, currentSong, setCurrentSong, togglePlay, fetchSongs, setProgress, isPlaying } =
    useMusicPlayerStore()

  useEffect(() => {
    fetchSongs()
  }, [fetchSongs])

  function handleClick(song: Song) {
    const modal = document.getElementById(`favourites_modal_${song.id}`) as HTMLDialogElement
    if (modal && modal.open) {
      return
    }

    if (currentSong !== song) {
      setCurrentSong(song)
      if (!isPlaying) {
        togglePlay()
      }
    } else if (!isPlaying) {
      togglePlay()
    } else {
      setProgress(0)
    }
  }

  return (
    <div className="overflow-auto pl-4 pr-4 pb-4">
      <table className="table">
        <thead>
          <tr>
            <th className="hidden sm:table-cell">Song</th>
            <th className="hidden sm:table-cell">Artist</th>
            <th className="hidden sm:table-cell text-right">Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr
              key={song.id}
              onClick={() => handleClick(song)}
              className={`cursor-pointer transition-colors ${
                currentSong === song
                  ? 'bg-accent text-white'
                  : 'hover:bg-accent hover:text-white even:bg-base-100 odd:bg-base-200'
              }`}
            >
              <td className="flex items-center gap-2 relative cursor-pointer">
                <div className="relative">
                  {currentSong === song && (isPlaying ? CirclePlayIcon : CirclePauseIcon)}
                  <img src={song.cover} alt={song.title} className="max-w-8 rounded-sm" />
                </div>
                <div>
                  <span className="font-bold">{index + 1}</span> {song.title}
                  <div className="sm:hidden text-xs">{song.artist}</div>
                </div>
              </td>
              <td className="hidden sm:table-cell">{song.artist}</td>
              <td className="hidden sm:table-cell text-right">{formatTime(song.duration)}</td>
              <AddFavourite song={song} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SongList
