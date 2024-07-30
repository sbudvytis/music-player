import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCirclePlay,
  faCirclePause,
  faForward,
  faBackward,
  faPause,
  faPlay,
  faVolumeOff,
  faVolumeHigh,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'

export const CirclePlayIcon = (
  <FontAwesomeIcon
    icon={faCirclePlay}
    className="text-white absolute w-4 h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  />
)
export const CirclePauseIcon = (
  <FontAwesomeIcon
    icon={faCirclePause}
    className="text-white absolute w-4 h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  />
)
export const PlayIcon = <FontAwesomeIcon icon={faPlay} />
export const PauseIcon = <FontAwesomeIcon icon={faPause} />
export const ForwardIcon = <FontAwesomeIcon icon={faForward} />
export const BackwardIcon = <FontAwesomeIcon icon={faBackward} />
export const VolumeDownIcon = <FontAwesomeIcon icon={faVolumeOff} />
export const VolumeUpIcon = <FontAwesomeIcon icon={faVolumeHigh} />
export const HeartIcon = <FontAwesomeIcon icon={faHeart} />
