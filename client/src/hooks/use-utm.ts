import { useMemo } from 'react';

const titles = {
  1: "Maximize your sales and profits with the world's №1 repricer",
  2: "Boost your sales and profits. Instantly",
  3: "Win more BuyBoxes"
};

const defaultTitle = titles[1];

export function useUtmTitle() {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const utm_campaign = Number(params.get('utm_campaign'));

    if (utm_campaign in titles) {
      return titles[utm_campaign as keyof typeof titles];
    }
    return defaultTitle;
  }, []);
}