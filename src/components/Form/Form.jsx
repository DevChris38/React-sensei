import { useForm } from "react-hook-form";
import styles from "./Form.module.css";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div id="form__container">
      <h3>
        Une suggestion ? Une réclamation ? Une déclaration d'amour ? Ce
        formulaire est pour toi !
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("Sujet", { required: true })}>
          <option value="">-- Sujet du message --</option>
          <option value="bug">Bug</option>
          <option value="amelioration">Proposition d'amélioration</option>
          <option value="autre">Autre</option>
        </select>
        <input
          name="firstName"
          placeholder="prénom"
          {...register("firstName")}
        />
        <input name="lastName" placeholder="nom" {...register("lastName")} />
        <input
          name="mail"
          type="email"
          placeholder="e-mail"
          {...register("mail", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
          })}
        />
        <textarea
          className={styles.message}
          name="message"
          type="text"
          placeholder="votre message ?"
          cols="30"
          rows="10"
          {...register("message", { required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
