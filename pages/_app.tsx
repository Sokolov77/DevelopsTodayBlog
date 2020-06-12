import { AppProps } from 'next/app';

import '../baseStyles.css';

import { wrapper } from '../store/store';
import Layout from '../components/Layout';

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(WrappedApp);
