import Header from "../components/Header/Header";
import styles from "../App.module.css";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id={styles.AppContainer}>
        <Header></Header>
        <Outlet />
      </div>
    </>
  );
}
