import {Component} from 'react' ;
import Bread from './components/BreadList02';
import Coffee from './components/CoffeeList02';

class App extends Component{
		
	render(){
		
		return(
			<div>
				<Bread/>
				<hr/>
				<Coffee/>
			</div>
		);
	}
}

export default App ;