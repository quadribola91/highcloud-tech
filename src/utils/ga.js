export const pageview = (url) => {
  window.gtag("config", "G-1KQJLF2NJ7", {
    page_path: url,
  });
};
