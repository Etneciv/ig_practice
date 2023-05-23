import './App.css';
import { useState } from 'react';
import SessionLayout from './layouts/SessionLayout';
import LogginLayout from './layouts/LogginLayout';

function App() {

  const session={
    name:'Fernando López',
    userName:'nosoyetneciv',
    img:'',
  }

  return (
    session?<SessionLayout user={session}/>:<LogginLayout />
  );
}

export default App;
