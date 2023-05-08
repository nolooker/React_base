// react 모듈에서 Component 클래스를 가져와서 사용할게요
import {Component} from 'react' ;
import './ch03.App.css';   // 외부 스타일 가져오는 방법

class App extends Component{
	render(){
		return(
			<div>
				<div>클래스 방식(간단 JSX 실습)</div>
				<img src="http://localhost:3000/abcd.jpg" with="300" height="300"/>
				<div>반갑습니다.</div>
			</div>
		);
	}
}

// App는 클래스의 이름과 동일해야 합니다.
export default App ;