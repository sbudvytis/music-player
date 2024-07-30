import { create } from 'zustand'
import { Howl } from 'howler'
import { MusicPlayerState, MusicPlayerActions } from '@/types'
import fetchSongs from '@/api'

export const useMusicPlayerStore = create<MusicPlayerState & MusicPlayerActions>(set => ({
  songs: [],
  currentSong: null,
  isPlaying: false,
  volume: 0.5,
  sound: null,
  duration: 0,
  progress: 0,
  intervalId: null,

  fetchSongs: async () => {
    const songs = await fetchSongs()
    set({ songs })
  },

  setCurrentSong: song => {
    set(state => {
      if (state.sound) {
        state.sound.stop()
        state.sound.unload()
        state.intervalId && clearInterval(state.intervalId)
      }

      const sound = new Howl({ src: [song.url], autoplay: state.isPlaying })

      sound.once('load', () => {
        set({ duration: sound.duration() })
      })

      const intervalId = setInterval(() => {
        set({ progress: sound.seek() as number })
      }, 100)

      sound.on('end', () => {
        setTimeout(() => {
          state.skipNext()
        }, 500)
      })

      return { currentSong: song, sound, intervalId }
    })
  },

  togglePlay: () => {
    set(state => {
      if (state.sound) {
        state.isPlaying ? state.sound.pause() : state.sound.play()
      }
      return { isPlaying: !state.isPlaying }
    })
  },

  skipNext: () => {
    set(state => {
      const nextIndex =
        (state.songs.findIndex(song => song === state.currentSong) + 1) % state.songs.length
      const nextSong = state.songs[nextIndex]
      state.setCurrentSong(nextSong)
      return { currentSong: nextSong }
    })
  },

  skipPrevious: () => {
    set(state => {
      const prevIndex =
        (state.songs.findIndex(song => song === state.currentSong) - 1 + state.songs.length) %
        state.songs.length
      const prevSong = state.songs[prevIndex]
      state.setCurrentSong(prevSong)
      return { currentSong: prevSong }
    })
  },

  setVolume: volume => {
    set(state => {
      state.sound?.volume(volume)
      return { volume }
    })
  },

  setProgress: progress => {
    set(state => {
      state.sound?.seek(progress)
      return { progress }
    })
  },
}))
