// pages/_app.tsx
import '../public/scss/style.scss';
import '../public/App.css';
import NavBar from '../components/NavBar.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
