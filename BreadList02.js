import {Component} from 'react' ;
import TableHeader from './TableHeader02' ;


class App extends Component{
	render(){
		
		const breadlist = [
			{id:1, name:"1빵", description:"맛"},
			{id:2, name:"2빵", description:"좋"},
			{id:3, name:"3빵", description:"은"},
			{id:4, name:"4빵", description:"빵"},
			{id:5, name:"5빵", description:"빵"}
		];
		
		const tr_data = breadlist.map(one => 
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