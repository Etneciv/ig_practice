import './App.css';
import { useState } from 'react';
import SessionLayout from './layouts/SessionLayout';
import LogginLayout from './layouts/LogginLayout';

function App() {

  const session={
    name:'Fernando López',
    userName:'nosoyetneciv',
    img:'https://landing.derco.com.pe/plataforma/leads_old/assets/pages/media/pages/profile_user.jpg',
  }

  return (
    session?<SessionLayout user={session}/>:<LogginLayout />
  );
}

export default App;
