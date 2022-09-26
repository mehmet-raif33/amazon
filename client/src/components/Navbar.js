import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='w-[100%] h-14 bg-slate-400 flex justify-between pt-3 px-4'>
        <div className='text-yellow-100 text-lg relative bottom-1 flex flex-row cursor-pointer'>
            <img src='https://img.icons8.com/doodle/48/000000/shopping-bag--v1.png' alt='sda' />
            <span className='relative top-[6px] left-1 text-slate-800 text-[23px]'>
                Raifify
            </span>
        </div>
        <div className='flex flex-row relative bottom-[6px] '>
            <NavLink to='/'>
                <img className='w-[45px] mr-2' src='https://img.icons8.com/doodle/48/000000/home--v1.png' alt='asd' />
            </NavLink>
            <NavLink to='/ayarlar'>
                <img className='w-[45px] mr-2' src='https://img.icons8.com/doodle/48/000000/vertical-settings-mixer.png' alt='asd' />
            </NavLink>
            <NavLink to='/sepet'>
                <img className='w-[45px] mr-2' src='https://img.icons8.com/doodle/48/000000/add-basket.png' alt='asd' />
            </NavLink>
            <NavLink to='/iletisim'>
                <img className='w-[45px] mr-3' src='https://img.icons8.com/doodle/48/000000/mail-contact.png' alt='asd' />
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar