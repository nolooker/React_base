import './../App.css';
import {useState, useEffect} from 'react' ;

function App() {
	console.log('');
	
	const [count, setCount] = useState(0);
	const [image, setImage] = useState('/images/oldcar.jpg');
	
	const interval = 500;
	
	const array = ['oldcar.jpg','Rolls-Royce.jpg','G-Wagen.jpg','PorscheCayenne.jpg'];
	
	useEffect(() => {
		setTimeout(() => {
			setCount((count) => count + 1);
			
			const randomIndex = Math.floor(array.length * Math.random()) ; 
			const randomImage = array[randomIndex];
			setImage(`/images/${randomImage}`);
			
		}, interval); 
	});
	
  return (
    <div>
		<h1>카운터 : {count} !!!</h1>
		<br/>
		<div>
			<img src={image} width="300" height="300"/>
		</div>
    </div>
	
  );
  
}
export default App;
