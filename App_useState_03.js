import './../App.css';
import {useState} from 'react' ;

function App() {
	
	const [car, setCar] = useState({
			model:'Rolls-Royce',
			year:2007,
			color:'black',
			image:'Rolls-Royce.jpg'
	});
		
	const ChangeTest = (event) => {
		var target_id = event.target.id ;
		console.log('event.target.id : ' + target_id);
		
		var target_value = event.target.value ;
		console.log('event.target.value : ' + target_value);
		
		if(target_id==='color'){
			setCar({...car, color:target_value});
			
		}else if(target_id==='model'){
			
			setCar({...car, model:target_value, image:`${target_value}.jpg`});
			
		}else if(target_id==='year'){
			setCar({...car, year:target_value});
		
		}
	}
	
	/* {}는 자바 스크립트 표현식, {{}}는 스타일 객체를 표현하는데 사용 */
  return (
    <div>
		<h1>내 차 정보</h1>
		<p>
			차종은 이미지 변경이 되고, 색상은 설명 문구의 색상이 변경됩니다.
		</p>
		차종 변경 : &nbsp;
		<select onChange={ChangeTest} id="model">
			<option value="Rolls-Royce">롤스로이스</option>
			<option value="PorscheCayenne">카이엔</option>
			<option value="G-Wagen">지바겐</option>
			<option value="oldcar">올드카</option>
		</select>
		<br/><br/>
		
		색상 변경 : &nbsp;
		<select onChange={ChangeTest} id="color">
			<option value="black">검정</option>
			<option value="yellow">노랑</option>
			<option value="white">흰색</option>
			<option value="blue">파랑</option>
			<option value="green">초록</option>
		</select>
		<br/><br/>
		
		생산 년도 : &nbsp;
		<select onChange={ChangeTest} id="year">
			<option value="2020">2020</option>
			<option value="2021">2021</option>
			<option value="2022">2022</option>
			<option value="2023">2023</option>
			<option value="2007">2007</option>
		</select>
		<br/><br/>
		
		<p style={{color:car.color}}>
		
			<h2>{car.color} 의 {car.year}년산 {car.model} Model</h2>
			
		</p>
		
		<br/><br/>
		
		<img src={`/images/${car.image}`} alt="" width="500" height="500"/>
		
    </div>
  );
  
}
export default App;
