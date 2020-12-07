import React from 'react';
import icon from '../assets/chevron-down-solid.svg';
import '../styles/App.css';

const SizeSelector = () => {

		return (
			<div>
				<button className="sizeSelector">size
					<img id="dropdown" src={icon} alt="chevron-down-solid-arrow"></img>
				</button>
			</div>
		)
}

export default SizeSelector;