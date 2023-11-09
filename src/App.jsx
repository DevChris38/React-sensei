import Header from "./components/Header/Header";
import styles from "./App.module.css";
import CourseModule from "./components/CourseModule/CourseModule";

function App() {
  return (
    <div id={styles.AppContainer}>
      <Header></Header>
      <CourseModule></CourseModule>
    </div>
  );
}

export default App;
