import React from 'react'

const StorieItem = (props) => {

    const {img, userName, viewed} = props;
  return (
    <div className='p-1 w-16 mx-2 flex flex-col overflow-hidden'>
        <div className='w-16 h-16 rounded-full mx-auto'>
            <div className={viewed==='watched'?'p-1 border border-zinc-300 rounded-full':
                viewed==='closeFriends'?'p-1 bg-green-400 rounded-full':
                'p-1 bg-ig rounded-full'} >
                <img src={img} className='rounded-full'/>
            </div>
        </div>
        <p className='text-xs mx-auto my-1'>{userName}</p>
    </div>
  )
}

export default StorieItem