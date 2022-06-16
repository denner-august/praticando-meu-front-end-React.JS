import { Apresentacao } from "./apresentacao";
import { Footer } from "./footer";
import Header from "./Header";
import { useState } from "react";
import { Login } from "./login";

export function Controler() {
  const [logado, setLogado] = useState(false);

  return logado ? (
    <>
      <Header />
      <Apresentacao />
      <Footer />
    </>
  ) : (
    <Login />
  );
}
