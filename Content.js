import {Table} from 'react-bootstrap' ;
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ListGroup from 'react-bootstrap/ListGroup';


function App(props){
	var contents = props.contents ; /* 상품 여러개 */ 
	
	/*  테이블의 행(tr)을 클릭했습니다. */
	const onClickToContent = props.onClickToContent ;
	
	const ClickItem = (event) => {
		console.log('Content-ClickItem-called') ;
		
		/* event.target : 이벤트를 발생시킨 요소(태그) */
		//for(const val in event.target){ /* 요소가 가지고 있는 속성 출력 */
		//	console.log(val) ;
		//}
	
		/* parentNode : 해당 요소의 부모 요소 */
		const parentNodeId = event.target.parentNode.id ; 
		//console.log(parentNodeId);
		
		onClickToContent(parentNodeId);
	}
	
	/* map 함수 적절히 사용 */
	function getProductList(item, index) {
		
		let hangul = ''; // 한글 이름
		
		
		// 차후 입력값으로 카테고리가 나올 수 있게 수정해야함~?
		switch(item.category){
			case 'bread':
				hangul = '빵';
				break;
				
			case 'beverage':
				hangul = '음료수';
				break;
				
			case 'dk':
				hangul = '아';
				break;
		}
		
		const trtag = 
			<tr id={item.id} key={index}>
			<td onClick={ClickItem}>{item.name}</td>
			<td onClick={ClickItem} align='right'>{item.price.toLocaleString()} 원</td>
			<td onClick={ClickItem}>{hangul}</td>
			</tr>;
		return trtag ;
	}

	const ProductList = () => {
		const dataList = contents.map(getProductList);
		return <tbody>{dataList}</tbody>;
	};	
	
	/* 컬럼별 정렬 가능 */
	var onOrderByClick = props.onOrderByClick ;
	var orderInfo = props.orderInfo; /* 넘겨 받은 정렬 정보 */
	
	/* 드롭다운 버튼을 클릭했습니다. App 컴포넌트에게 정렬 방식을 알려 주는 함수 입니다. */
	const ClickButtonGroup = (event) => {
			console.log('Content-ClickButtonGroup-called');
			event.preventDefault();
			let target_id = event.target.id;
			console.log('event.target.id : ' + target_id);
			
			if(target_id==='asc' || target_id==='desc'){ /* 정렬 방식을 클릭함 */
				onOrderByClick(orderInfo.column, target_id);
			}else{
				onOrderByClick(target_id, orderInfo.ordering);
			}
	}
	
	return(
		<div>
			<Table>
				<tbody>
				<tr>
					<td width="10%" valign="middle">
					<Dropdown>
					  <Dropdown.Toggle variant="dark" id="dropdown-basic">
						정렬할 컬럼
					  </Dropdown.Toggle>

					  <Dropdown.Menu>
						<Dropdown.Item id="name" onClick={ClickButtonGroup}>이름</Dropdown.Item>
						<Dropdown.Item id="price" onClick={ClickButtonGroup}>가격</Dropdown.Item>
						<Dropdown.Item id="category" onClick={ClickButtonGroup}>카테고리</Dropdown.Item>
					  </Dropdown.Menu>
					  
					</Dropdown>
					</td>
					
					<td valign="middle">
					<Dropdown>
					  <Dropdown.Toggle variant="dark" id="dropdown-basic">
						정렬 방식
					  </Dropdown.Toggle>

					  <Dropdown.Menu>
						<Dropdown.Item id="asc" onClick={ClickButtonGroup}>오름차순</Dropdown.Item>
						<Dropdown.Item id="desc" onClick={ClickButtonGroup}>내림차순</Dropdown.Item>
					  </Dropdown.Menu>
					  
					</Dropdown>
					</td>
					
					<td valign="middle">
					<ListGroup horizontal>
					  <ListGroup.Item>
						정렬할 컬럼 : {orderInfo.column}
					  </ListGroup.Item>
					  
					  <ListGroup.Item>
						정렬할 컬럼 : {orderInfo.ordering==='asc' ? '오름차순' : '내림차순'}
					  </ListGroup.Item>
					  
					</ListGroup>
					</td>
				</tr>
				</tbody>
			</Table>		
		
			<Table striped bordered hover>
				<thead>
				<tr>
					<th>이름</th>
					<th>가격</th>
					<th>카테고리</th>
				</tr>
				</thead>
				{ProductList()}				
			</Table>		
			
		</div>
	);
}

export default App ;