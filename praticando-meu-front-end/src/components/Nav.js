import React, { Component } from 'react'
import "./nav.css"

export class nav extends Component {
    render() {
        return (
            <div className='nav'>
                <h1>Praticando Meu Front-end</h1>
                <ul>
                    <li><a href='#Desafio'>Desafio</a></li>
                    <li><a href='#Playlist '>Playlist</a></li>
                    <li>Ferramentas</li>
                    <li><a href='#formulario'>Sugestões</a></li>
                </ul>
            </div>
        )
    }
}

export default nav
