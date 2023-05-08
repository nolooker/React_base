import {Component} from 'react' ;

// import 컴포넌트이름 from '전체경로포함한파일이름';
// '컴포넌트이름'은 개발자 임의로 명명이 가능합니다.
import Top from './components/Top01';
import Content from './components/Content01';
import Bottom from './components/Bottom01';

class App extends Component{
	render(){
		return(
			<div>
				<Top greeting="Hello World" welcome="hi! welcome visit my site. "/>
				<Content bread01="1빵" bread02="2빵" bread03="3빵" bread04="4빵"/>
				<Bottom greeting="The end" goodbye="bye see you"/>
			</div>
		);
	}
}

export default App ;