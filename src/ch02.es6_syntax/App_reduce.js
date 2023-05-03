function App(){
	console.log('배열 관련 reduce 함수');
	
	const numbers = [1,2,3,4,5,6,7,8,9,10];
	
	const answer01 = numbers.reduce((total, currentValue) => total + currentValue, 0);
	console.log(answer01);
	
	function Hap(total, currentValue){
		console.log(total + '/' + currentValue);
		return total + currentValue ;
	}
	
	var initValue = 0;
	
	const answer02 = numbers.reduce(Hap, initValue);
	console.log(answer02);
	
	console.log('배열 요소들 홀짝 판단하기');
	const array = [10, 15, 25, 30];
	const result = array.reduce((total, currentValue, currentIndex, arr) => {
		//console.log('currentValue : ' + currentValue);
		//console.log('currentValue % 2 : ' + currentValue % 2);
		//console.log('currentIndex : ' + currentIndex);
		//console.log('arr : ' + arr);
		
		// 0은 거짓이고, 0이 아니면 참입니다.
		// total.push(currentValue % 2 ? '홀수' : '짝수');
		
		total.push(currentValue % 2 == 0 ? '짝수' : '홀수');
		return total ;
		
	}, []); /* total 변수는 empty array로 정의합니다. */
	
	console.log(result);
	console.log('원본 배열이 변경 되었나요?');
	console.log(array);
	
	const MakeTable = () => {
		
		const students = [
			{name:'양현석', age:20, subject:'수학', grade:'A', atti:'C'}, 
			{name:'김갑수', age:30, subject:'과학', grade:'B', atti:'B'}, 
			{name:'최유진', age:40, subject:'영어', grade:'C', atti:'A'}
		];
		
		const totalData = students.reduce((total, currentValue, currentIndex) => {
			let name = <td>{currentValue.name}</td> ;
			let age = <td>{currentValue.age >= 25 ? 'old' : 'young'}</td> ;
			let subject = <td>{currentValue.subject}</td> ;
			let grade = <td>{currentValue.grade}</td> ;
			let atti = <td>{currentValue.atti}</td> ;
			
			let trTag1 = <tr key={currentIndex}>{name}{age}{subject}{grade}{atti}</tr> ;
			let trTag2 = <tr>{age}{name}{grade}{atti}</tr> ;
			let trTag3 = <tr>{subject}{subject}{grade}{atti}</tr> ;
			
			total.push(trTag1);
			total.push(trTag2);
			total.push(trTag3);
			return total ;
		},[]);
		
		console.log('totalData');
		console.log(totalData);
		
	return <tbody>{totalData}</tbody> ;
	};
	
	const TableHeader = () => {
			let name = <td>이름</td> ;
			let age = <td>연령대</td> ;
			let subject = <td>과목</td> ;
			let grade = <td>등급</td> ;
			let atti = <td>태도</td> ;
		
			let trTag1 = <tr>{name}{age}{subject}{grade}{atti}</tr>
		
		return <thead>{trTag1}</thead>
	};
	
	return(
		<div>
			<table border='1'>
				<TableHeader/>
				<MakeTable/>
			</table>
		</div>
	);
}

export default App;