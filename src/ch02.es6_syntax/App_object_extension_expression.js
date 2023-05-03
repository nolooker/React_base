function App(){
	console.log('객체 확장 표현식');
	
	var name = '박기현';
	var korean = 60;
	var english = 80;
	
	console.log('ES5 방식');
	console.log('{key1:value1, key2:value2}')
	var student5 = {name:name, korean:korean, english,english};
	console.log(student5);
	
	var firstname = ' gildong' ; 
	
	var combined = {} ; // empty object
	combined['hong' + firstname] = '홍길동' ; // setter
	console.log(combined);
	console.log('typeof(combined) : ' + typeof(combined));
	console.log('JSON.stringify(combined) : ' + JSON.stringify(combined));
	console.log('getter : ' + combined['hong gildong']);
	
	console.log('함수 리스트 작성 function 키워드 사용');
	var functionList5 = {
		sayHello:function(name){console.log('' + name + '님');},
		goodLuck:function(){return '행운을 빌어요^^'},
	};
	
	functionList5.sayHello('이아현');
	console.log(functionList5.goodLuck());
	
	
	console.log('\nES6 방식');
	console.log('key를 생략하면 변수의 이름이 자동으로 key가 됩니다.');
	var student6 = {name, korean, english};
	console.log(student6);
	
	
	console.log('key 프로터티를 동적으로 생성시 대괄호를 사용하라');
	var combined6 = {['hong' + firstname]:'홍만식'};
	console.log('combined6');
	console.log(combined6);
	
	console.log('함수 리스트 작성 시 function 키워드를 사용하지 않아도 됩니다.');
	var functionList6 = {
		korean, 
		sayHello(name){console.log('안녕하세요~~' + name + '씨');},
		goodBye(){return '잘 가세요~'},
	};
	
	console.log('국어 점수 : ' + functionList6.korean);
	functionList6.sayHello('노영민');
	console.log(functionList6.goodBye());
	
	
	return(
		<div>안녕하세요.</div>
	);
}

export default App;