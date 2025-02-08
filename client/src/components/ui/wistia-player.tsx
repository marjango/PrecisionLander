import ReactPlayer from "@wistia/react-player";

interface WistiaPlayerProps {
  videoSrc: string;
  className?: string;
}

export function WistiaPlayer({ videoSrc, className = "" }: WistiaPlayerProps) {
  return (
    <div className={`aspect-video rounded-lg overflow-hidden shadow-xl ${className}`}>
      <ReactPlayer
        url={videoSrc}
        width="100%"
        height="100%"
        controls={true}
        playing={false}
        config={{
          wistia: {
            options: {
              playbar: true,
              fullscreenButton: true,
              playButton: true,
              playerColor: "666666",
            },
          },
        }}
      />
    </div>
  );
}
