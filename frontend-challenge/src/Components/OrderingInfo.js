import React from 'react';
import SizeSelector from './SizeSelector';
import '../styles/TopSection.css'
import { useState, useEffect, useRef } from 'react';

const OrderingInfo = () => {
	const [qty, setQty] = useState(1);
	const [color, setColor] = useState("black");
	const colorBlack = useRef(null);
	const colorBeige = useRef(null);

	const increment = () => setQty(prevQty => prevQty + 1)
	const decrement = () => {
		if (qty > 1) setQty(prevQty => prevQty - 1);
	};
	
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

	return (
		<div className="orderingInfo">
			<div id="price">$35.00</div>
			<div className="btnGroup">
					<button className="colorOption">color</button>
					<button className="colorOption" id="black" ref={colorBlack} onClick={toggleColor}>black</button>
					<button className="colorOption" id="beige" ref={colorBeige} onClick={toggleColor}>beige</button>
				</div>
				<div className="orderQty">
					<button type="button" onClick={decrement}>-</button>
					<span id="quantity">{`quantity (${qty})`}</span>
					<button type="button" onClick={increment}>+</button>
				</div>
				<SizeSelector title="size" />
				<button id="cart">add to cart</button>
				<p>build a cycle set and save up to 20%</p>
		</div>
	)
}

export default OrderingInfo;