import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App(props) {
	const onClickBottom = props.onClickBottom ;
	
	const ClickMenu = (event) => {
		event.preventDefault() ;
		
		/* id 속성에 mode 정보가 들어 있습니다. */
		let target_id = event.target.id ;
		onClickBottom(target_id);
	}
	
  return (
  
	<div>
		<>
      <ButtonGroup className="mb-2">
        <Button id="get_insert" variant="info" onClick={ClickMenu}>생성</Button>{' '}
        <Button id="get_update" variant="primary" onClick={ClickMenu}>수정</Button>{' '}
        <Button id="get_delete" variant="danger" onClick={ClickMenu}>삭제</Button>{' '}
		<Button id="get_category_add" variant="success" onClick={ClickMenu}>카테고리 추가</Button>{' '}
      </ButtonGroup>
      <br/>
		</>
		
		<br/>
		<h3>{props.message}</h3>
	</div>
   
  );
}

export default App;