import React, { useState, useRef } from 'react';
import ProductDescription from './ProductDescription';
import OrderingInfo from './OrderingInfo';
import ShopGrid from './ShopGrid';
import { One, Two, Three, Four, Five, Six } from './ImageImport';

import './../styles/TopSection.css';

//react map all files in a folder - webpack alias to import
const ProductDetail = (props) => {

	const imgRef = useRef(null);

	const [zoomed, setZoomed] = useState(false);
	const [current, setCurrent] = useState(null);
	
	const zoom = () => {
    setZoomed(!zoomed);
    console.log(imgRef.current)
  }



			return (
					<div>
						<div className="topSection">
						<div className="product-container">
							<img src={Two} className={`product-image${zoomed ? "-zoomed" : ""}`} ref={imgRef} alt="main-product-2" key="2" onClick={zoom}></img>
							<img src={One} alt="main-product-1" key="1" onClick={zoom}></img>
							<img src={Three} alt="main-product-3" key="3"></img>
							<img src={Four} alt="main-product-4" key="4"></img>
							<img src={Five} alt="main-product-5" key="5"></img>
							<img src={Two} alt="main-product-6" key="6"></img>
							{/* <img src={Two} key="productImageOne" className={`product-image${zoomed ? "-zoomed" : ""}`} alt="product-view-1"/> */}
						</div>
							{!zoomed && <ProductDescription />}
							{!zoomed && <OrderingInfo zoomed={zoomed} current={current}/>}
					</div>
					<div className="bottomSection">
						{/* {!zoomed && <ShopGrid />} */}
					</div>	
				</div>
			)	
	}

export default ProductDetail