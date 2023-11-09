import styles from "./Header.module.css";

function Header() {
  return (
    <div id={styles.header}>
      <div id={styles.header__logo}></div>
      <div id={styles.header__title}>
        <h1>React Sensei</h1>
        <h2>
          Pour comprendre la <em>tambouille interne</em> de React
        </h2>
      </div>
      <nav></nav>
    </div>
  );
}

export default Header;
