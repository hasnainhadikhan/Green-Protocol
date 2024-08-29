import { useState } from 'react'
import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'
import React from 'react';
import Card    from "./component/Card"
import Solution from "./component/Solution"
import Problem from "./component/Problem"
import Example from "./component/Example"
import BussModal from './component/BussModal'
import Footer  from "./component/Footer"

function App() {
    return (
        <>
   
<nav id='nav' className="navbar  bg-body-success">
  <div className="container-fluid">
    <h1 id='navh1' className="navbar-brand mb- h1" >Green Protocol.</h1>
    <div className="container-fluid">
    <ul className="nav justify-content-end">
  <li className="nav-item">
    <a id='navAnc' className="nav-link active" aria-current="page" href="/">Problem</a> 
    </li>
  <li class="nav-item">
    <a id='navAnc' className="nav-link" href="/">Solution</a>
  </li>
  <li class="nav-item">
    <a id='navAnc' className="nav-link" href="/">Business Model</a>
  </li>
  <li class="nav-item">
    <a id='navAnc' className="nav-link" href='/'>Profit  Distribution</a>
  </li>
</ul>
  </div>
 
 
  </div>
</nav>
       <Card/>               
       <Problem/>
       <Solution/>
       <Example/>
       <BussModal/>
       <Footer/>
               
  </>
       
  );
}
export default App