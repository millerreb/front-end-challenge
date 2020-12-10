import React from 'react';

const Caption = (props) => {
	return (
		<>
			<h5>{props.title}</h5>
			<p>{props.text}</p>
		</>
	)
}
export default Caption;