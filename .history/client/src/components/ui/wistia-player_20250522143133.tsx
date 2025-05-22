import React from 'react'; // Make sure React is imported
import { WistiaPlayer as OfficialWistiaPlayer } from '@wistia/wistia-player-react';

interface WistiaPlayerProps {
  // videoSrc should now be a mediaId (string)
  mediaId: string;
  className?: string;
}

export function WistiaPlayer({ mediaId, className = "" }: WistiaPlayerProps) {
  return (
    <div className={`aspect-video rounded-lg overflow-hidden shadow-xl ${className}`}>
      <OfficialWistiaPlayer
        mediaId={mediaId} // Use mediaId prop
        // The WistiaPlayer from @wistia/wistia-player-react often handles
        // width and height responsively by default when inside a container
        // with aspect ratio padding. If you need explicit control, you can
        // add style={{ width: '100%', height: '100%' }} or similar.
        // It generally doesn't take 'width' and 'height' as direct props.
        // Also, 'playing' is a state prop you'd manage, not typically set
        // statically unless you want autoplay.

        // Wistia player options are passed directly as props, not inside a 'config.wistia.options' object
        playbar={true}
        fullscreenButton={true}
        playButton={true}
        playerColor="666666"
        // You can add other Wistia options here, e.g., hashedId, etc.
        // Refer to Wistia's documentation for all available props for their React component.
      />
    </div>
  );
}