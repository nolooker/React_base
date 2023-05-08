import {Component} from 'react' ;

class Top extends Component{
	render(){
		return(
			<header>
				<h1>{this.props.greeting}</h1>
				<p>{this.props.welcome}</p>
			</header>
		);
	}
}

class Content extends Component{
	render(){
		return(
			<nav>
				<ul>
					<li><a href="1.html">{this.props.bread01}</a></li>
					<li><a href="2.html">{this.props.bread02}</a></li>
					<li><a href="3.html">{this.props.bread03}</a></li>
					<li><a href="4.html">{this.props.bread04}</a></li>
				</ul>
			</nav>
		);
	}
}

class Bottom extends Component{
	render(){
		return(
			<end>
				<h1>{this.props.greeting}</h1>
				<p>{this.props.goodbye}</p>
			</end>
		);
	}
}

class App extends Component{
	render(){
		return(
			<div>
				<Top greeting="인사말" welcome="hi! welcome visit my site."/>
				<Content bread01="1빵" bread02="2빵" bread03="3빵" bread04="4빵"/>
				<Bottom greeting="끝맺음말" goodbye="bye see you"/>
			</div>
		);
	}
}

export default App;