import React, { useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Message from './Message';
import Calculator from './Calculator';
import { HrefExemple } from './Components/HrefExemple';
import { ProjectsList } from './Projects/ProjectsList';
import { MOCK_PROJECTS } from './MokProject/MokeProject';


const App: React.FC = () => {



  return (
  <>
    <ProjectsList projects={MOCK_PROJECTS} />
  </>


  
  );
  };

export default App;
