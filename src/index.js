import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience'
import Leadership from './sections/Leadership';
import Projects from './sections/Projects';
import Contact from './sections/Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutMe />
    <Experience />
    <Leadership />
    <Projects />
    <Contact />
  </React.StrictMode>
);

