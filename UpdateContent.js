import {useState} from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function App(props) {
	
	
	const [formData, setFormData] = useState(props.formData);
	
	const onSubmitUpdate = props.onSubmitUpdate;
	
	const InputChange = (event) => {
		const {name, value} = event.target ; /* 현재 편집 중인 폼 양식 */
		
		/* prevState : 이전 상태 정보 */
		/* 입력  양식의 값이 변경 될 때 마다 실행이 됩니다. */
		setFormData(prevState => ({...prevState, [name]:value}));
		
	}
	
	const SubmitedData = (event) => {
		event.preventDefault();
		/* 수정된 폼 양식들의 정보를 다시 반환해 줍니다. */
		onSubmitUpdate(formData); 
	}
	
	const categories = props.categories;
	
	/* 넘겨 받은 카테고리 정보를 이용하여 동적으로 콤보 박스를 생성합니다. */
	/* 사용자가 수정한 카테고리 정보와 해당 카테고리의 영문 이름이 동일하면 선택되도록 설정 */
	const cateList = categories.map((item, index) =>
		<option key={index} value={item.key} selected={formData.category===item.key}>{item.value}</option>
	);
	
  return (
  
	<div>
		
		<h2>수정하기</h2>
		
		<form action="#" method="post" onsubmit={SubmitedData}>			
			<InputGroup>
			<InputGroup.Text>아이디</InputGroup.Text>
			<input type="hidden" name="id" value={formData.id}/>
			
			<Form.Control
			  type="text" name="id"
			  aria-describedby="inputGroup-sizing-sm" onChange={InputChange} value={formData.id}/>
			</InputGroup>
			
			<InputGroup>
			<InputGroup.Text>이름</InputGroup.Text>
			<Form.Control
			  type="text" name="name"
			  aria-describedby="inputGroup-sizing-sm" onChange={InputChange} value={formData.name}/>
			</InputGroup>
			
			<InputGroup>
			<InputGroup.Text>가격</InputGroup.Text>
			<Form.Control
			  type="text" name="price"
			  aria-describedby="inputGroup-sizing-sm" onChange={InputChange} value={formData.price}/>
			</InputGroup>
			
			<InputGroup>
			  <InputGroup.Text>카테고리</InputGroup.Text>
			  <Form.Select name="category" aria-label="카테고리 선택">
			  
				<option>카테고리 선택</option>
				{cateList}
			  </Form.Select>
			</InputGroup>
			
			<InputGroup>
			<InputGroup.Text>재고</InputGroup.Text>
			<Form.Control
			  type="text" name="stock"
			  aria-describedby="inputGroup-sizing-sm" onChange={InputChange} value={formData.stock}/>
			</InputGroup>
			
			<InputGroup>
			<InputGroup.Text>이미지</InputGroup.Text>
			<Form.Control
			  type="text" name="image"
			  aria-describedby="inputGroup-sizing-sm" onChange={InputChange} value={formData.image}/>
			</InputGroup>
			
			<InputGroup>
			<InputGroup.Text>부가 설명</InputGroup.Text>
			<Form.Control
			  type="text" name="description" as="textarea"
			  aria-describedby="inputGroup-sizing-sm" onChange={InputChange} value={formData.description}/>
			</InputGroup>
			
			<Button type="submit" value="수정">수정하기</Button>{' '}
		</form>
	
	</div>
   
  );
}

export default App;