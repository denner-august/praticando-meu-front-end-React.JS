import axios from "axios";
import { useState } from "react";
import styles from "./styles.module.scss";

export function Footer() {
  const [email, seteMail] = useState(String);
  const [mensagem, setMensagem] = useState(String);

  function validation(e: { preventDefault: () => void }) {
    //tratar o email para validar antes do envio real
    e.preventDefault();

    if (email !== "" && mensagem !== "") {
      return axios
        .post("https://formspree.io/f/mrgrzrdv", {
          email,
          mensagem,
        })
        .then((data) => alert("e-mail enviado com sucesso"));
    }

    return alert("erro");
  }

  return (
    <footer className={styles.container}>
      <div className={styles.backgroundIlustrator} />
      <div className={styles.formulario}>
        <h2>Como podemos melhorar?</h2>
        <div className={styles.card}>
          <form method="post">
            <label>Digite seu E-mail :</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => seteMail(e.target.value)}
            />
            <label>Digite sua Mensagem :</label>
            <textarea
              rows={10}
              cols={50}
              required
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
            <button onClick={validation} type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
