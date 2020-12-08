import React from 'react';
import SizeSelector from './SizeSelector';
import '../styles/TopSection.css'
import { useState, useEffect, useRef } from 'react';

const OrderingInfo = () => {
	const [qty, setQty] = useState(1);
	const [color, setColor] = useState("black");
	

	const increment = () => setQty(prevQty => prevQty + 1)
	const decrement = () => {
		if (qty > 1) setQty(prevQty => prevQty - 1);
	};
	
	const toggleColor = () => {
		if (color === 'black') console.log('hi')
	}

	return (
		<div className="orderingInfo">
			<div id="price">$35.00</div>
			<div className="btnGroup">
					<button className="colorOption">color</button>
					<button className="colorOption" id="black" onClick={toggleColor}>black</button>
					<button className="colorOption" id="beige" onClick={toggleColor}>beige</button>
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