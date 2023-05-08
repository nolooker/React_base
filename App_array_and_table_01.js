import {Component} from 'react' ;
import Bread from './components/BreadList01';
import Coffee from './components/CoffeeList01';

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