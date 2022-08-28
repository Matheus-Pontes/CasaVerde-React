import { useEffect, useState } from "react";
import "./styles.css";
import ImgPlanta1 from '../../img/plantaOferta1.png';
import ImgPlanta2 from '../../img/plantaOferta2.png';
import ImgPlanta3 from '../../img/plantaOferta3.png';
import { Funnel } from "phosphor-react";

const API_OFERTAS = "https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw";

const formatCurrencyBR = function (value) {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}

function ofertaResult(oferta, imagens, index) {
    return (
        <div className="oferta">
            <figure>
                <img src={oferta.img} alt="Imagem de uma planta em oferta" />
            </figure>

            <div className="oferta-detalhes">
                <div>
                    <h3>{oferta.name}</h3>
                    <p>{formatCurrencyBR(oferta.preco)} </p>
                </div>

                <button className="btn-comprar">Comprar
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.9494H15" stroke="#FFCB47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 1L15 4.94931L8 8.89862" stroke="#FFCB47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export function Ofertas() {

    const [ofertas, setOfertas] = useState([]);

    const [isOpenFilters, setIsOpenFilters] = useState(false);
    const [clickFilterName, setClickFilterName] = useState(false);
    const [clickFilterPrice, setClickFilterPrice] = useState(false);

    const imagens = [ImgPlanta1, ImgPlanta2, ImgPlanta3];

    const openFilters = function () {
        setIsOpenFilters(state => !state);
    }

    const clickActionFilterName = function () {
        setClickFilterName(state => !state);
        ofertas.sort((a, b) => b.name.localeCompare(a.name));
    }

    const clickActionFilterPreco = function () {
        setClickFilterPrice(state => !state);

        setOfertas(ofertas.sort((a, b) => a.preco - b.preco));
    }

    const getOfertas = () => {
        fetch(API_OFERTAS)
            .then(res => res.json())
            .then(
                res => {
                    const response = res.map((item, index) => {
                        return {
                            name: item.name,
                            preco: item.preco,
                            img: imagens[index]
                        }
                    });
                    
                    setOfertas(response);    
                });
    }

    useEffect(() => {
        getOfertas();
    }, []);

    return (
        <>
            <section className="container-ofertas">
                <div>
                    <p className="paragrafo-1">Conheça nossas</p>
                    <h3>Plantas</h3>
                </div>

                <div className="container-filtro">
                    <button className="filtro" title="" onClick={openFilters}>
                        <Funnel size={32} color="#ffcb47" />
                    </button>
                    {
                        isOpenFilters ?
                            <div className="filtros">
                                <input type="checkbox" id='filterName' checked={clickFilterName} onChange={clickActionFilterName} />
                                <label htmlFor="filterName">Nome</label>

                                <input type="checkbox" id='filterPrice' checked={clickFilterPrice} onChange={clickActionFilterPreco} />
                                <label htmlFor="filterPrice">Preço</label>
                            </div>
                            :
                            ''
                    }
                </div>

                <div className="ofertas">
                    {
                        ofertas.map((oferta, index) => {
                            return (
                                ofertaResult(oferta, index)
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}