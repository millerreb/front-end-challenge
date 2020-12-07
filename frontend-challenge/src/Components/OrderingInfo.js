import React from 'react';
import SizeSelector from './SizeSelector';
import '../styles/App.css'

const OrderingInfo = () => {
	return (
		<div className="orderingInfo">
			<p>$35.00</p>
			<div className="btnGroup">
					<button type="button">color</button>
					<input type="radio" name="color"></input>
					<input type="radio" name="color"></input>
				</div>
				<div className="orderQty">
					<button type="button">-</button>
					<input id="quanity" type="text"></input>
					<button type="buttton">+</button>
				</div>
				<SizeSelector title="size" />
				<button id="cart">add to cart</button>
		</div>
	)
}

export default OrderingInfo;