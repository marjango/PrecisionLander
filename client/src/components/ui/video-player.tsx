import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoSrc: string;
  className?: string;
}

export function VideoPlayer({ videoSrc, className = "" }: VideoPlayerProps) {
  return (
    <div className={`aspect-video rounded-lg overflow-hidden shadow-xl ${className}`}>
      <ReactPlayer
        url={videoSrc}
        width="100%"
        height="100%"
        controls={true}
        playing={false}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
              disablePictureInPicture: true,
            },
          },
        }}
      />
    </div>
  );
}
