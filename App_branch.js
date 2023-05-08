import {Component} from 'react' ;

// import 컴포넌트이름 from '전체경로포함한파일이름';
// '컴포넌트이름'은 개발자 임의로 명명이 가능합니다.
import Top from './components/Top03';
import Content from './components/Content03';
import Bottom from './components/Bottom03';

class App extends Component{
		
	constructor(props) {
		super(props);
		
		/* mode는 'bread', 'coffee' 중에서 택일 가능하다고 가정 */
		this.state = {
			mode:'coffee',
			top:{greeting:"Hello World", welcome_bread:"hi! welcome to visit my site.", welcome_coffee:"hi! coffee."},
			content:{
				breadlist:[
					{id:1, name:"1빵", description:"맛"},
					{id:2, name:"2빵", description:"좋"},
					{id:3, name:"3빵", description:"은"},
					{id:4, name:"4빵", description:"빵"}
				],
				
				coffeelist:[
					{id:1, name:"아메리카노", description:"아메리카노~"},
					{id:2, name:"카푸치노", description:"좋아좋아~"},
					{id:3, name:"에스프레소", description:"고소한 원샷"},
					{id:4, name:"딸기 스무디", description:"과일 음료"},
					{id:5, name:"타로 밀크티", description:"달달한 밀크티"}
				]
			},
			
			bottom:{goodbye:"The end", comment_bread:"bye see you", comment_coffee:"bye,coffee"}
		}
	}
	
	render(){
		
		var curr_mode = this.state.mode ;
		console.log('현재 모드 : ' + curr_mode) ;
		
		var welcome = '' ;
		var comment = '' ;
		var productlist = '' ;
		
		if(curr_mode==='bread'){
			welcome = this.state.top.welcome_bread ;
			comment = this.state.bottom.comment_bread ;
			productlist = this.state.content.breadlist ;
			
		}else if(curr_mode==='coffee'){
			welcome = this.state.top.welcome_coffee ;
			comment = this.state.bottom.comment_coffee ;
			productlist = this.state.content.coffeelist ;
		}
		
		return(
			<div>
				<Top greeting={this.state.top.greeting} welcome={welcome}/>
				
				<Content productlist={productlist}/>
				
				<Bottom goodbye={this.state.bottom.goodbye} comment={comment}/>
			</div>
		);
	}
}

export default App ;