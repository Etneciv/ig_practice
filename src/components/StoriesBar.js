import React from 'react'
import StorieItem from './stories/StorieItem'

const StoriesBar = () => {

    const profile = 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg'
  return (
    <div className='flex  overflow-x-scroll'>

        <div className='lg:block md:block hidden flex flex-col bg-red-200'>
            <button className='flex justify-center bg-white border border-zinc-300 rounded-full h-7 w-7 '>
                <span className='material-icons text-md my-auto'>navigate_before</span>
            </button>
        </div>

        <div className='flex '>
            <StorieItem img={profile} userName={'nombre_usuario'} viewed={'watched'}/>
            <StorieItem img={profile} userName={'nombre_usuario'} viewed={'watched'}/>
            <StorieItem img={profile} userName={'nombre_usuario'} viewed={'watched'}/>
            <StorieItem img={profile} userName={'nombre_usuario'} viewed={'watched'}/>
            <StorieItem img={profile} userName={'nombre_usuario'} viewed={'watched'}/>
            <StorieItem img={profile} userName={'nombre_usuario'} viewed={'watched'}/>
            <StorieItem img={profile} userName={'nombre_usuario'} viewed={'watched'}/>
            <StorieItem img={profile} userName={'nombre_usuario'} viewed={'watched'}/>
            <StorieItem img={profile} userName={'nombre_usuario'} viewed={'watched'}/>
            <StorieItem img={profile} userName={'nombre_usuario'} viewed={'watched'}/>
        </div>
        <div className='lg:block md:block hidden flex flex-col bg-red-200 '>
            <button className='flex justify-center bg-white border border-zinc-300 rounded-full h-7 w-7'>
                <span className='material-icons text-md my-auto'>navigate_next</span>
            </button>
        </div>
    </div>
  )
}

export default StoriesBar