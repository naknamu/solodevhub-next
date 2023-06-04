import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!--GOOGLE FONTS--> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600;700&family=Montserrat:wght@200;400;500;700;900&family=Rancho&display=swap"
          onload="this.onload=null;this.rel='stylesheet'"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600;700&family=Montserrat:wght@200;400;500;700;900&family=Rancho&display=swap"
          rel="stylesheet"
        />

        {/* <!--GOOGLE MATERIAL ICON--> */}
        {/* <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          onload="this.onload=null;this.rel='stylesheet'"
        /> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <body className='light-theme'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
