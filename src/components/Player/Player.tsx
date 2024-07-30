import { useMusicPlayerStore } from '@/store/music'
import MusicControls from './MusicControls'
import ProgressBar from './ProgressBar'
import VolumeControl from './VolumeControl'
import MusicInfo from './MusicInfo'

function Player() {
  const { currentSong } = useMusicPlayerStore()

  return (
    <div className="sticky top-0 bg-base-200 rounded-2xl mb-4 mr-2 ml-2 mt-2 z-10 border-8 border-base-100">
      <div className="flex flex-col md:flex-row p-4 items-center justify-between">
        <div className="order-2 md:order-1 flex gap-2 py-4 items-center justify-center">
          <MusicControls disabled={!currentSong} />
        </div>
        <div className="order-1 md:order-2 bg-base-300 p-4 rounded-lg lg:min-w-96 min-h-24 flex items-center gap-4">
          <MusicInfo />
        </div>
        <div className="order-3 md:order-3 flex gap-2 items-center justify-center">
          <VolumeControl disabled={!currentSong} />
        </div>
      </div>
      <div className="flex pb-4 pl-4 pr-4 items-center gap-3">
        <ProgressBar disabled={!currentSong} />
      </div>
    </div>
  )
}

export default Player
