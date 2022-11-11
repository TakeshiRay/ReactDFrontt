import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>

  )
}

export default Navbar
