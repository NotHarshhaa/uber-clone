import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Fix for Mapbox GL JS issues in Next.js
  useEffect(() => {
    import('mapbox-gl').then((mapboxgl) => {
      mapboxgl.default.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
