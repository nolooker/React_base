import './../App.css';
import {useState, createContext, useContext} from 'react' ;

const MyContext = createContext();

function App(){
	const [member, setMember] = useState('김철수');
	
	return(
		<MyContext.Provider value={member}>
			<h1>{`안녕하세요~~${member}님!!`}</h1>
			<Child/>
		</MyContext.Provider>
	);
}

/* 함수형 컴포넌트에서 props는 매개 변수 영역에 작성해주면 됩니다. */
function Child(){
	return(
		<>
			<h1>여기는 Child입니다.</h1>
			<GrandChild/>
		</>
	);
}

function GrandChild(){
	const member = useContext(MyContext) ;
	return(
		<>
			<h1>여기는 GrandChild입니다.</h1>
			<h1>{`${member}님~~또 뵙네요.`}</h1>
		</>
	);
}

export default App ;