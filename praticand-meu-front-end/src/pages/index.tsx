// import "../styles/global.scss";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Controler } from "../components/controler";

const Home: NextPage = () => {
  useEffect(() => {
    Swal.fire("Este é um projeto em desenvolvimento", "", "info");
  }, []);

  return (
    <div>
      <Head>
        <title>Praticando Meu front</title>
        <link
          rel="shortcut icon"
          href="/public/favicon.svg"
          type="image/x-icon"
        />
      </Head>

      <Controler />
    </div>
  );
};

export default Home;
