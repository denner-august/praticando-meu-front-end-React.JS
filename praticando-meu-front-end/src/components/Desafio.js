import React, { Component } from 'react'
import "./desafio.css"
import Imagedesafio from "../desafio-image/mm-contabilidade.png"



export class Desafio extends Component {
  

    render() {
        return (
            <div className='desafio'>
               <h1>Desafios</h1>
               
             <div>
             <ul>
                <div className='desafios_selection'>
                        <img src={Imagedesafio} alt='desafio'/>
                        <h3>MM-CONTABILIDADE</h3>
                        <p> <strong>Esse foi um dos primeiros projetos que Desenvolvi, acredito que não seja tão complexo e você conseguira praticar seus primeiros conhecimento</strong></p>
                        <a href="https://github.com/denner-august/Praticando-Meu-front-end-MM-CONTABILIDADE" target="_blank" rel="noopener noreferrer"><strong>Acessar</strong></a>
                </div>
               </ul>
            
               
             </div>
            </div>
        )
    }
}

export default Desafio
