import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import {Table} from 'react-bootstrap' ;

function App() {
	
	/* 수신 받은 데이터 */
	const [receivedData, setReceivedData] = useState(null) ;
	
	/* 데이터 로딩중이면 true 입니다. */
	const [loading, setLoading] = useState(false) ;
	
	/* 오류 발생 시 정보가 들어있는 예외 객체  */
	const [error, setError] = useState(null) ;
	
	useEffect(() => {
		const fetchData = async () => {
			try{
				
				/* state initialize */
				setReceivedData(null);
				setError(null);
				setLoading(null);
				
				const url = 'http://localhost:8989/thymeleaf/rest/ex01';
				const response = await axios.get(url);
				
				setReceivedData(response.data);
				
				console.log('response.data');
				console.log(response.data);
				
			}catch(err){
				
				setError(err) ;
				
			} /* end try...catch */
			
			setLoading(false);
			
		};	/* end useEffect */
		
		
		fetchData() ; /* called fetchData function */
		
	}, []) ; /* end useEffect */
	
	if(loading) return <div>데이터 로딩 중입니다.</div>;
	if(error) return <div>오류가 발생했습니다.</div>;
	if(!receivedData) return null;
	
  return (
    <div>
		<Table>
			<tbody>
			<tr>
				<td>이름</td>
				<td>{receivedData.name}</td>
			</tr>
			<tr>
				<td>가격</td>
				<td>{receivedData.price}</td>
			</tr>
			<tr>
				<td>설명</td>
				<td>{receivedData.description}</td>
			</tr>
			</tbody>
		</Table>
    </div>
  );
}

export default App;
