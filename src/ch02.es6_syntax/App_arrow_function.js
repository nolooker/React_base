function App(){
	console.log('화살표 함수');
	console.log('\n매개 변수 없음');
	
	const func01_1 = function(){
		return 'hello~~everyone~01';
	}
	
	const func01_2 = () => {
		return 'hello~~everyone~02';
	}
	
	const func01_3 = () => 'hello~~everyone~03';
	
	console.log('func01_1() : ' + func01_1);
	console.log('func01_2() : ' + func01_2);
	console.log('func01_3() : ' + func01_3);
	
	console.log('\n매개 변수 1개');
	
	var func02 = (name) => {
		//return 'hello~~' + name + '님' ;
		return `hello~~${name}님` ;
	}
	
	console.log('func02(\'홍길동\') : ' + func02('홍길동'));
	
	console.log('\n매개 변수 2개');
	
	var func03_1 = (first, second) => {
		return `${first} 더하기 ${second}는 ${first+second} 입니다.`;
	}
	
	console.log('func03_1(14,5) : ' + func03_1(14,5));
	
	
	var func03_2 = (first, second) => {
		return `${first} 곱하기 ${second}는 ${first*second} 입니다.`;
	}
	
	console.log('func03_2(14,5) : ' + func03_2(14,5));




	console.log('\n반환 타입이 객체인 경우');
	console.log('대괄호와 키 이름을 이용하여 접근합니다.');
	var func04 = (first, second) => ({add:first+second, mul:first*second});
	console.log('func04(14,5)["add"] : ' + func04(14,5)['add']);
	console.log('func04(14,5)["mul"] : ' + func04(14,5)['mul']);
	
	
	var adultCheck = (name,age) => {
		return `${name}는 ${age > 19} 이므로 성인 입니다.`;
	};
	
	console.log('adultCheck(\'김철수\',25)' + adultCheck('김철수',25));
	
	var adultCheck01 = (name, age) => {
		
		var adult = `${age >= 19 ? '성인' : '미성년자'} `;
		
		var result = `${name}(${age}세)는 ${adult} 입니다.`;
		
		return result ;
		
	} 
	
	
	console.log('\n김철수,25 : ' + adultCheck01('김철수', 25)) ;


	
	return(
		<div>안녕하세요.</div>
	);
}

export default App;