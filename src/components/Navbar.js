import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import '../css/app.css'

const Navbar = props => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        Chris
        <span style={{ color: 'red' }}>@</span>
        Machine
      </h1>
      <ul>
        <li>
          <Link to="/">
            <i class="fas fa-home" /> Home
          </Link>
        </li>
        <li>
          <Link to="/tags">
            <i class="fas fa-file-alt" /> Topics
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i class="fas fa-address-card" /> Hire Me
          </Link>
        </li>
        <li>
          <a href="https://github.com/christianchiarulli">
            <i className="fab fa-github" /> Github
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCS97tchJDq17Qms3cux8wcA">
            <i class="fab fa-youtube" /> Youtube
          </a>
        </li>
      </ul>
    </nav>
  )
}
Navbar.defaultProps = {
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  icon: PropTypes.string.isRequired
}

export default Navbar
