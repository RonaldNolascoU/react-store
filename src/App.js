import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import  Navbar  from './components/Navbar';
import {DashboardLayout} from './components/layouts/DashboardLayout';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <DashboardLayout></DashboardLayout>
    </div>
    );
}


export default App;
