import { useMemo } from 'react';

const defaultTitle = "Transform Your Business with Modern Solutions";

const titles = {
  repricer: "Maximize your sales and profits with the world's №1 repricer",
  instant: "Boost your sales and profits. Instantly",
  buybox: "Win more BuyBoxes"
};

export function useUtmTitle() {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const utm_campaign = params.get('utm_campaign');

    switch (utm_campaign) {
      case 'repricer':
        return titles.repricer;
      case 'instant':
        return titles.instant;
      case 'buybox':
        return titles.buybox;
      default:
        return defaultTitle;
    }
  }, []);
}