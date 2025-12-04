
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import { useAuth } from '../../providers/AuthProvider'

function navbar() {
  // get the reference of navigate function
  const navigate = useNavigate()

  // get setUser from AuthContext
  const { setUser } = useAuth()

  const onLogout = () => {
    // remove all the cached items
    localStorage.removeItem('token')
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')

    // set the user to null
    setUser(null)

    // redirect to Login page
    navigate('/login')
  }

  return (
    <nav
      className='navbar navbar-expand-lg bg-primary'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <Link
          className='navbar-brand'
          to='/home/properties'
        >
          <h3 className="mb-5 text-primary fw-bold">Odyssey</h3>
        </Link>

        <div
          className='collapse navbar-collapse'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/LandingPage'
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/add-property'
              >
               Browse Packages
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/cart'
              >
                Cart
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/bookings'
              >
                Bookings
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/about-us'
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/contact-us'
              >
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <button
                onClick={onLogout}
                className='nav-link'
                aria-current='page'
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar
