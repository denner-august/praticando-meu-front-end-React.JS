import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header"
import Swal from 'sweetalert2'


function App() {
  
  function alerta(){
    Swal.fire('sejá bem vindo',
    "este é um projeto ainda em desenvolvimento e pode conter falhas, caso tenha alguma sugestão em como podemos melhorar mande um email para nós no final da pagina",
    "success")
  }

  return (
    <div className="App">
      {alerta()}
     
     <Nav/>
     <Header/>
    </div>
  );
}

export default App;
