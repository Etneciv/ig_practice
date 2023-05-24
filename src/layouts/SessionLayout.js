import React from 'react'
import LateralMenu from '../components/LateralMenu';

const SessionLayout = (props) => {

    const {user} = props;
    
  return (
    <div className='w-full h-screen flex flex-col lg:flex-row md:flex-row'>
        <LateralMenu user={user}/>
        <div className='bg-blue-200 lg:w-3/6 w-full'>content</div>
        <div className='bg-green-200 lg:w-2/6 lg:block hidden'>details</div>
    </div>
  )
}

export default SessionLayout