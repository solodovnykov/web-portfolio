import Layout from "../components/Layouts/Layout";
import "../styles/Globals.scss";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { AnimatePresence } from "framer-motion";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps, router }) {
  const { locale } = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <div key={router.route}>
        <IntlProvider locale={locale}>
          <Layout>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </Layout>
        </IntlProvider>
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
