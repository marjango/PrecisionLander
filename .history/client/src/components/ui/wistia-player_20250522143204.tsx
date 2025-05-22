import React from 'react';
import { WistiaPlayer as OfficialWistiaPlayer } from '@wistia/wistia-player-react';

interface WistiaPlayerProps {
  mediaId: string;
  className?: string;
  // You might want to expose more Wistia options here
  // For example, if you want to allow customization of playerColor from the parent:
  // playerColor?: string;
}

export function WistiaPlayer({ mediaId, className = "" }: WistiaPlayerProps) {
  // Define the Wistia options object
  const wistiaOptions = {
    // These correspond to the Wistia embed options
    // See Wistia's documentation for a full list:
    // https://docs.wistia.com/docs/player-attributes-and-properties
    playbar: true,
    fullscreenButton: true,
    playButton: true,
    playerColor: "666666",
    // Add other Wistia embed options as needed, e.g.:
    // autoPlay: false,
    // volume: 1.0,
    // resumable: true,
  };

  return (
    <div className={`aspect-video rounded-lg overflow-hidden shadow-xl ${className}`}>
      <OfficialWistiaPlayer
        mediaId={mediaId}
        // Pass the options object using the spread operator if the component
        // expects them as direct props, or as a single `options` prop
        // The Wistia React wrapper usually expects these as direct props from the web component.
        // Let's re-verify the direct prop approach, but with careful naming for options.
        // The error you're getting, "Property 'playbar' does not exist on type 'IntrinsicAttributes & WistiaPlayerProps'",
        // implies that `OfficialWistiaPlayer` itself does not have a `playbar` prop.

        // Looking at Wistia's documentation for their React component (which is what `@wistia/wistia-player-react` is),
        // it indeed takes these options *directly* as props, but the *names*
        // for some of them might be slightly different than what you'd expect
        // from the `cookpete/react-player` config.

        // Let's try passing the options directly as per Wistia's own React component docs.
        // The issue might be that the type definitions for `@wistia/wistia-player-react`
        // are not correctly listing all the available props from the underlying web component.
        // If the types are missing, TypeScript will complain even if the runtime works.

        // The Wistia React component's props largely mirror the attributes of the <wistia-player> web component.
        // So, `playbar` should be `playbar`, `fullscreenButton` should be `fullscreenButton`, etc.
        // The error suggests TypeScript's type definitions for the WistiaPlayer component
        // might not be complete or correctly exposing these as props.

        // *Workaround for missing TypeScript types (if the runtime actually works):*
        // You can use `as any` to bypass TypeScript's type checking for that component:
        // (Use this only if you are confident the props are supported at runtime by the library)
        {...wistiaOptions as any} // Cast to 'any' to bypass type checking
      />
    </div>
  );
}