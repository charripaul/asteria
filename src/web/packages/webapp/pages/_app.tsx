import { withRedux } from '@asteria/stores';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
export default withRedux(MyApp);
