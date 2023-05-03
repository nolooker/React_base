function App(){
	console.log('배열 관련 map 함수');
	const numbers = [4, 9, 16, 25];
	
	function multiply(num){
		console.log('호출됨');
		return 10 * num ;
	}
	
	const result01 = numbers.map(multiply);
	console.log(result01);
	
	console.log('비어 있는 배열은 호출이 되나요');
	const result02 = [].map(multiply);
	console.log(result02);
	
	console.log('map()과 화살표 함수의 조합');
	const twotimes = n => 2 * n ;
	const twotimes_result = numbers.map(twotimes) ;
	console.log(twotimes_result);
	
	console.log('자바 스크립트 Math 객체 사용하기');
	const rootValue = numbers.map(Math.sqrt);
	console.log(rootValue); 
	
	const foods = ['라면','우동','짜장면','짬뽕','칼국수','마라탕'];
	
	const foodResult = foods.map(one => '맛있는 ' + one + '~~좋아요.');
	console.log(foodResult);
	
	const words = ['love','peach','hello','sea','identification'];
	
	console.log('각 단어들의 문자열 길이');
	console.log(words.map(one => one.length));
	
	var min_length = [] ; // empty array
	
	const mylength = 4 ;
	console.log('문자열 길이가 ' + mylength + '이하인 단어들');
	
	words.map(one => {
		if(one.length <= mylength){
			min_length.push(one) ;
		}
	});
	console.log(min_length) ;
	
	console.log('map() 함수를 사용한 Component화');
	const WinterItems = () => {
		const names = ['눈사람','얼음','눈','바람'];
		const nameList = names.map((name, index) => <li key={index}>{name}</li>);
		return <ul>{nameList}</ul> ;
	};
	
	const persons = [
		{firstname : "민정", lastname : "김", age : 10},
		{firstname : "효리", lastname : "최", age : 20},
		{firstname : "지영", lastname : "강", age : 30}
	];
	
	function getPersonInfo(item, index){ // 김 민정님, 나이 : 10(세)
		
		const info = <li key={index}>{item.lastname} {item.firstname}님, 나이 : {item.age}(세)</li> ;
		return info ;
		
	}
	
	const CustomerList = () => {
		const personList = persons.map(getPersonInfo);
		return <ol>{personList}</ol> ;
	};

	
	return(
		<div>
			<h2>겨울 품목</h2>
			<WinterItems></WinterItems>  // 이게 정석임
			<h2>고객 명단</h2>
			<CustomerList/>
		</div>
	);
	
}

export default App;