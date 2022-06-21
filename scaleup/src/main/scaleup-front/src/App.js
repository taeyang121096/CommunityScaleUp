// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // IP주소 변수 선언
  const [test, setTest] = useState('');

  // // IP주소 값을 설정합니다.
  // function callback(data) {
  //   setIp(data);
  // }

  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
      // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
      axios.get('/api/test')
      .then(response => setTest(response.data))
      .catch(error => console.log(error))
    }, []
  );

  return (
    <div>
      테스트 : {test}
      dfdfd
      dfdfdf
      dfdfdfdfdfdfdfdfdf
    </div>
  );
}

export default App;