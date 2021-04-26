import React, { Component } from 'react'

import "./ferramentas.css"


import Flexbox from  "../image/ferramentas/Flexbox.svg"
import CSS from "../image/ferramentas/css-file.svg"
import Diplaygrid  from "../image/ferramentas/grid.svg"
import Googlefonts from "../image/ferramentas/fonts.svg"
import IconesSVG from "../image/ferramentas/icones.svg"
import Freepick from "../image/ferramentas/freepick.svg"

export class Ferramentas extends Component {
    

    render() {
        return (
            <div id='ferramentas' className='Ferramentas desafio playlist'>
                <h1>Desafio</h1>

                <ul id='lista'>
                    <div>
                        <img src={Flexbox} alt='todos de graça'/>
                        <p>Nesse site você irá aprender de uma vez por todas o real poder do flexbox</p>
                        <a href='https://flexboxfroggy.com/' target='blank'>Acessar</a>
                    </div>

                    <div>
                        <img src={CSS} alt='todos de graça'/>
                        <p>Este site vai ter ajudar a criar efeitos usando css desde linear até hover</p>
                        <a href='https://cssgradient.io/' target='blank'>Acessar</a>
                    </div>
                    <div>
                        <img src={Diplaygrid} alt='todos de graça'/>
                        <p>Se você tem problemas em usar o diplay grid esse site pode te ajudar</p>
                        <a href='https://grid.layoutit.com/' target='blank'>Acessar</a>
                    </div>
                    <div>
                        <img src={Googlefonts} alt='todos de graça'/>
                        <p>personalize as letras do seu projeto com o google fonts</p>
                        <a href='https://fonts.google.com/' target='blank'>Acessar</a>
                    </div>
                    <div>
                        <img src={IconesSVG} alt='todos de graça'/>
                        <p>Esse site tem Diversos icones basta você escrever a categoria desejada e o melhor de tudo é que ele tem diferentes tamanhos além do formato SVG</p>
                        <a href='https://www.flaticon.com/' target='blank'>Acessar</a>
                    </div>
                    <div>
                        <img src={Freepick} alt='todos de graça'/>
                        <p>o freepik é um site com diversas fotos para você usar no seu desenvolvimento além disso também pode servir como busca para inspiração no desenvolvimento do seu layout</p>
                        <a href='https://br.freepik.com/fotos-vetores-gratis/wallpapers' target='blank'>Acessar</a>
                    </div>
                   
                </ul>
               
            </div>
        )
    }
}

export default Ferramentas
