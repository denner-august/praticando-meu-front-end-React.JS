import styles from "./styles.module.scss";

export function Apresentacao() {
  return (
    <section className={styles.Container}>
      <div className={styles.image}>
        <h2>Melhore suas habilidades em front-end criando projetos reais</h2>
        <p>
          Resolva desafios reais de HTML, CSS e JavaScript enquanto trabalha com
          designs profissionais. Aqui você Encontrara diversos projetos de
          diferentes niveis para Praticar e melhorar ainda mais seu nivel de
          codificação etc
        </p>
      </div>
    </section>
  );
}
