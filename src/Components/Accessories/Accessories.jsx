import React from 'react';
import './accessories.css';

import Product from '../Product/Product.jsx';

const Accessories = (props) => {
    return (
        <section className="accessories">
            <h2>{props.sectionName}</h2>
            <Product image = '../assets/blue-handbag.jpg' name = 'Modrá kabelka' description = 'Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti.' price = {3590}/>
            <Product image = '../assets/glasses.jpg' name = 'Brýle' description = 'Holky nezlobte se, já už fakt nevím, co bych si tady měl vymyslet za text. Šaty, boty a kabelky mě zcela vyčerpaly.' price = {1620}/>
            <Product image = '../assets/grey-scarf.jpg' name = 'Šedá vlněná šála' description = 'Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné.' price = {970}/>
        </section>
    )
}

export default Accessories;