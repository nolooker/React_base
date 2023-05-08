import {Component} from 'react' ;


class App extends Component{
	render(){
		return(
			<end>
				<h1>{this.props.greeting}</h1>
				<p>{this.props.goodbye}</p>
			</end>
		);
	}
}

export default App ;