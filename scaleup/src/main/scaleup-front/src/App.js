import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from'./Navbar';
import Header from './Header';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Menubar from './Menubar';
import Imageslide from './Imageslide';

function App() {
  return (
    <>
    <Router>
<<<<<<< HEAD
      <Header />
=======
      <Navbar />
      <Imageslide />
      <Menubar />
>>>>>>> ca8828f5650fe6b9b3bdfad5f3eabf0d9d93a17f
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
<<<<<<< HEAD
    </> 
=======
    </>
>>>>>>> ca8828f5650fe6b9b3bdfad5f3eabf0d9d93a17f
  );
}

export default App;