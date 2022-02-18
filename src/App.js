import React,{Component} from 'react';
import './assets/css/App.css';
import { Home } from './routes/Home'
import {Navbar} from './components/Navbar'
import { About } from './routes/About';
import {Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer';
import { Intro } from "./components/animations/Intro";

class App extends Component{
  render(){
    return (
      <div>
        <Intro />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
