import React from 'react';
import { One, Two, Three, Four, Five, Six } from './ImageImport';
import ProductDescription from './ProductDescription';
import OrderingInfo from './OrderingInfo';
import ShopGrid from './ShopGrid'

import './../styles/TopSection.css'

//react map all files in a folder - webpack alias to import
const ProductDetail = () => {

	return (
		<div className="mainPage">
				<div className="topSection">
					<ProductDescription />
					<div className="product-container">
						<img src={Two} className="product-image" alt="main" />
						{/* <img src={One} className="product-image" alt="main" />
						<img src={Three} className="product-image" alt="main" />
						<img src={Four} className="product-image" alt="main" />
						<img src={Five} className="product-image" alt="main" />
						<img src={Six} className="product-image" alt="main" /> */}
					</div>
					<OrderingInfo />
			</div>
			<div className="bottomSection">
				<ShopGrid />
			</div>	
		</div>
		
	)
}

export default ProductDetail