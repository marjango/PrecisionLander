import { useEffect, useState } from 'react';

const defaultTitle = "Transform Your Business with Modern Solutions";

const titles = {
  repricer: "Maximize your sales and profits with the world's №1 repricer",
  instant: "Boost your sales and profits. Instantly",
  buybox: "Win more BuyBoxes"
};

export function useUtmTitle() {
  const [title, setTitle] = useState(defaultTitle);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm_campaign = params.get('utm_campaign');

    switch (utm_campaign) {
      case 'repricer':
        setTitle(titles.repricer);
        break;
      case 'instant':
        setTitle(titles.instant);
        break;
      case 'buybox':
        setTitle(titles.buybox);
        break;
      default:
        setTitle(defaultTitle);
    }
  }, []);

  return title;
}
