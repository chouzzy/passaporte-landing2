import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
         <Head>
         {/* <!-- HTML Meta Tags --> */}
         <meta name="description" content="O futuro na Europa nunca esteve tão próximo de você."/>
          <meta name="keywords" content="venda, revenda, Venda, Revenda, Clube do Passaporte, passaporte, clube, viagem, visto, vistos, trabalhar, portugal, trabalhar em portugal, cidadania, sefardita, sefaradita"/>

         {/* <!-- Facebook Meta Tags --> */}
         <meta property="og:url" content="https://www.clubedopassaporte.com/"/>
         <meta property="og:type" content="website"/>
         <meta property="og:title" content="Clube do Passaporte - O futuro na Europa nunca esteve tão próximo de você."/>
         <meta property="og:description" content="O futuro na Europa nunca esteve tão próximo de você."/>
         <meta property="og:image" content="https://www.clubedopassaporte.com/static/img/logo.png"/>

         {/* <!-- Twitter Meta Tags --> */}
         <meta name="twitter:card" content="summary_large_image"/>
         <meta property="twitter:domain" content="clubedopassaporte.com"/>
         <meta property="twitter:url" content="https://www.clubedopassaporte.com//"/>
         <meta name="twitter:title" content="Clube do Passaporte - O Futuro na Europa nunca esteve tão próximo de você."/>
         <meta name="twitter:description" content="O futuro na Europa nunca esteve tão próximo de você."/>
         <meta name="twitter:image" content="https://www.clubedopassaporte.com/static/img/logo.png"/>


         <link rel="preconnect" href="https://fonts.gstatic.com"/>
         <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
         <link rel="shortcut icon" href="/static/img/logo.png" /> 
         </Head>
            <body>
               <Main/>
               <NextScript/>
               <noscript
                  dangerouslySetInnerHTML={{
                     __html: `
                     <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-"
                     height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                  }}
               />
            </body>
         </Html>
      )
   }
}
