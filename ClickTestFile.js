import {Component} from 'react' ;

class App extends Component {
	
	ClickTest01 = (first, second) => {
		
		var result = `${first}~~${second}`;
		
		console.log('결과 : ' + result) ; 
		
	}
	
	ClickTest02 = (param, evt) => {
		// 
		// if(typeof param != 'string'){param = 'not a string';}
		
		console.log('파라미터 : ' + param) ; /* 넘겨진 파라미터  */
		console.log('evt.type') ;
		console.log(evt.type) ; /* event의 유형 */
	}
	
	
  render(){
	  
	  return (
			<div>
				<h2>클릭 이벤트</h2>
				<button onClick={() => this.ClickTest01('hello', 'world')}>매개 변수 2개</button>
				
				<button onClick={evt => this.ClickTest02('hello', evt)}>버튼 클릭</button>
				
				<a onClick={this.ClickTest02}>버튼 클릭</a>
			</div>
	  )
  }

}

export default App;
