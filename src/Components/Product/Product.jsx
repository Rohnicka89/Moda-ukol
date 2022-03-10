import React from 'react';
import './product.css';

const Product = (props) => {
    return (
        <div className="products">

				<div className="product">
					<img className="product__image" src={props.image} alt="Modrá kabelka"/>
					<div className="product__content">
						<h3 className="product__name">{props.name}</h3>
						<p className="product__description">{props.description}</p>
						<p className="product__price">{props.price} Kč</p>
					</div>
				</div>
        </div>
    )
}

export default Product;