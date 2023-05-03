import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import 앱이름 from 파일이름
// import App from './App';
// import App from './ch02.es6_syntax/App_let_const' ;
//import App from './ch02.es6_syntax/App_template_string' ;
//import App from './ch02.es6_syntax/App_make_function' ;
//import App from './ch02.es6_syntax/App_arrow_function.js' ;
//import App from './ch02.es6_syntax/App_structure_split_assignment.js' ;
//import App from './ch02.es6_syntax/App_spread_operator.js' ;
//import App from './ch02.es6_syntax/App_object_extension_expression.js' ;
//import App from './ch02.es6_syntax/App_foreach.js' ;
//import App from './ch02.es6_syntax/App_maps.js' ;
//import App from './ch02.es6_syntax/App_reduce.js' ;
import App from './ch02.es6_syntax/App_mytest.js' ;

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* 콘솔에서 두 번 출력이 되는 문제를 해결하기 위하여 다음과 같이 주석을 작성합니다. */
/* StrictMode를 사용하면 개발 도중 발생하는 문제를 감지하기 위한 설정으로 rendering을 두 번 실행 합니다.*/
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();