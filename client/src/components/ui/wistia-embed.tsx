import { useEffect } from 'react';

export function WistiaEmbed() {
  useEffect(() => {
    // Load Wistia scripts
    const script1 = document.createElement('script');
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = "https://fast.wistia.com/embed/byqci6u02b.js";
    script2.async = true;
    script2.type = "module";

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      wistia-player[media-id='byqci6u02b']:not(:defined) {
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/byqci6u02b/swatch');
        display: block;
        filter: blur(5px);
        height: 100%;
        width: 100%;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="h-full w-full">
      <wistia-player 
        media-id="byqci6u02b" 
        aspect="0.5625"
        className="h-full w-full"
      ></wistia-player>
    </div>
  );
}