import { create } from 'zustand'
import { FavoritesState } from '@/types'

export const useFavoritesStore = create<FavoritesState>(set => ({
  favorites: [],

  addToFavorites: (songUrl: string) =>
    set(state => {
      if (!state.favorites.includes(songUrl)) {
        return { favorites: [...state.favorites, songUrl] }
      }
      return state
    }),

  removeFromFavorites: (songUrl: string) =>
    set(state => ({
      favorites: state.favorites.filter(url => url !== songUrl),
    })),
}))
