import React, { useState } from 'react'
import { navLinks } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const shutMenu = () => setIsOpen(false);
  const NavItems = () => {
    return (
      <ul className='nav-ul'>
        { navLinks.map(({ id, href, name }) => (
          <li key={id} className='nav-li'>
            <a href={href} className="nav-li_a" onClick={() => { }}>{ name }</a>
          </li>
        )) }
      </ul>
    );
  };
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className="max-w-7xl mx-auto">
        <div onMouseLeave={shutMenu} className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Dia</a>
          <nav className={`falling-navbar ${isOpen ? 'translate-y-0' : '-translate-y-[50vh]'}`}>
            <NavItems />
          </nav>
          <button onMouseOver={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none flex' aria-label='Toggle Menu'>
            <img src={"assets/menu.svg"} alt='menu' className='w-6 h-6'/>
          </button>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Navbar