import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {
  
  let [ page, setPage ] = useState('homepage')
  let changePage = (newPage) => {setPage(newPage)}

  return (
    <>
      <Header changePage={changePage}/>
      {
        (page === 'homepage') && (
          <Homepage/>
        )
      }
      {
        (page === 'portfolio') && (
          <Portfolio/>
        )
      }
      {
        (page === 'contact') && (
          <Contact/>
        )
      }
      <Footer/>
    </>
  );
}

export default App;
