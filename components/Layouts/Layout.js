import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className="container">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
