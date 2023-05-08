import {Component} from 'react' ;


class App extends Component{
	render(){
		return(
			<end>
				<h1>{this.props.goodbye}</h1>
				<p>{this.props.comment}</p>
			</end>
		);
	}
}

export default App ;