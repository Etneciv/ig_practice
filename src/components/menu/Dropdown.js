import React, { useState } from 'react'
import ItemDropdwon from './ItemDropdwon';


const Dropdown = () => {
    const [open, setOpen] = useState();
   
  return (
    <div className='lg:block md:block hidden absolute bottom-0 w-full mx-auto my-auto p-2 text-center'>
        {open?
            <div className='fixed bottom-16 w-1/6 rounded-lg bg-white drop-shadow-2xl'>
                <ItemDropdwon icon='settings' text='Settings' />
                <ItemDropdwon icon='history' text='Activity' />
                <ItemDropdwon icon='bookmark' text='Saved' />
                <ItemDropdwon icon='dark_mode' text='Theme' />
                <ItemDropdwon icon='report' text='Report a problem' />
                <hr className='bg-gray-200 h-2 w-full'/>
                <div className='w-full flex flex-col text-left p-2'>
                  <p className='my-1'>Change account</p>
                  <p className='my-1'>Logout</p>
                </div>
            </div>
        :null}
        <button onClick={()=> setOpen(!open)} className='w-full flex p-2 lg:justify-start md:justify-center rounded-lg rounded-lg transition duration-200 delay-200 hover:bg-gray-300/40 hover:duration-200 hover:delay-200'>
            <span className={open?'material-icons text-3xl duration-100':'material-icons text-3xl text-gray-800 duration-100'}>menu</span>
            <p className={open?'lg:block hidden mx-1 text-lg my-auto font-bold duration-100':'lg:block hidden mx-1 text-lg my-auto duration-100 '}>More</p>
        </button>
    </div>
  )
}

export default Dropdown