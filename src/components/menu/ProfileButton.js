import React from 'react'

const ProfileButton = (props) => {
    const {img} = props;
    return (
      <button className='flex p-2 lg:justify-start md:justify-center lg:my-1 md:my-1 my-auto lg:mx- md:mx-1 mx-auto rounded-lg transition duration-200 delay-200 hover:bg-gray-300/40 hover:duration-200 hover:delay-200'>
          <img src={img} className='w-8 h-8 rounded-full'/>
          <p className='lg:block hidden mx-1 text-lg my-auto'>Profile</p>
      </button>
    )
}

export default ProfileButton