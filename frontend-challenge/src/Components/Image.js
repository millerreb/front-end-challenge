import React from 'react';

const Image = (props) => {
	return (
		<img src={props.src} className={props.className} alt={props.alt} key={props.key}/>
	)
}
export default Image;