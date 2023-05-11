import './../App.css';
import {useState} from 'react' ;

function App() {
	
	const [members, setMembers] = useState([
		{id:1, name:'김유신', age:22},
		{id:2, name:'이순신', age:45},
		{id:3, name:'을지문덕', age:60},
		{id:4, name:'윤봉길', age:15},
		{id:5, name:'유재석', age:35}
	]);
	
	const nameList = members.map(one => {
		return <li id={one.id} keys={one.id} onDoubleClick = {() => RemoveSelectedRow(one.id)}>{one.name}({one.age})</li>
	});
	
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	
	const NameChange = (event) => {
		const target_value = event.target.value;
		console.log(target_value);
		setName(target_value);
		
	}
	
	const AgeChange = (event) => {
		const target_value = event.target.value;
		console.log(target_value);
		setAge(target_value);
		
	}
	
	const [newMember, setNewMember] = useState({ name: "", age: "" });
	
	const [nextId, setNextId] = useState(6) ;
	
	const AddButtonClick = (event) => {
		const newId = members.length + 1;
		
		const newMembers = members.concat({
		id:nextId, name:name, age:age
		});
	
		setMembers(newMembers);
		setName('');
		setAge('');
		setNextId(nextId);
			
	}
	
	const RemoveSelectedRow = (id) => {
		const resultData = members.filter(one => one.id !== id);
		setMembers(resultData);
	}
	
	
  return (
  
    <div>
		이름: &nbsp;&nbsp;<input value={name} onChange={NameChange} />
		<br/>
	
		나이: &nbsp;&nbsp;<input value={age} onChange={AgeChange} />
		<br/>
	
		<button onClick={AddButtonClick}>추가</button>
		<br/><br/>
		항목을 더블 클릭하면 요소가 삭제 됩니다.
		<br/>
		
		<h3>회원 목록</h3>
		<ul>{nameList}</ul>
	</div>
	
  );
  
}

export default App;
