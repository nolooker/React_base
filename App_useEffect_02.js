import './../App.css';
import {useState, useEffect} from 'react' ;

function App() {
	console.log('');
	
	const [count, setCount] = useState(1);
	
	const [imageIdx, setImageIdx] = useState(0);
	const [image, setImage] = useState('/images/oldcar.jpg');
	
	
	const [twoTimes, setTwoTimes] = useState(0);
	const [su01, setSu01] = useState(0);
		
	const array = ['oldcar.jpg','Rolls-Royce.jpg','G-Wagen.jpg','PorscheCayenne.jpg'];
	
	useEffect(() => {
		
		setTwoTimes(() => 2*count) ;
		setSu01(() => 3*count+1) ;
		
		let changeImg = '/images/' + array[imageIdx];
		setImage(changeImg) ;
		
		setImageIdx(imageIdx + 1);
		console.log('현재 이미지 인덱스 : ' + imageIdx);
		
		 // count 값이 4 이상이면 0으로 초기화
		  if (count >= 4) {
			setCount(0);
			setImageIdx(0); // 이미지 인덱스도 0으로 초기화
			alert('초기화 시킵니다');
			
		  } else {
			// count 값이 4 미만이면 이미지 변경
			let changeImg = "/images/" + array[imageIdx];
			setImage(changeImg);
		  }
		
	}, [count]);
	
	
  return (
    <div>
		<h1>카운터 : {count} !!!</h1>
		<h1>2배수 : {twoTimes} !!!</h1>
		<h1>y=3*x+1 : {su01} !!!</h1>
			
			<button onClick={() => { setCount((count) => count + 1) }}>+1 증가</button>

		<div>
			<img src={image} width="300" height="300"/>
		</div>
    </div>
	
  );
  
}
export default App;
