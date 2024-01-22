import styles from "./Footer.module.css";

function Header() {
  return (
    <div id={styles.footer}>
      <h2>
        <strong>Christopher Arthaud - 2023</strong>
      </h2>
      <div id="logos"></div>
    </div>
  );
}

export default Header;
