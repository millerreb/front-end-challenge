import React from 'react';
import '../styles/BottomSection.css';
import { Seven, Eight, Nine, Ten, Eleven } from './ImageImport';
import Image from './Image';
import Caption from './Caption';


const ShopGrid = () => {
//Component can be optimized to be more reusable: ideally would iterate through rows and 
//change className depending on whether the row number was divisible by 2.
//(odd numbered rows seem two have 2 images, vertical and horizontal; even numbered rows 
//just have 1 horizontal => different styling rules.) Could be accomplished w/mod operator 
//and checking i + 1 in for loop or another index/loop setup).

//Please excuse the brute force approach - I am trying to submit on time! 

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
}

export default ShopGrid;