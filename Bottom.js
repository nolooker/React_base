import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App(props) {
	
  return (
  
	<div>
		<>
      <ButtonGroup className="mb-2">
        <Button variant="info">생성</Button>{' '}
        <Button variant="primary">수정</Button>{' '}
        <Button variant="danger">삭제</Button>{' '}
		<Button variant="success">카테고리 추가</Button>{' '}
      </ButtonGroup>
      <br />
		</>
		
		<br/>
		<h3>{props.message}</h3>
	</div>
   
  );
}

export default App;