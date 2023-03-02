import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded'

import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const NavBar = ({ activeAdditionalFeatures }) => {
  return (
    <header>
      <nav>
        <div className='logo-container'>
          <LocalDiningRoundedIcon className='logo' alt='JK Food Wheel Logo' />
          <span className='logo-text title-style-5'>JK Food Wheel</span>
        </div>
        {activeAdditionalFeatures ?
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/edit-food'>Food Form</NavLink></li>
            <li><NavLink to='/style-guide'>Style Guide</NavLink></li>
          </ul>
          :
            ''
        }
      </nav>
    </header>
  )
}

export default NavBar