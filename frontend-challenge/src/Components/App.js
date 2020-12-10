import React from 'react';
import ProductDetail from './ProductDetail';
import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven } from './ImageImport';

class App extends React.Component {
	
	state = { 
		topImages: { One, Two, Three, Four, Five, Six }
};
	
	render(){
		return(
			<div>
				<ProductDetail topImages={this.state.topImages}/>
			</div>
		)
	}
}

export default App;