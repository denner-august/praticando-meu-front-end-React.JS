import './App.css';
import Swal from 'sweetalert2'
import React from 'react';

import Nav from "./components/Nav"
import Header from "./components/Header"
import Desafio from "./components/Desafio"
import Playlist from "./components/Playlist"


function alerta(){
  Swal.fire('sejá bem vindo',
  "este é um projeto ainda em desenvolvimento e pode conter falhas, caso tenha alguma sugestão em como podemos melhorar mande um email para nós no final da pagina",
  "error")
}

class App extends React.Component{
 
  render(){
    return (
      <div className="App">
        {alerta()}
       <Nav/>
       <Header/>
       <Desafio/>
       <Playlist/>
       
      </div>
    );
  }

}



export default App