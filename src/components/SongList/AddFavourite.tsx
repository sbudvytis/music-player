import { HeartIcon } from '@/components/Icons'
import { Song } from '@/types'
import { useFavoritesStore } from '@/store/favourite'

type AddFavouriteProps = {
  song: Song
}

function AddFavourite({ song }: AddFavouriteProps) {
  const store = useFavoritesStore()
  const isFavorite = store.favorites.includes(song.url)

  const handleFavouriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isFavorite) {
      store.removeFromFavorites(song.url)
    } else {
      store.addToFavorites(song.url)
      const modal = document.getElementById(`favourites_modal_${song.id}`) as HTMLDialogElement
      if (modal) {
        modal.showModal()
        setTimeout(() => {
          modal.close()
        }, 2000)
      }
    }
  }

  return (
    <td className="text-right">
      <div
        className="tooltip tooltip-left"
        data-tip={`${isFavorite ? 'Remove from favourites' : 'Add to favourites'}`}
      >
        <button
          onClick={handleFavouriteClick}
          className={`btn btn-xs btn-circle bg-base-300 border-0 hover:text-accent hover:bg-white ${
            isFavorite ? 'bg-white text-accent' : ''
          }`}
        >
          {HeartIcon}
        </button>
      </div>
      <dialog id={`favourites_modal_${song.id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center text-black">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg text-primary">Success! {HeartIcon}</h3>
          <p className="py-4 md:text-lg text-md">
            {song.title} by {song.artist} added to favourites
          </p>
        </div>
      </dialog>
    </td>
  )
}

export default AddFavourite
