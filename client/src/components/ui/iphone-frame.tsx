import { useEffect, useRef } from 'react';

export function IPhoneFrame({ videoSrc }: { videoSrc: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative w-[300px] h-[600px] mx-auto">
      {/* iPhone Frame */}
      <div className="absolute inset-0 bg-black rounded-[50px] shadow-xl">
        {/* Inner Frame */}
        <div className="absolute inset-2 bg-black rounded-[46px] overflow-hidden border-[3px] border-gray-800">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-[20px] z-20" />
          {/* Screen Content */}
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover rounded-[40px]"
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
}
