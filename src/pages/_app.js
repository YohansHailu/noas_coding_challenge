import '../global.css'
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          smoothWheel: true,
        },
      });

      locomotiveScroll.scrollTo(0, { duration: 100 });
    })();
  }, []);








  return <Component {...pageProps} />
}
