import React, { Component } from 'react'

import Swal from 'sweetalert2'

import "./footer.css"
import Imageproframadora from "../image/footer/programadora.jpg"






export class Footer extends Component {

    
    render() {

        
        function enviar(){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Enviado com sucesso'
              })

              setInterval(() => {
                InputenBranco()           
              }, 1000); 
        }

        function InputenBranco(){
            document.getElementById("name").value = ''
            document.getElementById("email").value = ''
            document.getElementById("message").value = ''
          }

        return (
            <div className='footer' id='formulario'>
                <img src={Imageproframadora} alt='mulher programando'/>

               <div>
                    <form onSubmit={enviar}  method="POST" action="https://formspree.io/f/mrgrzrdv"  >
                        <h1>Como podemos melhorar</h1>
                        <input id='name' type='text' name="name" placeholder='Digite seu nome' required ></input>
                        <input id='email'  name="email" type='email' placeholder='Digite seu email' required ></input>
                        <textarea id='message' name="message" placeholder='digite sua mensagem' required></textarea>
                        <button  type='submit'  ><strong>Confirmar</strong></button>
                    </form>
               </div>
            </div>
        )
    }
}

 

export default Footer
