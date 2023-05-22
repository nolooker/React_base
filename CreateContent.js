import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function App(props) {
	
	const onSubmitInsert = props.onSubmitInsert ;
	
	const SubmittedData = (event) => {
		console.log('CreateContent-SubmittedData-called');
		event.preventDefault();

		let form_object = event.target ; /* 폼 객체 */
		onSubmitInsert(form_object);
	}
	
	const categories = props.categories;
	
	/* 넘겨 받은 카테고리 정보를 이용하여 동적으로 콤보 박스를 생성합니다. */
	const cateList = categories.map((item, index) =>
		<option key={index} value={item.key}>{item.value}</option>
	);
	
  return (
 
	<div>
		<h2>생성하기</h2>
		<form action="#" method="post" onSubmit={SubmittedData}>			
			<InputGroup>
			<InputGroup.Text>이름</InputGroup.Text>
			<Form.Control
			  type="text" name="name"
			  aria-describedby="inputGroup-sizing-sm"/>
			</InputGroup>
			
			<InputGroup>
			<InputGroup.Text>가격</InputGroup.Text>
			<Form.Control
			  type="text" name="price"
			  aria-describedby="inputGroup-sizing-sm"/>
			</InputGroup>
			
			<InputGroup>
			  <InputGroup.Text>카테고리</InputGroup.Text>
			  <Form.Select name="category" aria-label="Default select example">
				<option>카테고리 선택</option>
				{cateList}
			  </Form.Select>
			</InputGroup>
			
			<InputGroup>
			<InputGroup.Text>재고</InputGroup.Text>
			<Form.Control
			  type="text" name="stock"
			  aria-describedby="inputGroup-sizing-sm"/>
			</InputGroup>
			
			<InputGroup>
			<InputGroup.Text>이미지</InputGroup.Text>
			<Form.Control
			  type="text" name="image"
			  aria-describedby="inputGroup-sizing-sm"/>
			</InputGroup>
			
			<InputGroup>
			<InputGroup.Text>부가 설명</InputGroup.Text>
			<Form.Control
			  type="text" name="description" as="textarea"
			  aria-describedby="inputGroup-sizing-sm"/>
			</InputGroup>
			
			<Button type="submit" value="생성">생성하기</Button>{' '}
		</form>
	</div>
   
  );
}

export default App;