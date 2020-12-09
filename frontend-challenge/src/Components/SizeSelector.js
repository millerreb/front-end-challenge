import React, { useState, useRef, useEffect, useCallback }from 'react';
import icon from '../assets/chevron-down-solid.svg';
import '../styles/TopSection.css';
import SizeMenu from './SizeMenu';

const SizeSelector = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	}
	const escapeMenu = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    },
    [setIsOpen]
	);

	const clickMe = (e) => {
		console.log(e.target.className)
		if (e.target.className === 'open') setIsOpen(false);
	}

	useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', clickMe);
      document.addEventListener('keyup', escapeMenu);
    } else {
      document.removeEventListener('click', clickMe);
      document.removeEventListener('keyup', escapeMenu);
    }
    return () => {
      document.removeEventListener('click', clickMe);
      document.removeEventListener('keyup', escapeMenu);
    };
	}, [isOpen, escapeMenu]);
	
	const showClassName = isOpen ? 'open' : 'closed';

		return (
			<div>
				<button className={`sizeSelector-${showClassName}`} onClick={toggleMenu} ref={menuRef}>size
					{!isOpen && <img id="dropdown" src={icon} alt="chevron-down-solid-arrow"></img>}
					{isOpen && <SizeMenu />}
				</button>
			</div>
		)
}

export default SizeSelector;