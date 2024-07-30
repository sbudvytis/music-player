import { DisabledPropType } from '@/types'
import { useMusicPlayerStore } from '@/store/music'

import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon } from '@/components/Icons'

function MusicControls({ disabled }: DisabledPropType) {
  const { isPlaying, togglePlay, skipNext, skipPrevious } = useMusicPlayerStore()

  return (
    <>
      <button
        className={
          'btn btn-link text-primary text-lg min-w-12' + (disabled ? ' cursor-not-allowed' : '')
        }
        onClick={!disabled ? skipPrevious : () => {}}
      >
        {BackwardIcon}
      </button>
      <button
        className={
          'btn btn-link text-primary text-lg min-w-12' + (disabled ? ' cursor-not-allowed' : '')
        }
        onClick={!disabled ? togglePlay : () => {}}
      >
        {isPlaying ? PauseIcon : PlayIcon}
      </button>
      <button
        className={
          'btn btn-link text-primary text-lg min-w-12' + (disabled ? ' cursor-not-allowed' : '')
        }
        onClick={!disabled ? skipNext : () => {}}
      >
        {ForwardIcon}
      </button>
    </>
  )
}

export default MusicControls
