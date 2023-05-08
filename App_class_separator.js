import {Component} from 'react' ;

class Top extends Component{
	render(){
		return(
			<header>
			<h1>인사말</h1>
			여러분 안녕하세요!
			</header>
		);
	}
}

class Bottom extends Component{
	render(){
		return(
			<article>
			<h2>맺음말</h2>
			여러분 부자 되시고, 언제나 행복하세요.
			</article>
		);
	}
}


class Content extends Component{
	render(){
		return(
			<nav>
				<ul>
					<li><a href="1.html">자바</a></li>
					<li><a href="2.html">파이썬</a></li>
					<li><a href="3.html">오라클</a></li>
				</ul>
			</nav>
		);
	}
}

class App extends Component{
	render(){
		return(
			<div>
				<Top/>
				<Content/>
				<Bottom/>
			</div>
		);
	}
}

export default App;