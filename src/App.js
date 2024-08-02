import { Route ,Routes, BrowserRouter} from 'react-router-dom';
import Main from './Page/Main';
import AboutMe from './Page/about/AboutMe';
import Tech from './Page/Tech';
import Nav from './Component/Nav';
import Experience from './Page/Experience';
import Archiving from './Page/Archiving';
import Project from './Page/Project';
import { useState,useEffect, useRef } from 'react';
function App() {
  const mainRef = useRef(null);
  const aboutMeRef = useRef(null);

  const mainRefClick = () => {
    mainRef.current.scrollIntoView({behavior: 'smooth'})
  }
  const meRefClick = () => {
    aboutMeRef.current.scrollIntoView({behavior: 'smooth'})
  }
  return (
  <div>
    <Nav onClick={meRefClick}/>
    <Main ref={mainRef}/>
    <AboutMe ref={aboutMeRef}/>
    <Tech />
    <Archiving />
    <Project />
    <Experience />
    
  </div>
  )
}

export default App;
