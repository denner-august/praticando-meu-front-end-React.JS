import React, { Component } from 'react'

//import Swal from 'sweetalert2'

import "./footer.css"
import Imageproframadora from "../image/footer/programadora.jpg"



  


export class Footer extends Component {
    
    

    render() {
        return (
            <div className='footer'>
                <img src={Imageproframadora} alt='mulher programando'/>

               <div>
                    <form>
                        <h1>Como podemos melhorar</h1>
                        <input type='text' placeholder='Digite seu nome' required ></input>
                        <input type='email' placeholder='Digite seu email' required ></input>
                        <textarea placeholder='digite sua mensagem' required></textarea>
                        <button type='submit' ><strong>Confirmar</strong></button>
                    </form>
               </div>
            </div>
        )
    }
}

export default Footer
