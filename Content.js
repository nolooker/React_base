import Table from 'react-bootstrap/Table';

function App(props) {
	
	var contents = props.contents ;  // 상품 여러개
	
	/* map 함수 적절히 사용 */
	
  return (
   <div style={{ maxHeight: '400px', overflow: 'auto' }}>
		<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>price</th>
          <th>category</th>
		  <th>stock</th>
        </tr>
      </thead>
      <tbody>
            {contents.map((contents) => (
              <tr key={contents.id}>
                <td>{contents.id}</td>
                <td>{contents.name}</td>
                <td>{contents.price}원</td>
                <td>{contents.category==='bread' ? '빵' : '음료수'}</td>
				<td>{contents.stock}</td>
              </tr>
            ))}
          </tbody>
		</Table>
	</div>	
   
  );
}

export default App;