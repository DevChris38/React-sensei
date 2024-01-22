import style from "./UseStatePart1A.module.css";
import code from "../../../public/";
import { useState } from "react";

function UseStatePart1A() {
  let counter = 0;
  const [display, setDisplay] = useState(false);
  function handleClick() {
    counter++;
    setDisplay(true);
    alert(`la variable counter vaut ${counter}`);
  }
  return (
    <div className={style.coursePart__container}>
      <h3>Utilisation d'une variable</h3>
      <p>
        <strong>Que va t'il se passer en cliquant sur le bouton ?</strong>
      </p>
      <img src={"/images/UseStatePart1A.png"}></img>
      <p>
        <strong>compteur : {counter}</strong>
      </p>
      <button onClick={handleClick}>counter +1</button>
      {display === true ? (
        <p>
          On ajoute 1 à la variable "counter" à chaque fois que l'on clique sur
          le bouton. Le composant n'est pas mis à jour.
        </p>
      ) : null}
    </div>
  );
}

export default UseStatePart1A;
