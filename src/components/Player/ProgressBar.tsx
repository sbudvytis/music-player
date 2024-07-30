import { useMusicPlayerStore } from '@/store/music'
import { DisabledPropType } from '@/types'
import { formatTime } from '@/libs/utils'

function ProgressBar({ disabled }: DisabledPropType) {
  const { duration, progress, setProgress } = useMusicPlayerStore()

  const remainingDuration = duration - progress

  return (
    <>
      <p className="w-10 ml-1 text-sm">{formatTime(progress)}</p>
      <input
        type="range"
        className={'range range-accent range-xs w-full' + (disabled ? ' cursor-not-allowed' : '')}
        value={progress}
        max={duration}
        onChange={disabled ? () => {} : e => setProgress(parseFloat(e.target.value))}
      />
      <p className="min-w-10 ml-2 text-sm">-{formatTime(remainingDuration)}</p>
    </>
  )
}

export default ProgressBar
