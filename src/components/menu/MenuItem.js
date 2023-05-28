import React from 'react'

const MenuItem = (props) => {
    const {icon, text, style} = props;
  return (
    <button className={'flex p-2 lg:justify-start md:justify-center lg:my-1 md:my-1 my-auto lg:mx- md:mx-1 mx-auto rounded-lg transition duration-200 delay-200 hover:bg-gray-300/40 hover:duration-200 hover:delay-200 '+style}>
        <span className='material-icons text-3xl'>{icon}</span>
        <p className='lg:block hidden mx-1 text-md my-auto'>{text}</p>
    </button>
  )
}

export default MenuItem