import React from 'react'

const ThemeButton = (props) => {
    const {icon, text, changeTheme, theme} = props;
  return (
    <div onClick={changeTheme} className={'flex p-2 cursor-pointer justify-start lg:my-1 md:my-1 my-auto lg:mx- md:mx-1 mx-auto rounded-lg transition duration-200 delay-200 hover:bg-gray-300/40 hover:duration-200 hover:delay-200 '}>
        <span className='material-icons text-3xl'>{theme.theme=='dark'?'dark_mode':'light_mode'}</span>
        <p className=' mx-1 text-sm my-auto'>Theme</p>
    </div>
  )
}
export default ThemeButton