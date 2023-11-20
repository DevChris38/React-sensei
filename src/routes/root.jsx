import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../App.module.css";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div id={styles.AppContainer}>
      <Header />
      <body>
        <Outlet />
      </body>
      <Footer />
    </div>
  );
}
