import "./styles.css";
import ImgPlanta from '../../img/planta.png';
import { useState } from "react";
import validator from "validator";

export function AssinaturaNewsLetter() {
    const [toEmail, setToEmail] = useState('');
    const [isValidateEmail, setIsValidateEmail] = useState(false);

    const validateEmail = function(toEmail) {
        setToEmail(toEmail);

        validator.isEmail(toEmail) ? setIsValidateEmail(true) : setIsValidateEmail(false);
    }

    const sendEmail = (toEmail) => {
        document.querySelector('#email').value = '';

        isValidateEmail ?
            alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail: ${toEmail}".`)
        : 
            alert(`Informe um e-mail: ${toEmail}". Válido !!!`);
    }

    const handleAssinarNewsLetter = function(event) {
        event.preventDefault();

        sendEmail(toEmail);   
    }

    return (
        <section className="container">
            <div>
                <p className="paragrafo-1">Sua casa com as</p>
                <h3>melhores plantas</h3>
                <p className="paragrafo-2">Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>

                <form className="input-email-btn" method="POST">
                    <div className="icon-email">
                        <img src="https://img.icons8.com/material-outlined/24/000000/new-post.png" />

                        <input type="email" placeholder="Insira seu e-mail" id="email" onChange={event => validateEmail(event.target.value)}/>
                    </div>
                    {
                        isValidateEmail ?
                        <button type="submit" className='btn-emailNewsLetter' onClick={handleAssinarNewsLetter}>Assinar newsletter</button>
                        :
                        <button className='btn-emailNewsLetter disabled'>Assinar newsletter</button>                       
                    }
                </form>
            </div>

            <div id="plantaTelaPrincipal">
                <figure>
                    <img src={ImgPlanta} alt="imagem de uma planta dentro de um vaso" id=''/>
                </figure>
            </div>
        </section>
    )
}