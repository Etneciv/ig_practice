import React from 'react'

const ItemDropdwon = (props) => {
    const {icon, text} = props;
  return (
    <div className={'flex p-2 cursor-pointer lg:justify-start md:justify-center  lg:my-1 md:my-1 my-auto lg:mx- md:mx-1 mx-auto rounded-lg transition duration-200 delay-200 hover:bg-gray-300/40 hover:duration-200 hover:delay-200 '}>
        <span className='material-icons text-xl'>{icon}</span>
        <p className='lg:block hidden mx-1 text-sm my-auto'>{text}</p>
    </div>
  )
}

export default ItemDropdwon