import styles from "./CourseModule.module.css";
import UseStatePart1A from "../UseStateCourses/UseStatePart1A";
import UseStatePart1B from "../UseStateCourses/UseStatePart1B";

function UseStateCourseModule() {
  return (
    <div id={styles.CourseModuleContainer}>
      <h2>useState</h2>
      <section>
        <p className={styles.indent}>
          Le hook useState permet de décrire{" "}
          <strong>l'état d'un composant</strong>. Un state n'est ni plus ni
          moins qu'une <strong>variable</strong> mais qui aura un comportement
          particulier, à la lecture et à l'écriture.
        </p>
        <table>
          <thead>
            <tr>
              <th>Variable quelconque</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                déclaration :<br />
                <code>let maVariable = 30;</code>
              </td>
              <td>
                déclaration :<br />
                <code>const [monState, setMonState] = useState(30);</code>
              </td>
            </tr>
            <tr>
              <td>
                Modification possible directement
                <br />
                <code>maVariable = 45;</code>
              </td>
              <td>
                Modification uniquement grâce à la fonction setter
                <br />
                <code>setMonState(45);</code>
              </td>
            </tr>
            <tr>
              <td>
                Un changement de valeur <strong>ne provoque pas</strong> un
                nouveau rendu du composant
              </td>
              <td>
                Tout changement de valeur <strong>provoque</strong> un nouveau
                rendu du composant
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <UseStatePart1A></UseStatePart1A>
        <UseStatePart1B></UseStatePart1B>
      </section>
    </div>
  );
}

export default UseStateCourseModule;
