import React, { useRef, useImperativeHandle, forwardRef } from "react";
import ReactPlayer from "@wistia/react-player";

interface WistiaPlayerProps {
  videoSrc: string;
  className?: string;
  // Добавляем пропс для контроля состояния воспроизведения
  // Обычно не контролируется напрямую из родителя, но здесь пригодится для остановки
  isPlaying?: boolean; // Добавим этот пропс
}

// Используем forwardRef, чтобы родительский компонент мог получить доступ к этому рефу
export const WistiaPlayer = forwardRef<any, WistiaPlayerProps>(
  ({ videoSrc, className = "", isPlaying = false }, ref) => {
    const playerRef = useRef<any>(null); // Реф для доступа к методам ReactPlayer

    // Предоставляем методы внутреннего ReactPlayer через useImperativeHandle
    useImperativeHandle(ref, () => ({
      // Методы, которые мы хотим "экспортировать"
      play: () => {
        if (playerRef.current) {
          // ReactPlayer управляет playing пропсом, поэтому прямого метода play() нет
          // Вместо этого мы будем управлять им из родителя через isPlaying пропс
          // (хотя в нашем случае, мы хотим только паузу/сброс из родителя)
        }
      },
      pause: () => {
        if (playerRef.current) {
          playerRef.current.seekTo(0); // Сбрасываем видео на начало
          // playing=false пропс в JSX сделает паузу автоматически
        }
      },
      // Вы можете добавить другие методы, если они нужны
      getInternalPlayer: () => playerRef.current?.getInternalPlayer(), // Доступ к нативному плееру Wistia
    }));

    return (
      <div className={`aspect-video rounded-lg overflow-hidden shadow-xl ${className}`}>
        <ReactPlayer
          ref={playerRef} // Привязываем реф к ReactPlayer
          url={videoSrc}
          width="100%"
          height="100%"
          controls={true}
          playing={isPlaying} // Используем пропс для контроля воспроизведения
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
);