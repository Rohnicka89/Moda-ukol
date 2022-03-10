import React from 'react';
import './header.css';

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="header__title">{props.headerTitle}</h1>
            <p className="header__description">{props.headerDescription}</p>
        </header>
    )
}

export default Header;