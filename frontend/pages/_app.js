import Layout from '../components/Layout';
import '../css/style.css';

const Muutoca = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default Muutoca;
