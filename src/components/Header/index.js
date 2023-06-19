import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header">
    <ul className="navMenu">
      <li>
        <Link to="/" className="navLink">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="navLink">
          About
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
