import logo from './logo.svg';
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Footer from "./components/footer";
import Main from "./components/main";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
