import {useState} from 'react';
import Mart from './useNoComponents/MartNo' ;

function App() {
	
	/* L이면 L마트, H이면 H마트 */
	const [mode, setMode] = useState('');
	
	const MartSelection = (event) => {
		var target_value = event.target.value ;
		console.log('event.target.value : ' + target_value);
		
		if(target_value === '-'){
			alert('마트 선택');
			return ;
		}else{
			setMode(target_value);
			console.log('this mode value : ' + mode) ;
		}
	}
	
  return (
    <div style={{position:'absolute', top:'10%', left:'20%'}}>
		<h1>마트 유형 선택 : {` `}</h1>
		<select onChange={MartSelection}>
			<option value="-">마트 선택</option>
			<option value="L">L마트</option>
			<option value="H">H마트</option>
		</select>
		<Mart mode={mode}/>
    </div>
	
  );
  
}
export default App;
