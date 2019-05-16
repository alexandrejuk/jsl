import React from 'react'
import './index.css'
import { Logo } from '../../assets/'

const NarBar = () => (
  <nav className='nav-bar'>
    <div className='logo'>
      <img className='logo-image' src={Logo} alt='jsl logo' title='logo' />
    </div>
    <ul className='nav-menu'>
      <li className='nav-menu-item nav-menu-item--checked'>Acesso</li>
      <li className='nav-menu-item'>Painel</li>
      <li className='nav-menu-item'>Serviços</li>
    </ul>
  </nav>
) 
 
export default NarBar