import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function App(props) {
	
	const onSubmitCategoryAdd = props.onSubmitCategoryAdd ;
	
	const SubmitCategory = (event) => {
		console.log('CreateCategory-SubmitCategory-called');
		let form_object = event.target ;
		onSubmitCategoryAdd(form_object);
	}
	
  return (
 
	<div>
		<h2>카테고리 추가</h2>
		<form action="#" method="post" onSubmit={SubmitCategory}>			
			
			<InputGroup>
			<InputGroup.Text>영문 이름</InputGroup.Text>
			<Form.Control
			  type="text" name="key"
			  aria-describedby="inputGroup-sizing-sm"/>
			</InputGroup>
			
			<InputGroup>
			<InputGroup.Text>한글 이름</InputGroup.Text>
			<Form.Control
			  type="text" name="value"
			  aria-describedby="inputGroup-sizing-sm"/>
			</InputGroup>
		
			<Button type="submit" value="카테고리 추가">카테고리 추가</Button>{' '}
		</form>
	</div>
   
  );
}

export default App;