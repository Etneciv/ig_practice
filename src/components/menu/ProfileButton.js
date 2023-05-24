import React from 'react'

const ProfileButton = (props) => {
    const {img, text} = props;
    return (
      <button className='flex p-2 lg:justify-start md:justify-center border-b lg:my-1 md:my-1 my-auto lg:mx- md:mx-1 mx-auto'>
          <span className='material-icons text-3xl'>{img}</span>
          <p className='lg:block hidden mx-1 text-lg my-auto'>{text}</p>
      </button>
    )
}

export default ProfileButton