import { useMusicPlayerStore } from '@/store/music'
import { VolumeDownIcon, VolumeUpIcon } from '@/components/Icons'
import { DisabledPropType } from '@/types'

function VolumeControl({ disabled }: DisabledPropType) {
  const { volume, setVolume } = useMusicPlayerStore()

  return (
    <>
      <span className=" text-primary text-sm">{VolumeDownIcon}</span>
      <input
        className={`range range-xs range-primary w-24 ${disabled ? 'cursor-not-allowed' : ''}`}
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={disabled ? () => {} : e => setVolume(parseFloat(e.target.value))}
      />
      <span className="md:pr-2 text-primary text-sm">{VolumeUpIcon}</span>
    </>
  )
}

export default VolumeControl
