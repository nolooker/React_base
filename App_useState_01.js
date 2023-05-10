import './../App.css';

/* useState 훅을 사용하겠습니다. */
import {useState} from 'react' ;

function App() {
	
	/* color 스테이트의 초기 값은 'red'이고, 값을 변경하고자 할 때는 setColor()를 사용하시면 됩니다. */
	const [color, setColor] = useState('red');
	const [name, setName] = useState('바게트');
	const [image, setImage] = useState('french_baguette_01.png');
	
	
	const ClickEvent = () => {
		
			console.log('현재 색상 : ' + color) ;
			
			if(color == 'red'){
				setColor('blue');	
				setName('크로아상');
				setImage('croissant_01.png');
				
			}else{
				setColor('red');
				setName('바게트');
				setImage('french_baguette_01.png');
			}
			
	}
	
	
	
	
  return (
    <div>
		<h1>My favorite color is {color}!</h1>
		<font color={color}><b>글자 색상</b></font>
		<br/><br/>
		
		<button type="button" onClick={ClickEvent}>
			클릭 시 이미지 변경 및 {color} 색상으로 변경
		</button>
		<br/><br/>
		
		<h4>{name}</h4>
		<img src={'/images/' +image} alt="{name}" width="300" height="300"/>
		
    </div>
	
  );
  
}
export default App;
