import '../public/scss/style.scss';
import '../public/App.css';
import NavBar from '../components/NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
