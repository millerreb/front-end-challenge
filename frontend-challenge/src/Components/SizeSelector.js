import React from 'react';
import icon from '../assets/chevron-down-solid.svg';
import '../styles/TopSection.css';

class SizeSelector extends React.Component {

	constructor(props) {
		super(props)
		//state properties for 1. checking whether menu is open, 2. displaying the sizes in <li> 
		//elements, 3. showing the selected size (or the string 'size' by default) in collapsed state 
		//if user has made selection.

		this.state = {
			isOpen: false, 
			sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
			selection: ['size']
		}
	}

	//collapses menu w/outside click
	componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
	}
	
	setWrapperRef = (node)=> {
    this.wrapperRef = node;
	}

	handleClickOutside = (e) => {
		if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
			this.setState({isOpen: false})
		}
	}

	//toggles open/collapsed menu state
	toggleMenu = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}))
	}

	//used for displaying the selected size (if applicable) when menu's in collapsed state
	changeSize = (e) => {
		this.setState({selection: e.target.id})
	}
	
	render () {
		const { isOpen, sizes } = this.state;
		const showClassName = isOpen ? 'open' : 'closed';
		return (
			<div className="menuWrapper" ref={this.setWrapperRef}>
					{!isOpen && <button className={`sizeSelector-${showClassName}`} onClick={this.toggleMenu}>{this.state.selection}
						 <img id="dropdown" src={icon} alt="chevron-down-solid-arrow"></img>
					</button>}

					{isOpen && <ul className="sizeList" onClick={this.toggleMenu}>
						{sizes.map((size, i) => ( 
								<li className="sizeOption" id={size} key={`size-${size}`} onClick={this.changeSize}>{size}</li>
						))}	
					</ul>}
			</div>
		)
	}
	
}


export default SizeSelector;