import React from 'react'
import MenuItem from './menu/MenuItem';
import TitleItem from './menu/TitleItem';

const LateralMenu = (props) => {
    const {user} = props;
  
    return (
    <div className='flex w-full fixed border-r border-black lg:flex-col lg:w-1/6 lg:relative md:flex-col md:w-20 md:relative bottom-0'>
        <TitleItem />
        <MenuItem icon='home' text='Home' />
        <MenuItem icon='search' text='Buscar' />
        <MenuItem icon='explore' text='Explorar' />
        <MenuItem icon='movie' text='Reels' />
        <MenuItem icon='chat' text='Mensajes' />
        <MenuItem icon='favorite' text='Notificaciones' />
        <MenuItem icon='add_circle' text='Crear' />
        
        <div className='lg:block md:block hidden absolute bottom-0 w-full mx-auto my-auto p-2 text-center text-white bg-blue-800'>H</div>
    </div>
  )
}

export default LateralMenu