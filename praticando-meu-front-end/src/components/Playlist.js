import React, { Component } from 'react'
import "./playlist.css"

import Cursoemvideo from "../image/playlist/cursoemvideo.jpg"
import Flexbox from "../image/playlist/flexbox.jpg"
import Cssgrid from "../image/playlist/grid.jpg"



export class Playlist extends Component {
   

    render() {
        return (
            <div id='Playlist' className='playlist desafio'>
                <h1>Playlist para seu Desenvolvimento</h1>

               <ul>
                    <div>
                            <img src={Cursoemvideo} alt='curso em video'/>
                            <p>Se você deseja entender Logica de programação sem duvidas esse é a playlist certa</p>
                            <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV" target="_blank" rel="noopener noreferrer"><strong>Acessar</strong></a>
                    </div>

                    <div>
                            <img src={Flexbox} alt='curso de flexbox'/>
                            <p> Um dos melhores cursos Gratuitos que você vai encontrar sobre flexbox</p>
                            <a href="https://youtu.be/qq0z-YSPJLI" target="_blank" rel="noopener noreferrer"><strong>Acessar</strong></a>
                    </div>

                    <div>
                            <img src={Cssgrid} alt='curso de cssgrid'/>
                            <p>Um dos melhores cursos Gratuitos que você vai encontrar sobre Grid layout</p>
                            <a href="https://youtu.be/qq0z-YSPJLI" target="_blank" rel="noopener noreferrer"><strong>Acessar</strong></a>
                    </div>
                   
               </ul>
               
            </div>
        )
    }
}

export default Playlist
