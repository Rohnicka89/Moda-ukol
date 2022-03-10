import React from 'react';
import './shoes.css';

import Product from '../Product/Product.jsx';

const Shoes = (porps) => {
    return (
        <section className="shoes">
            <h2>{porps.sectionName}</h2>
            <Product image = '../assets/running-shoes.jpg' name = 'Běžecké tenisky' description = 'Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost.' price = {1790}/>
            <Product image = '../assets/shiny-shoes.jpg' name = 'Třpytivé lodičky' description = 'Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět.' price = {2950}/>
            <Product image = '../assets/red-shoes.jpg' name = 'Červené boičky' description = 'Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet.' price = {6200}/>
        </section>
    )
}

export default Shoes;