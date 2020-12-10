import React from 'react';
import ProductDetail from './ProductDetail';
import { One, Two, Three, Four, Five, Six } from './ImageImport';

class App extends React.Component {

	//I realize that this isn't a great solution to importing images.
	//There is a better way to map files in the assets directory through webpack,
	//but in the interest of time I did not implement it.

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