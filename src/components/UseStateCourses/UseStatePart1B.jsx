import style from "./UseStatePart1A.module.css";
import { useState } from "react";

function UseStatePart1B() {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <div className={style.coursePart__container}>
      <h3>Utilisation d'un state</h3>
      <p>
        <strong>Que va t'il se passer en cliquant sur le bouton ?</strong>
      </p>
      <img src={"/images/UseStatePart1B.png"}></img>
      <p>
        <strong>compteur : {counter}</strong>
      </p>
      <button onClick={handleClick}>counter +1</button>
      {counter !== 0 && (
        <p>
          On ajoute 1 au state "counter" à chaque fois que l'on clique sur le
          bouton. Le composant est mis à jour à chaque fois qu'il y a un
          changement de state.
        </p>
      )}
    </div>
  );
}

export default UseStatePart1B;
