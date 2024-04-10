import { Head } from 'next/document';
import '../assets/css/globals.css'


export default function App({ Component, pageProps }) {
  return ( 
    <div>
      <Component {...pageProps} />
    </div>
   );
 }

 