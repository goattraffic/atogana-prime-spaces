// UTM parameter tracking
export const initUTMTracking = () => {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];

  utmParams.forEach(param => {
    const value = urlParams.get(param);
    if (value) {
      sessionStorage.setItem(param, value);
    }
  });
};