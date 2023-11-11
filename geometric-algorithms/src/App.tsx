import React, { useEffect } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.scss';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Intersection } from './pages/Intersection';
import { ConvexHull } from './pages/ConvexHull';
import { Contact } from './components/Contact';
import { Test } from './pages/Test';

function App() {
  useEffect(()=>{
        document.title="Geo Algorithmics";
    },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/intersection" element={<Intersection/>}/>
          <Route path="/convex-hull" element={<ConvexHull/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
