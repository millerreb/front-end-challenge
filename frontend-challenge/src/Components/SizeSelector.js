import React from 'react';
import icon from '../assets/chevron-down-solid.svg';
import '../styles/TopSection.css';

class SizeSelector extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			isOpen: false, 
			sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
			selection: ['size']
		}
	}
	handleClickOutside() {
		this.setState({isOpen: false})
	}

	toggleMenu = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}))
	}

	escapeMenu = (e) => {
      if (e.key === 'Escape') {
        this.setState({isOpen: false})
      }
	}

	clickMe = (e) => {
		console.log(e.target.className)
		if (e.target.className === 'open') this.setState({isOpen: false});
	}

	render () {
		const { isOpen, sizes } = this.state;
		const showClassName = isOpen ? 'open' : 'closed';
		return (
			<div className="menuWrapper">
					{!isOpen && <button className={`sizeSelector-${showClassName}`} onClick={this.toggleMenu}>{this.state.selection}
						 <img id="dropdown" src={icon} alt="chevron-down-solid-arrow"></img>
					</button>}

					{isOpen && <ul className="sizeList" onClick={this.toggleMenu} onKeyDown={this.escapeMenu}>
						{sizes.map((size, i) => (
							<button> 
								<li className="sizeOption" key={`size-${size}`}>{size}</li>
							</button>
						))}	
					</ul>}
			</div>
		)
	}
	
}


export default SizeSelector;