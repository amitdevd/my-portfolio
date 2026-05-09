import { useEffect } from 'react';
import { adSenseClient } from '../services/cms';

function AdSlot({ label = 'Advertisement' }) {
  useEffect(() => {
    if (!adSenseClient || document.querySelector('script[data-adsense-script]')) return;

    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.dataset.adsenseScript = 'true';
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseClient}`;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!adSenseClient) return;
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);

  return (
    <aside className="ad-slot" aria-label={label}>
      {adSenseClient ? (
        <ins
          className="adsbygoogle"
          data-ad-client={adSenseClient}
          data-ad-format="auto"
          data-full-width-responsive="true"
          style={{ display: 'block' }}
        />
      ) : (
        <>
          <span>{label}</span>
          <p>AdSense code can appear here after approval</p>
        </>
      )}
    </aside>
  );
}

export default AdSlot;
