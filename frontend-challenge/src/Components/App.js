import React from 'react';
import ProductDetail from './ProductDetail';
import { One, Two, Three, Four, Five, Six } from './ImageImport';

class App extends React.Component {
	
	state = { images: { One, Two, Three, Four, Five, Six } };
	
	render(){
		return(
			<div>
				<ProductDetail images={this.state.images}/>
			</div>
		)
	}
}

export default App;