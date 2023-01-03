import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function Videos() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
     <div className="w-[500px] text-center my-0 mx-auto relative">
      <VideoPlayer
       className=""
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
       <button onClick={() => setIsPlaying(!isPlaying)}
       className="bg-blue-200 py-2 px-3 text-center my-0 mx-auto absolute opacity-40 rounded-[10px] top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      </div>
    </>
  );
}
