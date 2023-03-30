import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded'

import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const NavBar = ({ activeAdditionalFeatures }) => {
  return (
    <header>
      <nav>
        <div className='logo-container'>
          <Link to='/jk-meal-wheel-2023/' className='logo-container-link'>
            <LocalDiningRoundedIcon className='logo' alt='Meal Wheel Logo' />
            <span className='logo-text title-style-5'>Meal Wheel</span>
          </Link>
        </div>
        {activeAdditionalFeatures ?
          <ul>
            <li><NavLink to='/jk-meal-wheel-2023/'>Home</NavLink></li>
            <li><NavLink to='/jk-meal-wheel-2023/edit-food'>Food Form</NavLink></li>
            <li><NavLink to='/jk-meal-wheel-2023/style-guide'>Style Guide</NavLink></li>
          </ul>
          :
            ''
        }
      </nav>
    </header>
  )
}

export default NavBar