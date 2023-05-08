import {Component} from 'react' ;

// import 컴포넌트이름 from '전체경로포함한파일이름';
// '컴포넌트이름'은 개발자 임의로 명명이 가능합니다.
import Top from './components/Top02';
import Content from './components/Content02';
import Bottom from './components/Bottom02';

class App extends Component{
		
	constructor(props) {
		super(props);
		
		this.state = {
			top:{greeting:"Hello World", welcome:"hi! welcome visit my site."},
			breadlist:[
				{id:1, name:"1빵", description:"맛"},
				{id:2, name:"2빵", description:"좋"},
				{id:3, name:"3빵", description:"은"},
				{id:4, name:"4빵", description:"빵"}
			],
			bottom:{greeting:"The end", goodbye:"bye see you"}
		}
	}
	
	render(){
		return(
			<div>
				<Top greeting={this.state.top.greeting} welcome={this.state.top.welcome}/>
				
				<Content breadlist={this.state.breadlist}/>
				
				<Bottom greeting={this.state.bottom.greeting} goodbye={this.state.bottom.goodbye}/>
			</div>
		);
	}
}

export default App ;