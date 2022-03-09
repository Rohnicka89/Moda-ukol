import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Dresses from './Components/Dresses/Dresses.jsx';
import Shoes from './Components/Shoes/Shoes.jsx';
import Accessories from './Components/Accessories/Accessories.jsx';

const App = () => (
    <div className="container">
        <Header headerTitle = 'Móda' headerDescription = 'Stylové oblečení a doplňky pro každý den'/>
        <Dresses sectionName = 'Šaty'/>
        <Shoes sectionName = 'Boty'/>
        <Accessories sectionName = 'Doplňky'/>
        <Footer year = '2022' author = 'Czechitas' disclosure = 'Jsme fiktivní firma, která nic neprodává a v žádném případě ani za nic neručí.'/>
    </div>
);

render(<App />, document.querySelector('#app'));