import React, { useState } from 'react';
import ProductDescription from './ProductDescription';
import OrderingInfo from './OrderingInfo';
import ShopGrid from './ShopGrid';



import './../styles/TopSection.css';


const ProductDetail = (props) => {

	const [zoomed, setZoomed] = useState(false);
	const [current, setCurrent] = useState();
	const productImages = Object.values(props.topImages);

	//sets state to be zoomed, to change classnames (and conditionally rendering style) 
	const zoom = (e) => {
    setZoomed(!zoomed);
		setCurrent(e.target);
	}

	//creates the column of images -- when view is not zoomed in -- 
	//to resemble the SSENSE UI for a single product
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
				//using condition rendering to show/hide info and product descrption in zoomed view
					<div>
						<section className={`topSection ${zoomed ? "zoomed" : ""}`}>
						{!zoomed && <ProductDescription />}
							<div className={`product-container ${zoomed ? "zoomed" : ""}`}>{imgMap}</div>
							{!zoomed && <OrderingInfo />}
					</section>
					<section className="bottomSection">
						<ShopGrid />
					</section>	
				</div>
			)	
	}

export default ProductDetail