import {Component} from 'react' ;
import TableHeader from './TableHeader02' ;


class App extends Component{
	render(){
		
		const coffeelist = [
			{id:1, name:"아메리카노", description:"아메리카노~"},
			{id:2, name:"카푸치노", description:"좋아좋아~"},
			{id:3, name:"에스프레소", description:"고소한 원샷"},
			{id:4, name:"딸기 스무디", description:"과일 음료"},
			{id:5, name:"타로 밀크티", description:"달달한 밀크티"}
		] ;
		
		const tr_data = coffeelist.map(one => 
			<tr key={one.id}>
				<td align="center">{one.id}</td>
				<td>{one.name}</td>
				<td>{one.description}</td>
			</tr>
		);
		
		return(
			<div align="left">
				<table border="2">
					<TableHeader/>
					<tbody>
						{tr_data}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App ;