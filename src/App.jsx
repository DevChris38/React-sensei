import styles from "./App.module.css";

function App() {
  return (
    <div id={styles.CourseModuleContainer}>
      <h2>Bienvenue sur React Sensei</h2>
      <section>
        <p>
          Le but de ce site est de vous aider à comprendre, avec{" "}
          <strong>des exemples pratiques</strong>, la fameuse tambouille interne
          de React.
        </p>
        <p>Tu as déjà eu un comportement innatendu d'un de tes composants ? </p>
        <p>Tu as du mal avec le cycle de vie des composants ? </p>
        <p>Les effets de bords te terrifient </p>
        <p>Tu es au bon endroit !</p>
      </section>
    </div>
  );
}

export default App;
