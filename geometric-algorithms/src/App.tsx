import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ClosestPair } from './pages/ClosestPair';
import { ConvexHull } from './pages/ConvexHull';
import { VoronoiDiagram } from './pages/VoronoiDiagram';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/closest-pair" element={<ClosestPair/>}/>
          <Route path="/convex-hull" element={<ConvexHull/>}/>
          <Route path="/voronoi-diagram" element={<VoronoiDiagram/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
