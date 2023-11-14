import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div id={styles.header}>
      <div id={styles.header__logo}></div>
      <div id={styles.header__title}>
        <h1>React Sensei</h1>
        <h2>
          Pour comprendre la <em>tambouille interne</em> de React
        </h2>
      </div>
      <nav>
        <select
          name="pets"
          id="pet-select"
          onChange={(e) => navigate(e.target.value)}
        >
          <option value="">--Quelle notion ?--</option>
          <option value="useState">useState</option>
          <option value="useEffect">useEffect</option>
        </select>
      </nav>
    </div>
  );
}

export default Header;
