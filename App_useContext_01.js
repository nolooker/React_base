import './../App.css';
import {useState} from 'react' ;

/* 부모 컴포넌트 */
function App() {
	
	const [member,setMember] = useState('홍길동') ;
	
	
	return (
    <div>
		<h1>{`Hello~~${member}~!`}</h1>
		<Child member={member} />
    </div>
	
	);
  
}

/* 자식 컴포넌트 */
/* 함수형 컴포넌트에서 props는 매개 변수 영역에 작성 */ 
function Child({member}) {
	return (
		<>
			<h1>Child</h1>
			<GrandChild member = {member} />
		</>
	); 
}

/* 자식 컴포넌트 */
function GrandChild({member}) {
	return (
		<>
			<h1>GrandChild</h1>
			<h1>{`${member} See U~`}</h1>
		</>
	); 
}

export default App;
