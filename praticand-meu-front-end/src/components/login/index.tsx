import styles from "./styles.module.scss";
import Link from "next/link";
export function Login() {
  return (
    <section className={styles.Container}>
      <div className={styles.Login}>
        <h3>Login</h3>
        <form method="post" className={styles.formulario}>
          <input type="email" placeholder="Digite seu email" required />
          <input type="password" placeholder="Digite sua senha" required />
          <button>Entrar</button>
          <Link href="/">
            <a>Criar conta</a>
          </Link>
        </form>
      </div>
    </section>
  );
}
