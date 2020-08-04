import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light box-shadow '>
        <a className='navbar-brand' href='#'>
          FreeEduAid
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                <i
                  class='fa fa-home'
                  style={{ fontSize: '25px', color: 'red' }}
                ></i>{' '}
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                <i
                  class='fa fa-address-card'
                  style={{ fontSize: '25px', color: 'red' }}
                ></i>{' '}
                About-US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
