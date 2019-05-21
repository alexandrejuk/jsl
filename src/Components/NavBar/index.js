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
        <a class="link-custom" href='#logged/access/new'>
          Acesso
        </a>
      </li>
      <li className='nav-menu-item'>
        <a class="link-custom" href='#logged/access/painel'>
          Painel
        </a>
      </li>
      <li className='nav-menu-item'>
        <a class="link-custom" href='#logged/access/services'>
          Serviços
        </a>
        </li>
    </ul>
  </nav>
) 
 
export default NarBar