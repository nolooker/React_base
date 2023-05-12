import './../App.css';
import {useState} from 'react' ;

function App(){
	const [member, setMember] = useState('홍길동');
	
	return(
		<div>
			<h1>{`안녕하세요~~${member}님!!`}</h1>
			<Child member={member}/>
		</div>
	);
}

/* 함수형 컴포넌트에서 props는 매개 변수 영역에 작성해주면 됩니다. */
function Child({member}){
	return(
		<>
			<h1>여기는 Child입니다.</h1>
			<GrandChild member={member}/>
		</>
	);
}

function GrandChild({member}){
	return(
		<>
			<h1>여기는 GrandChild입니다.</h1>
			<h1>{`${member}님~~또 뵙네요.`}</h1>
		</>
	);
}

export default App ;