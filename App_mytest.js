function App(){
	console.log('');
	
	const humans = [
		{name : '김동현', age : 12, pass : '0000', atti : 'A'},
		{name : '박돌이', age : 20, pass : '1111', atti : 'B'},
		{name : '이진수', age : 30, pass : '2222', atti : 'A'},
		{name : '삼천포', age : 15, pass : '3333', atti : 'C'}
	];
	
	function getHumansInfo(human, index){
		
		const info = <li key={index}>이름 : {human.name} / 나이 : {human.age} / 비밀번호 : {human.pass} / 태도 : {human.atti} </li> ;
		return info;
	}
	
	const List = () => {
		const humanList = humans.map(getHumansInfo);
		return <ol>{humanList}</ol>
		
	};
	
	const MakeSport = () => {
		
		const sports = [
			{name:'손흥민', age:10, sport:'축구', medal:'금메달', carrer:'0'},
			{name:'이강인', age:20, sport:'야구', medal:'금메달', carrer:'우승 3회'},
			{name:'김덕배', age:30, sport:'농구', medal:'은메달', carrer:'우승 5회'},
			{name:'홀란드', age:40, sport:'발야구', medal:'은메달', carrer:'0'},
			{name:'토레스', age:50, sport:'배구', medal:'동매달', carrer:'우승 5회'}
		];
		
		const totalData = sports.reduce((total, currentValue, currentIndex) => {
			
			let name = <td>{currentValue.name}</td>;
			let age = <td>{currentValue.age}</td>;
			let sport = <td>{currentValue.sport}</td>;
			let medal = <td>{currentValue.medal}</td>;
			let carrer = <td>{currentValue.carrer}</td>;
			
			let Tag1 = <tr key={currentIndex}>{name}{age}{sport}{medal}{carrer}</tr> ;
			
			total.push(Tag1) ;
			return total ;
			
		}, []); 
		
		console.log('totalData');
		console.log(totalData);
		
		return <tbody>{totalData}</tbody> ;
		
	};
	
	const TableFront = () => {
			
			let name = <td>이름</td>;
			let age = <td>나이</td>;
			let sport = <td>종목</td>;
			let medal = <td>메달</td>;
			let carrer = <td>우승횟수</td>;
		
		let Tag1 = <tr>{name}{age}{sport}{medal}{carrer}</tr> ;
		
		return <thead>{Tag1}</thead>;
	};
	
	
	return(
		<div>
			<h2>연습용 테스트파일1</h2>
			<List></List>
		
			<h2>연습용 테스트파일2</h2>
				<table border='3'>
					<TableFront/>
					<MakeSport/>
				</table>
	
		</div>
	);
}

export default App;