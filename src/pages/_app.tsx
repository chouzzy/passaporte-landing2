import {AppProps} from 'next/app'
import {ChakraProvider, extendTheme, Heading} from '@chakra-ui/react'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { theme } from '../../styles/theme'
import { Global } from '@emotion/react'
import Script from 'next/script'
// import { pageView } from 'react-facebook-pixel'
// import Fonts from './Fonts'

// function FacebookPixel() {
//    const router = useRouter()
//    useEffect(() => {
//      import("react-facebook-pixel")
//        .then((x) => x.default)
//        .then((ReactPixel) => {
//          ReactPixel.init('497161601860940');
//          ReactPixel.pageView();
 
//          router.events.on("routeChangeComplete", () => {
//            ReactPixel.pageView();
//          });
//        });
//    });
//    return null;
//  }

function MyApp({Component, pageProps}: AppProps) {

   // const router = useRouter()

   // useEffect(() => {
   //    import('react-facebook-pixel')
   //      .then((x) => x.default)
   //      .then((ReactPixel) => {
   //        ReactPixel.init('497161601860940') // facebookPixelId
   //        ReactPixel.pageView()
  
   //        router.events.on('routeChangeComplete', () => {
   //          ReactPixel.pageView()
   //        })
   //      })
   //  }, [router.events])

//    const handleRouteChange = () => {
//       pageView()
//     }
    
//    const FB_PIXEL_ID = 497161601860940

//    const FacebookPixel = ({ children }) => {
//       const router = useRouter()
    
//       useEffect(() => {
//         // the below will only fire on route changes (not initial load - that is handled in the script below)
//         router.events.on('routeChangeComplete', handleRouteChange)
//         return () => {
//           router.events.off('routeChangeComplete', handleRouteChange)
//         }
//    }, [router.events])
//    return (
//       <Script id="facebook-pixel">
//         {`
//           !function(f,b,e,v,n,t,s)
//           {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//           n.queue=[];t=b.createElement(e);t.async=!0;
//           t.src=v;s=b.getElementsByTagName(e)[0];
//           s.parentNode.insertBefore(t,s)}(window, document,'script',
//           'https://connect.facebook.net/en_US/fbevents.js');
//           fbq('init', ${FB_PIXEL_ID});
//           fbq('track', 'PageView');
//         `}
//       </Script>
//     )
//   }

   return (
      
      <>    
         {/* <FacebookPixel/> */}
         <Script id="google-tag-manager" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-');
            `}
         </Script>
         
         <ChakraProvider theme={theme}>
            <Component {...pageProps}/>
         </ChakraProvider>
      </>
   ) 
}

export default MyApp