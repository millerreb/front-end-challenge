import React, { useState, useEffect } from 'react';
import ProductDescription from './ProductDescription';
import OrderingInfo from './OrderingInfo';
import ShopGrid from './ShopGrid';



import './../styles/TopSection.css';

//react map all files in a folder - webpack alias to import
const ProductDetail = (props) => {

	const [zoomed, setZoomed] = useState(false);
	const [current, setCurrent] = useState();
	const [imgIndex, setImgIndex] = useState([]);
	const productImages = Object.values(props.images);

	const zoom = (e) => {
    setZoomed(!zoomed);
		setCurrent(e.target);
	}

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
						<div className={`topSection ${zoomed ? "zoomed" : ""}`}>
						{!zoomed && <ProductDescription />}
							<div className={`product-container ${zoomed ? "zoomed" : ""}`}>{imgMap}</div>
							{!zoomed && <OrderingInfo />}
					</div>
					<div className="bottomSection">
						<ShopGrid />
					</div>	
				</div>
			)	
	}

export default ProductDetail