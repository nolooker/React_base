import './App.css';
// for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './App.css'; 

import {useState} from 'react';
import Card from 'react-bootstrap/Card';

import Top from './components/Top';

import Content from './components/Content';

import Bottom from './components/Bottom';

function App() {

	const title = 'React 맛집';
	
	const comment = 'very good!';
	
	const message = 'byebye!';	
	
	const [products, setProducts] = useState([
		{id:1, name:'1빵', price:1000, category:'bread', stock:100, image:'brioche_01.png', description:'맛'},
		{id:2, name:'2빵', price:2000, category:'bread', stock:200, image:'ciabatta_01.png', description:'있'},
		{id:3, name:'3빵', price:3000, category:'beverage', stock:300, image:'croissant_01.png', description:'는'},
		{id:4, name:'4빵', price:4000, category:'beverage', stock:400, image:'french_baguette_01.png', description:'빵'}
	]) ;
  
   return (
   
	<Card>
		<Card.Header>
			<Top title={title} comment={comment}/>
		</Card.Header>
		<Card.Body>
			<Content contents={products}/>
		</Card.Body>
		<Card.Footer>
			<Bottom message={message}/>
		</Card.Footer>
	</Card>
	);


}

export default App;
