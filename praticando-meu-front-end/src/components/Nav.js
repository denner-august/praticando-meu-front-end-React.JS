import React, { Component } from 'react'
import "./nav.css"

export class nav extends Component {
    render() {
        return (
            <div className='nav'>
                <h1>Praticando Meu Front-end</h1>
                <ul>
                    <li>Inicio</li>
                    <li>Desafio</li>
                    <li>Videos</li>
                    <li>Ferramentas</li>
                    <li>Sugestões</li>
                </ul>
            </div>
        )
    }
}

export default nav
