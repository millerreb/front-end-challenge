import React from 'react';
import { One, Two, Three, Four, Five, Six } from './ImageImport';
import ProductDescription from './ProductDescription';
import OrderingInfo from './OrderingInfo';

import './../styles/App.css'

//react map all files in a folder - webpack alias to import
const ProductDetail = () => {

	return (
		<div className="orderInfo">
			<div className="product-container">
				<img src={Two} className="product-image" alt="main" />
				<img src={One} className="product-image" alt="main" />
				<img src={One} className="product-image" alt="main" />
				<img src={One} className="product-image" alt="main" />
				<img src={One} className="product-image" alt="main" />
				<img src={One} className="product-image" alt="main" />
			</div>
			<OrderingInfo />
		</div>
		
	)
}

export default ProductDetail