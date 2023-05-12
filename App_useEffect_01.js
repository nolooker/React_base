import './../App.css';
import {useState, useEffect} from 'react' ;

function App(){
	const [count, setCount] = useState(0);
	const [image, setImage] = useState('/images/ciabatta_03.png');
	
	const interval = 1000;
	const array = ['ciabatta_03.png', 'croissant_03.png', 'brioche_02.png', 'grandeur.png'];
	
	useEffect(() => {
		setTimeout(() => {
			setCount((count) => count + 1);
			
			const randomIndex = Math.floor(array.length * Math.random()) ;
			const randomImage = array[randomIndex];
			setImage(`/images/${randomImage}`);
			
		}, interval);
	});
	
	
	return(
		<div>
			<h1>카운터 : {count}</h1>
			<div>
				<img src={image} width="300" height="300"/>
			</div>
		</div>
	);
}

export default App ;