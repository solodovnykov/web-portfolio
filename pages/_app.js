import Layout from "../components/Layouts/Layout";
import "../styles/Globals.scss";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  );
}

export default MyApp;
