import styles from "./Home.module.css";
import Form from "./components/Form/Form";

function Home() {
  return (
    <div id={styles.HomeContainer}>
      <h2>Bienvenue sur React Sensei</h2>
      <section id={styles.Home__presentation}>
        <p>
          Le but de ce site est de vous aider à comprendre le fonctionnement de
          React en profondeur, avec
          <strong> des exemples pratiques</strong>.
        </p>
        <h3>
          Tu as déjà eu un comportement inattendu d'un de tes composants ?
        </h3>
        <h3>Tu as du mal avec le cycle de vie des composants ? </h3>
        <h3>Les effets de bords te terrifient ?</h3>
        <h3>Tu es au bon endroit !</h3>
      </section>
      <section id={styles.Home__avis}>
        <p>
          Si ce site vous intéresse, que vous voulez qu'il soit régulièrement
          mis à jour, merci de mettre une étoile sur le Github du projet{" "}
        </p>
        <a href="https://github.com/DevChris38/React-sensei">ICI</a>
      </section>
      <section id={styles.home__formulaire}>
        <Form></Form>
      </section>
    </div>
  );
}

export default Home;
