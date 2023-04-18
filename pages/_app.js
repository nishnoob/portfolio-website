import Head from 'next/head';
import Face from '../src/face';
import '../styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx>
        {`
          .face-backdrop {
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
      <div>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Taviraj:wght@100;900&display=swap" rel="stylesheet" />
        </Head>
        <div className='face-backdrop'>
          <Face />
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}