import { Menu } from "../Components/Menu";
import { OpcoesAcaoPlantas } from "../Components/OpcoesAcaoPlantas";
import { AssinaturaNewsLetter } from "../Components/AssinaturaNewsLetter";
import { Ofertas } from "../Components/Ofertas";
import { ArrowUp } from "phosphor-react";

import "../styles/HomePage.css"

export function HomePage() {
    return (
        <>
            <svg width="700" height="637" viewBox="0 0 955 637" fill="none" xmlns="http://www.w3.org/2000/svg" className="imageTop">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M284.914 -328.488C378.816 -388.839 500.328 -305.147 606.445 -270.44C695.841 -241.201 781.671 -207.371 850.687 -143.445C922.505 -76.9232 976.461 4.47406 1004.51 98.2672C1036.23 204.339 1064.83 320.816 1019.74 421.899C973.65 525.226 876.3 611.001 765.538 633.99C662.06 655.466 576.585 552.577 472.273 535.525C367.351 518.373 251.989 590.47 161.155 535.189C65.3803 476.901 -6.12791 360.625 1.04141 248.736C8.06001 139.198 147.437 91.9167 195.868 -6.56121C246.231 -108.969 188.927 -266.797 284.914 -328.488Z" fill="#FFCB47"/>
            </svg>

            <Menu />
            <AssinaturaNewsLetter />
            <OpcoesAcaoPlantas />
            <Ofertas />

            {
                window.scrollY > 0 ? 
                <a href="#menu">
                    <ArrowUp size={32} className="back-Top"/>
                </a> : ''
            }

            <footer>
                <a href="https://github.com/Matheus-Pontes" title="Acesso ao meu github hehe">&copy; Desenvolvido por Matheus Pontes<img src="https://img.icons8.com/windows/32/000000/github.png"/></a>
            </footer>
        </>
    )
}