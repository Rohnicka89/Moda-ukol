import React from 'react';
import './dresses.css';

import Product from '../Product/Product.jsx';


const Dresses = (props) => {
    return (
        <section className="dresses">
			<h2>{props.sectionName}</h2>
            <Product image = '../assets/red-dress.jpg' name = 'Červené šaty' description = 'V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií.' price = {2290}/>
            <Product image = '../assets/flower-dress.jpg' name = 'Květované šaty' description = 'Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat.' price = {3100}/>
            <Product image = '../assets/yellow-dress.jpg' name = 'Žluté šaty' description = 'Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě.' price = {4250}/>
        </section>
    )
}

export default Dresses;