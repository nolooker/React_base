import {Component} from 'react' ;

/* TableHeader02 : 표 태그의 헤더 정보를 저장하고 있는 컴포넌트 */
class App extends Component{
	render(){
		return(
			<thead>
				<tr>
					<th>아이디</th>
					<th>이름</th>
					<th>세부설명</th>
				</tr>
			</thead>
		);
	}
}

export default App ;