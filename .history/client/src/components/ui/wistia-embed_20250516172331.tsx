import { useEffect } from 'react';

export function WistiaEmbed() {
  useEffect(() => {
    // Load Wistia scripts
    const script1 = document.createElement('script');
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = "https://fast.wistia.com/embed/nivyd1sxlz.js";
    script2.async = true;
    script2.type = "module";

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      wistia-player[media-id='nivyd1sxlz']:not(:defined) {
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/nivyd1sxlz/swatch');
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
    <div className="h-full w-full" id="video">
      <wistia-player 
        media-id="nivyd1sxlz" 
        className="h-full w-full"
        // aspect="0.46153846153846156"
      ></wistia-player>
    </div>
  );
}

{/* <script src="https://fast.wistia.com/player.js" async>
</script>
<script src="https://fast.wistia.com/embed/fodj60nzuj.js" async type="module"></script>
<style>wistia-player[media-id='fodj60nzuj']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/fodj60nzuj/swatch'); display: block; filter: blur(5px); padding-top:216.67%; }</style> 
<wistia-player media-id="fodj60nzuj" aspect="0.46153846153846156"></wistia-player> */}


{/* <script src="https://fast.wistia.com/player.js" async></script><script src="https://fast.wistia.com/embed/nivyd1sxlz.js" async type="module"></script><style>wistia-player[media-id='nivyd1sxlz']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/nivyd1sxlz/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }</style> <wistia-player media-id="nivyd1sxlz" aspect="0.5625"></wistia-player> */}