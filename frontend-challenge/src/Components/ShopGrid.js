import React from 'react';
import '../styles/BottomSection.css';
import { Seven, Eight, Nine, Ten, Eleven } from './ImageImport';
import Image from './Image';
import Caption from './Caption';


const ShopGrid = () => {

	return (
		<div className="productGrid">
			<section className="row1">
				<div className="article">
					<Image src={Eight} className="horizontal" alt="women holding each other wearing hiphugger" key="product-img-8" />
					<Caption title="Shop Hiphugger" text="heavy days"/>
				</div>	
				<div className="article">
					<Image src={Seven} className="vertical" alt="woman in orange background wearing cheeky" key="product-img-7"/>
					<Caption title="Shop Cheeky" text="light days" />
				</div>
			</section>
			<section className="row2">
				<div className="article"> 
					<Image src={Nine} className="horizontal" alt="two women wearing thong" key="product-img-9" />
					<Caption title="Shop Thong" text="lightest days"/>
				</div>
			</section>
			<section className="row3">
				<div className="article">
					<Image src={Ten} className="horizontal" alt="two people at an angle" key="product-img-10" />
					<Caption title="Shop Sport" text="medium days"/>
				</div>
				<div className="article">
					<Image src={Eleven} className="vertical" alt="woman at an angle in boyshorts" key="product-img-11"/>
					<Caption title="Shop Boyshorts" text="light days"/>
				</div>
			</section>
		</div>
	)	

	// <div className="productGrid">
	// 	<div className="row1">
	// 		<img alt="two people holding each other in hiphuggers" key="product-img-8" src={Eight}></img>
	// 			<div className="productLink">
	// 				<h4>Shop Hiphugger</h4>
	// 				<p>heavy days</p>
	// 			</div>
	// 		<img className="vertical" alt="woman in orange background wearing cheeky" key="product-img-7" src={Seven}></img>
	// 			<div className="productLink">
	// 				<h4>Shop Cheeky</h4>
	// 				<p>light days</p>
	// 			</div>
	// 	</div>
	{/* // 	<div className="row2">
	// 		<img alt="two women wearing thong" key="product-img-9" src={Nine}></img>
	// 			<div className="productLink">
	// 				<h4>Shop Thong</h4>
	// 				<p>lightest days</p>
	// 			</div>
	// 	</div>
	// 	<div className="row3">
	// 		<img alt="two people at an angle" key="product-img-10" src={Ten}></img>
	// 			<div className="productLink">
	// 				<h4>Shop Sport</h4>
	// 				<p>medium days</p>	
	// 			</div>
				
	// 		<img className="vertical" alt="woman at an angle in boyshorts" key="product-img-11" src={Eleven}></img>
	// 		<div className="productLink">
	// 			<h4>Shop Boyshort</h4>
	// 			<p>light days</p>
	// 		</div>
	// 	</div>
	// </div> */}
	
}

export default ShopGrid;