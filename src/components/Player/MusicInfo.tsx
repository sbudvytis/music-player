import { useMusicPlayerStore } from '@/store/music'

function MusicInfo() {
  const { currentSong } = useMusicPlayerStore()

  return (
    <>
      {currentSong ? (
        <>
          <img src={currentSong.cover} alt={currentSong.title} className="max-w-12 rounded-sm" />
          <div>
            <div className="font-bold">{currentSong.title}</div>
            <div>{currentSong.artist}</div>
          </div>
        </>
      ) : (
        <div className="flex-1 text-center">
          <div className="font-bold">No music currently playing</div>
        </div>
      )}
    </>
  )
}

export default MusicInfo
