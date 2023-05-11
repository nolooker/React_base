import './../App.css';
import {useState, createContext} from 'react' ;
import {useContext} from 'react' ;

const MyCtx = createContext();

function App() {
	
	const [member,setMember] = useState('김철수') ;
		
	return (
	
	<MyCtx.Provider value={member}>
	
		<h1>{`Hello~~${member}~!`}</h1>
		<Child/>
    
	</MyCtx.Provider>
	
	);
  
}

function Child() {
	
	const member = useContext(MyCtx);
	
	return (
		<>
			<h1>Child</h1>
			<GrandChild member = {member} />
		</>
	); 
}

function GrandChild() {
	
	const member = useContext(MyCtx);
	
	return (
		<>
			<h1>GrandChild</h1>
			<h1>{`${member} See U~`}</h1>
		</>
	); 
}

export default App;
