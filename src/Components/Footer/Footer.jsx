import React from 'react';
import './footer.css';

const Footer = (props) => {
    return (
        <footer className="footer">
			<p className="footer__copyright">&copy; {props.year}, {props.author}</p>
			<p className="footer__disclosure">{props.disclosure}</p>
		</footer>
    )
}

export default Footer;