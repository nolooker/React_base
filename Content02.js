import {Component} from 'react' ;


class App extends Component{
	render(){
		/* 넘어 오는 breadlist 프롬스를 반복문을 사용하여 <li> 태그를 만듭니다. */
		var li_tags = [] ; /* <li> 태그를 저장할 배열 */
		var breadlist = this.props.breadlist ;
		var i = 0 ;
		
		/* 배열 li_tags에 li 요소들을 푸시합니다. */
		while(i < breadlist.length){
			
			var litag = <div key={breadlist[i].id}><h2>{breadlist[i].name}</h2><p>설명:{breadlist[i].description}</p></div>;
			
			li_tags.push(litag) ;
			i += 1 ;
		}
		
		return(
			<div>
					{li_tags}
			</div>
		);
	}
}

export default App ;