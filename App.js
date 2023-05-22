import './App.css';
// for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './App.css'; 

import {useState} from 'react';
import Card from 'react-bootstrap/Card';

import Top from './components/Top';
import Content from './components/Content';
import Bottom from './components/Bottom';
import Display from './components/Display';

import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import CreateCategory from './components/CreateCategory';

function App() {

	const title = 'React 맛집';
	
	const comment = 'very good!';
	
	const message = 'byebye!';	
	
	const [products, setProducts] = useState([
		{id:1, name:'1빵', price:1000, category:'bread', stock:100, image:'brioche_01.png', description:'맛'},
		{id:2, name:'2빵', price:2000, category:'bread', stock:200, image:'ciabatta_01.png', description:'있'},
		{id:3, name:'3빵', price:3000, category:'beverage', stock:300, image:'croissant_01.png', description:'는'},
		{id:4, name:'4빵', price:4000, category:'beverage', stock:400, image:'french_baguette_01.png', description:'빵'},
	    {id:5, name:"프렌치 바게트", price:1000, category:'bread', stock:111, image:'french_baguette_01.png', description:'프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다.'},
	    {id:6, name:"크로와상", price:2000, category:'bread', stock:222, image:'croissant_02.png', description:'프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다.'},
	    {id:7, name:"아메리카노", price:3000, category:'beverage', stock:333, image:'americano01.png', description:'에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다.'},
	    {id:8, name:"카푸치노", price:4000, category:'beverage', stock:444, image:'cappuccino01.png', description:'스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다.'},
	    {id:9, name:"스폰지 케이크", price:5000, category:'cake', stock:555, image:'sponge_cake_01.png', description:'가장 일반적인 케이크로, 부드럽고 공기가 많은 스폰지 텍스처를 가지고 있습니다. 일반적으로 크림, 과일, 초콜릿 등 다양한 토핑과 함께 제공됩니다.'},
	    {id:10, name:"초콜릿 케이크", price:6000, category:'cake', stock:666, image:'chocolate_cake_01.png', description:'초콜릿으로 만든 케이크로, 풍부하고 진한 초콜릿 맛을 가지고 있습니다. 초콜릿으로 만든 케이크 스폰지와 초콜릿으로 만든 크림 또는 가나슈를 사용하여 제작됩니다.'}

	]) ;
	
	
	/* mode : 지금 현재 상태의 모드 지정 */
	/* insert, update, delete, read, detail 등등 */
	const [mode, setMode] = useState('');
	
	/* selectedId : 선택된 <tr> 태그의 인덱스 번호 */
	/* 최초 시작시 1번 품목이 선택되었다고 가정함 */
	const [selectedId, setSelectedId] = useState(1);
	
	const ClickArrived = (id, event) => {
			console.log('App-ClickArrived-called');
			console.log('선택된 아이디 : ' + id);
			setSelectedId(Number(id)); /* 선택 항목 변경됨 */
			setMode('detail'); /* 상세 보기 모드로 변경함 */
	}
	
	
	/* 모드에 따라서 화면을 서로 다르게 보여 주는 함수 */
	const getContent = () => {
	  console.log('App-getContent-called');
	  console.log('current mode: [' + mode + ']');

	  if (mode === 'detail') {
		var mycontent = getReadContent();

		return <Display selectedProduct={mycontent} />;

	  } else if (mode === 'get_insert') { /* 생성 버튼을 눌렀습니다. */

		return <CreateContent onSubmitInsert={InsertedData} categories={category}/>; 

	  } else if (mode === 'post_insert') { /* 신규 상품을 목록에 추가합니다. */

			const newProducts = products.concat(newItem);
			setProducts(newProducts);
			setMode('read');

	  } else if (mode === 'get_update') { /* 수정 버튼을 눌렀습니다. */
			const currentRow = getReadContent() ;
			return <UpdateContent formData={currentRow} onSubmitUpdate={UpdatedData} categories={category}/> ;
			
	  }else if (mode === 'get_delete') { /* 특정 상품을 삭제합니다. */

		const notDeleted = ExceptRow(selectedId);
		setProducts(notDeleted);
		setMode('read');

	  }else if (mode === 'get_category_add') { /* 신규 카테고리를 추가합니다. */
		return <CreateCategory onSubmitCategoryAdd={InsertCategory} />; 
		
	  }else if (mode === '') {

	  }else{
		  return <div/>;
	  }
	}

	
	const getReadContent = () => {
		/* 선택된 id 와 동일한 항목만 필터링 합니다. */
		const selectedProduct = products.filter(contents => contents.id === selectedId);
		
		/* 선택된 요소가 객체를 저장하고 있는 배열이다. */
		
		return selectedProduct[0] ;
	}
	
	const ModeSelected = (mode, event) => {
		console.log('App-ModeSelected-called');
		console.log('mode : ' + mode);
		setMode(mode);
	}
	
	/* newItem : 생성 폼에서 넘어온 데이터를 저장할 변수 */
	const [newItem, setNewItem] = useState(null);
	
	/* id가 가장 큰 값 찾기 함수 */
	const GetMaxId = products.filter((item, index, arr) => {
		const maxValue = Math.max(...arr.map(one => one.id));
		return item.id === maxValue ;
	}) ; 
	
	
	const InsertedData = (formData, event) => {
		console.log('App-InsertedData-called');
		console.log('상품 이름 : ' + formData.name.value);
		console.log('가격 : ' + formData.price.value);
		console.log('카테고리 : ' + formData.category.value);
		console.log('재고 : ' + formData.stock.value);
		console.log('이미지 : ' + formData.image.value);
		console.log('설명 : ' + formData.description.value);
		
		/* newId : 새 품목에 적용될 신규 아이디 */
		const newId = GetMaxId[0].id + 1 ; 
		/* const newId = products.length + 1 ; */
		
		console.log('신규 아이디 : ' + newId);
		
		/* temp : 임시 변수 */
		const temp = [{
			id:newId,
			name:formData.name.value,
			price:formData.price.value,
			category:formData.category.value,
			stock:formData.stock.value,
			image:formData.image.value,
			description:formData.description.value,
		}];
		
		setNewItem(temp);
		console.log('신규 품목 내용');
		console.log(newItem);
		
		setMode('post_insert');
	}
	
	const UpdatedData = (obj, event) => {
		console.log('App-InsertedData-called');
		console.log('obj');
		console.log(obj); /* 수정 폼에서 넘어온 파라미터 리스트 */
		
		const unModified = ExceptRow(obj.id) ;	
		console.log('unModified');
		console.log(unModified); /* obj를 제외한 나머지 상품 목록 */
		
		const reNewedData = unModified.concat(obj);
		console.log('reNewedData');
		console.log(reNewedData); /* 갱신된 최종 상품 목록 */
		
		setProducts(reNewedData);
		setMode('read');
		
	}
	
	/* 수정된 행정보를 제외한 모든 상품들만 추려서 반환해 줍니다. */
	const ExceptRow = (id) => {
		console.log('App-ExceptRow-id : [' + id + ']');
		return products.filter(one => one.id != id);
	}
	
	const categoryList = [{key:'bread', value:'빵'}, {key:'beverage', value:'음료수'}];
	const [category, setCategory] = useState(categoryList);
	const InsertCategory = (obj, event) => {
		console.log('App-InsertCategory-called');
		console.log('obj');
		console.log(obj); /* 신규 카테고리 정보 */
		
		const newCategory = {key:obj.key.value, value:obj.value.value};
		console.log('newCategory');
		console.log(newCategory); /* 신규 카테고리 객체 */
		
		const newCategoryArray = category.concat(newCategory);
		
		console.log('newCategoryArray');
		console.log(newCategoryArray);

		setCategory(newCategoryArray);
		
		setMode('read');
	}
	
	/* 컬럼별 정렬 기능 */
	/* 기본 값으로 상품 이름에 대하여 오름차순 정렬 하겠습니다. */
	const [orderInfo, setOrderInfo] = useState({column:'name', ordering:'asc'});
	
	const Ordering = (order_information) => {
		/* column은 정렬할 컬럼, order는 차순 */
		
		const column = order_information.column;
		const order = order_information.ordering;
		
		if(column==='name' || column==='category'){ /* 문자열형 */
			if(order==='asc'){
				products.sort((a,b) => a[column].localeCompare(b[column]));		
			}else{
				products.sort((a,b) => b[column].localeCompare(a[column]));		
			}
	
		}else{ /* 숫자형 */
			if(order==='asc'){
					products.sort((a,b) => a[column] - b[column]);	
			}else{
				products.sort((a,b) => b[column] - a[column]);	
			}
		}
	};
	
	const ClickOrderBy = (column_name, order_by) => {
		
		console.log('App-ClickOrderBy-called');
		const newOrderInfo = {column:column_name, ordering:order_by};
		setOrderInfo(newOrderInfo);
		
		/* 정렬 함수 호출하기 */
		Ordering(newOrderInfo);
		
	}
	
   return (
   
	<Card>
		<Card.Header>
			<Top title={title} comment={comment}/>
		</Card.Header>
		<Card.Body>
			<Content contents={products} onClickToContent={ClickArrived}
			onOrderByClick={ClickOrderBy} orderInfo={orderInfo}/>
		</Card.Body>
		<Card.Body>
			{getContent()}
		</Card.Body>
		<Card.Footer>
			<Bottom message={message} onClickBottom={ModeSelected} />
		</Card.Footer>
	</Card>
	);

}

export default App;
