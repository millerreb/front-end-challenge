import React from 'react';
import SizeSelector from './SizeSelector';
import '../styles/TopSection.css'
import { useState, useRef } from 'react';

const OrderingInfo = (props) => {

	//used to increment/decrement quantity selection.
	const [qty, setQty] = useState(1);
	
	//used to conditionally render checkmark based on color choice,
	//to mimic functionality of radio buttons.
	const [color, setColor] = useState("black");
	const colorBlack = useRef(null);
	const colorBeige = useRef(null);

	//functions for changing quantity counter.
	const increment = () => setQty(prevQty => prevQty + 1)
	const decrement = () => {
		if (qty > 1) setQty(prevQty => prevQty - 1);
	};
	
	//functions for changing state of color selected and updating UI:
	const toggleColor = () => {
		if (color === 'black' && colorBeige.current) {
			colorBeige.current.clicked = true;
			colorBlack.current.clicked = false;
			setColor("beige");
		} 
		if (color === "beige" && colorBlack.current) {
			colorBlack.current.clicked = true;
			colorBeige.current.clicked = false;
			setColor("black");
		}
	}
	//checkmark character code.
	const char = "\u2714";

	return (
		<section className="orderingInfo">
			<div id="price">$35.00</div>
				<div className="btnGroup">
					<button className="colorOption" style={{outline: 'none'}}>color</button>
					<button className="colorOption" id="black" ref={colorBlack} onClick={toggleColor}>{color === 'black'? `black ${char}` : 'black' }</button>
					<button className="colorOption" id="beige" ref={colorBeige} onClick={toggleColor}>{color === 'beige'? `beige ${char}` : 'beige' }</button>
				</div>
				<div className="orderQty">
					<button onClick={decrement}>-</button>
					<span id="quantity">{`quantity (${qty})`}</span>
					<button onClick={increment}>+</button>
				</div>
				<SizeSelector title="size" />
				<button id="cart">add to cart</button>
				<p>build a cycle set and save up to 20%</p>
		</section>
	)
}

export default OrderingInfo;