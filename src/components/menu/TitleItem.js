import React from 'react'
import ig_dark from '../../img/ig_dark.png'
import ig_text_white from '../../img/instagram_white.png'

const TitleItem = () => {

  return (
    <button className='flex p-2 my-2 lg:justify-start justify-center'>
        <img src={ig_text_white} className='h-10 lg:block hidden' />
        <img src={ig_dark} className='w-8 h-8 lg:hidden md:block hidden'/>
    </button>
  )
}

export default TitleItem