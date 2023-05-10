function App() {
	
	const KeyEventTest = (param, event) => {
		console.log('파라미터 : ' + param) ;
		
		var evt_array = [] ;
		for(const evt in event){
			evt_array.push(evt);
		}
		
		console.log(evt_array) ;
		
		
		console.log('event.type : ' + event.type) ;
		console.log('컨트롤 키가 눌러 지면 true가 됩니다.') ;
		
		console.log('event.ctrlKey : ' + event.ctrlKey) ;
		console.log('event.keyCode : ' + event.keyCode) ;
		
		
		var value = event.target.value ;
		console.log('value : ' + value) ;
		
	}
	
	console.log('') ;
	
	return(
		<div>
			<h2>Key Event</h2>
			key down <input type="text" onKeyDown={(event) => KeyEventTest("hello",event)}/><br/>
			
			key press <input type="text" onKeyPress={(event) => KeyEventTest("world",event)}/><br/>
			
			key up <input type="text" onKeyUp={(event) => KeyEventTest("welcome",event)}/><br/>
		</div>
	);
}
export default App;