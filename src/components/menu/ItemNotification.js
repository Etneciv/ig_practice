import React from 'react'

const ItemNotification = (props) => {
    const {icon, text, alerts, style} = props;
    return (
      <button className={'flex  p-2 lg:justify-start md:justify-center lg:my-1 md:my-1 my-auto lg:mx- md:mx-1 mx-auto rounded-lg transition duration-200 delay-200 hover:bg-gray-300/40 hover:duration-200 hover:delay-200 '+style}>
          <span className='material-icons text-3xl'>{icon}</span>
          
          {alerts>1?<span class="absolute flex ml-5 h-4 w-4 text-center justify-center">
            <span class="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-xs text-white justify-center">{alerts>9?'9+':alerts}</span>
          </span>:null}
          
          <p className='lg:block hidden mx-1 text-md my-auto'>{text}</p>
      </button>
    )
}

export default ItemNotification