import React, { Component } from 'react'
import "./header.css"
import Fundo from "../image/header.jpg"



export class Header extends Component {
   

    render() {
        return (
            <div className='header'>
               <div className='texto'>
                    <h2>
                            Melhore suas habilidades de codificação de front-end criando projetos reais
                    </h2>
                    <p>
                            Resolva desafios reais de HTML, CSS e JavaScript enquanto trabalha com designs profissionais. Aqui você Encontrara diversos projetos de diferentes niveis para Praticar e melhorar ainda mais seu nivel de codificação
                    </p>
               </div>
                <div className='image'>
                  <img src={Fundo} alt=''/>
                </div>
            </div>
        )
    }
}

export default Header
