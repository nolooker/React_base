import {Component} from 'react' ;


class App extends Component{
	render(){
		/* 넘어 오는 productlist 프롬스를 반복문을 사용하여 <li> 태그를 만듭니다. */
		var taglist = [] ; /* <li> 태그를 저장할 배열 */
		var productlist = this.props.productlist ;
		var i = 0 ;
		
		/* 배열 li_tags에 li 요소들을 푸시합니다. */
		while(i < productlist.length){
			
			var litag = <div key={productlist[i].id}><h2>{productlist[i].name}</h2><p>{productlist[i].description}</p></div>;
			
			taglist.push(litag) ;
			i += 1 ;
		}
		
		return(
			<div>
					{taglist}
			</div>
		);
	}
}

export default App ;