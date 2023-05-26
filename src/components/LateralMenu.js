import React from 'react'
import MenuItem from './menu/MenuItem';
import TitleItem from './menu/TitleItem';
import ItemNotification from './menu/ItemNotification';
import ProfileButton from './menu/ProfileButton';
import Dropdown from './menu/Dropdown';

const LateralMenu = (props) => {
    const {user, changeTheme, theme} = props;
    
    return (
    <div className='flex w-full fixed border-r border-gray-200 lg:flex-col lg:w-1/6 lg:relative md:flex-col md:w-20 md:relative bottom-0'>
        <TitleItem theme={theme} />
        <MenuItem icon='home' text='Home' />
        <MenuItem icon='search' text='Search'/>
        <MenuItem icon='explore' text='Explore' style='lg:flex md:flex hidden'/>
        <MenuItem icon='movie' text='Reels' />
        
        <ItemNotification icon='chat' text='Messages' alerts={10}/>
        <ItemNotification icon='favorite' text='Notifications' alerts={3} style='lg:flex md:flex hidden' />
        
        <MenuItem icon='add_circle' text='Create' style='lg:flex md:flex hidden' />
        <ProfileButton img={user.img} />
        
        <Dropdown changeTheme={changeTheme} theme={theme}/>
    </div>
  )
}

export default LateralMenu