import React, { useState, useEffect, useRef } from 'react';
import ProductDescription from './ProductDescription';
import OrderingInfo from './OrderingInfo';
import ShopGrid from './ShopGrid';
import { One, Two, Three, Four, Five, Six } from './ImageImport';


import './../styles/TopSection.css';

//react map all files in a folder - webpack alias to import
const ProductDetail = (props) => {

	const [zoomed, setZoomed] = useState(false);
	const [current, setCurrent] = useState();
	
	const productImages = Object.values(props.images);



	const zoom = (e) => {
    setZoomed(!zoomed);
		setCurrent(e.target);
	}
	
	
	// useEffect(() => {
	// 	if (zoomed) {
	// 		productImages.forEach(el=> {
	// 			if (!el === current) {
					
	// 			}
	// 		})
	// 	}
	// })
	const imgMap = productImages.map((img, i) => {
		return <img 
		src={img}
		key={`product-view-${i+1}`}
		className={`product-image${zoomed ? "-zoomed" : ""}`} 
		alt={`full-product-view-${i+1}`}
		onClick={zoom} 
		/>
	})

			return (
					<div>
						<div className="topSection">
							<div className="product-container">{!zoomed && imgMap}</div>
							{!zoomed && <ProductDescription />}
							{!zoomed && <OrderingInfo />}
					</div>
					<div className="bottomSection">
						{/* {!zoomed && <ShopGrid />} */}
					</div>	
				</div>
			)	
	}

export default ProductDetail