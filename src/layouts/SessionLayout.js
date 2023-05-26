import React, { useEffect, useState } from 'react'
import LateralMenu from '../components/LateralMenu';
import { darkTheme, whiteTheme } from '../utils/theme';

const SessionLayout = (props) => {
    const [theme, setTheme] = useState(darkTheme);
 
    const {user} = props;
    const changeTheme = () =>{
      if(localStorage.theme=='dark'){
        localStorage.theme='white';
        setTheme(whiteTheme);

      }else{
        localStorage.theme='dark';
        setTheme(darkTheme);
      }
    }

    useEffect(()=>{
      var themeStorage = localStorage.getItem('theme');

      if(!themeStorage){
        localStorage.setItem('theme','dark');
        setTheme(darkTheme);
      }
      if(themeStorage=='white'){
        setTheme(whiteTheme);
      }else{
        setTheme(darkTheme);
      }
    })


  return (
    <div className={`w-full h-screen flex flex-col lg:flex-row md:flex-row ${theme.bg_color+theme.text_color}`}>
        <LateralMenu user={user} changeTheme={changeTheme} theme={theme}/>
        <div className='lg:w-3/6 w-full'>content</div>
        <div className=' lg:w-2/6 lg:block hidden'>details</div>
    </div>
  )
}

export default SessionLayout