import {Component} from 'react' ;
import ChildComponent from './components/ChildComponent';

class App extends Component{
	render(){
		
		const arr = [10, 30, 50];
		const somenode = <span id='hungry'>배고파</span>;
		const myfunction = () => {console.log('what');};
		
		return(
			<div>
				<ChildComponent 
					isCheck={false}
					members={{name:'김철수', age:20}}
					address={'서울시 마포구 합정동'}
					array={arr}
					node={somenode}
					func={myfunction}
					salary={3000}/>
			</div>
		);
	}
}

export default App ;