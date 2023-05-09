import './../App.css' ;  /* 스타일 지정 */

import {Component} from 'react' ;
import StateManager from './components/StateManager' ;

class App extends Component {
	render(){
		return(
			<div>
				<StateManager/>
			</div>
		);
	}
}
  
export default App;
