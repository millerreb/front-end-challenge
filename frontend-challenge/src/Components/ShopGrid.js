import React from 'react';
import '../styles/BottomSection.css';
import { Seven, Eight, Nine, Ten, Eleven } from './ImageImport';


const ShopGrid = () => {

	return (
	<div className="productGrid">
		<div className="row1">
		<img alt="woman in orange background wearing hiphuggers" key="product-img-7" src={Seven}></img>
			<img alt="two people holding each other in hiphuggers" key="product-img-8" src={Eight}></img>
		</div>
		<div className="row2">
			<img alt="two women in lacy thongs" key="product-img-9" src={Nine}></img>
		</div>
		<div className="row3">
		<img alt="two people at an angle" key="product-img-10" src={Ten}></img>
			<img alt="woman at an angle in boyshorts" key="product-img-11" src={Eleven}></img>
		</div>
	
	</div>
	)
}
export default ShopGrid;