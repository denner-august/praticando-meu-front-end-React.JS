import styles from "./styles.module.scss";
import Image from "next/image";

import github from "../../../public/assets/github.svg";
import linkedin from "../../../public/assets/linkedin.svg";
import portifolio from "../../../public/assets/portifolio.svg";

export default function Header() {
  return (
    <header className={styles.Container}>
      <h1>Praticando Meu Front-end</h1>
      <nav>
        <ul>
          <li>
            <a
              href="https://github.com/denner-august"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={50}
                height={70}
                alt="link para github"
                src={github}
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                width={50}
                height={70}
                alt="link para linkedin"
                src={linkedin}
              />
            </a>
          </li>
          <li>
            <a
              href="https://denner-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={50}
                height={70}
                alt="link para portifolio"
                src={portifolio}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
