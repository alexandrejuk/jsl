import React from 'react'
import './index.css'
import { Logo } from '../../assets/'

const NarBar = () => (
  <nav className='nav-bar no-print'>
    <div className='logo'>
      <img className='logo-image' src={Logo} alt='jsl logo' title='logo' />
    </div>
    <ul className='nav-menu'>
      <li className='nav-menu-item nav-menu-item--checked'>
        <a className="link-custom" href='#logged/access/new'>
          Check-In
        </a>
      </li>
      <li className='nav-menu-item'>
        <a className="link-custom" href='#logged/access/doca'>
          Docas
        </a>
      </li>
      <li className='nav-menu-item'>
        <a className="link-custom" href='#logged/access/manager'>
          Gerenciar
        </a>
      </li>
    </ul>
  </nav>
) 
 
export default NarBar