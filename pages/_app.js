import '../public/scss/style.scss';
import '../public/App.css';
import NavBar from '../components/NavBar';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
