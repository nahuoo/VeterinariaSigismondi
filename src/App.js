import React,{Component} from 'react';
import './assets/css/App.css';
import {Hero} from './components/hero'
import { Home } from './routes/Home'
import {Navbar} from './components/Navbar'
import { About } from './routes/About';
import {Routes, Route, Link } from 'react-router-dom'

class App extends Component{
  render(){
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>    
  )
  }
}

export default App;
