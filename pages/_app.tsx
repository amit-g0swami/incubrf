import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import About from './About/About';
// import Cursor from "../components/cursor";
// import "../styles/about.css";
// import "../styles/journel.css";
// import Journel from './Journel/Journel';
import Career from './Career/Career';
import "../styles/career.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (

    // <Component {...pageProps} />
    // <About />
    // <Journel />
    <Career />
  );
}

export default MyApp
