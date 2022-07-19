import ImgPlanta2 from '../img/planta2.png';
import "../styles/OpcoesAcaoPlantas.css";

export function OpcoesAcaoPlantas() {
    return (
        <section className="container-minhaPlanta">
                <figure>
                    <img src={ImgPlanta2} alt="Imagem de uma planta apenas suas folhas" />
                </figure>
                <div className="opcoes-minhasPlantas">
                    <div>
                        <p className="paragrafo-1">
                            Como conseguir 
                        </p>
                        <h3>minha planta</h3>
                    </div>

                    <div className="opcoes-acoes">
                        <ul>
                            <div>
                                <span></span>
                                <li>
                                    Escolha suas plantas
                                </li>
                            </div>
                            
                            <div>
                                <span></span>
                                <li>Faça seu pedido</li>
                            </div>
                            <div>
                                <span></span>
                                <li>Aguarde na sua casa</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>
    );
}