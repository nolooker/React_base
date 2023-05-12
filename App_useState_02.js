import './../App.css';
import {useState} from 'react' ;

function App(){
	const [model, setModel] = useState('avante');	
	const [year, setYear] = useState(2023);
	const [color, setColor] = useState('blue');
	const [image, setImage] = useState('avante.png');
	const [comment, setComment] = useState('');
	
	const ChangeTest = (event) => {
		var target_id = event.target.id ;
		console.log('event.target.id : ' + target_id) ;
		
		var target_value = event.target.value ;
		console.log('event.target.value : ' + target_value) ;
		
		if(target_id==='color'){
			setColor(target_value);
		}else if(target_id==='type'){ 
			setImage(`${target_value}.png`);
			setModel(target_value) ;
		}else if(target_id==='year'){ 
			setYear(target_value);
			
			console.log(typeof target_value);
			
			let mycomment = '' ;
			if(target_value==='2023'){
				mycomment = '신차입니다' ;
			}else if(target_value==='2020'){
				mycomment = '올드 카입니다' ;
			}else{
				mycomment = '나름 좋아요.' ;
			}
			
			setComment(mycomment);
		}
	}
	
	/* {}는 자바 스크립트 표현식, {{}}는 스타일 객체를 표현하는 데 사용됩니다. */
	
	return(
		<div>
			<h1>내 차 정보</h1>
			<p>
				차종은 이미지 변경이 되고, 색상은 설명 문구의 색상이 변경됩니다.
			</p>
			차종 변경 : &nbsp;
			<select onChange={ChangeTest} id="type">
				<option value="avante">아반떼</option>
				<option value="sonata">소나타</option>
				<option value="grandeur">그랜저</option>
			</select>
			<br/><br/>
			색상 변경 : &nbsp;
			<select onChange={ChangeTest} id="color">
				<option value="yellow">노랑</option>
				<option value="blue">파랑</option>
				<option value="red">빨강</option>
				<option value="green">녹색</option>
			</select>
			<br/><br/>
			생산 년도 : &nbsp;
			<select onChange={ChangeTest} id="year">
				<option value="2020">2020</option>
				<option value="2021">2021</option>
				<option value="2022">2022</option>
				<option value="2023">2023</option>
			</select>
			<br/><br/>
			
			<p style={{color}}>
				{color} 색상의 {year}년산 {model} 모델<br/>
				{comment}
			</p>
			<br/><br/>
			
			<img src={'/images/'+image} alt="" width="120" height="120"/>
			
		</div>
	);
}

export default App ;