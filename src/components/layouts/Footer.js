import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <Fragment>
      <section id='footer'>
        <div class='container'>
          <div class='row text-center text-xs-center text-sm-left text-md-left'>
            <div class='col-xs-12 col-sm-4 col-md-4'>
              <h5>Quick links</h5>
              <ul class='list-unstyled quick-links'>
                <li>
                  <a href='#!'>
                    <i class='fa fa-angle-double-right'></i>Home
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <i class='fa fa-angle-double-right'></i>Scholarships
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <i class='fa fa-angle-double-right'></i>About-US
                  </a>
                </li>
              </ul>
            </div>
            <div class='col-xs-12 col-sm-4 col-md-4'>
              <h5>Scholarships</h5>
              <ul class='list-unstyled quick-links'>
                <li>
                  <Link to='/dhyanasagar'>
                    <i class='fa fa-angle-double-right'></i>DHYNANSAGAR
                  </Link>
                </li>
                <li>
                  <Link to='/sampurna-vidya'>
                    <i class='fa fa-angle-double-right'></i>SAMPURNA VIDYA
                  </Link>
                </li>
                <li>
                  <Link to='/faac-fc'>
                    <i class='fa fa-angle-double-right'></i>FAAC & FC
                  </Link>
                </li>
                <li>
                  <Link to='/epass'>
                    <i class='fa fa-angle-double-right'></i>ePASS Other State
                    Universities
                  </Link>
                </li>
              </ul>
            </div>
            <div class='col-xs-12 col-sm-4 col-md-4'>
              <h5>Contact-details</h5>

              {/* <hr
                class='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
                style={{ width: '60px' }}
              /> */}
              <p style={{ color: 'white' }}>
                <i class='fa fa-id-card'></i>
                {''} New York, NY 10012, US
              </p>
              <p style={{ color: 'white' }}>
                <i class='fa fa-envelope'></i>
                {''} info@example.com
              </p>
              <p style={{ color: 'white' }}>
                <i class='fa fa-phone-square'></i>
                {''} + 01 234 567 88
              </p>
              <p style={{ color: 'white' }}>
                <i class='fa fa-phone-square'></i>
                {''} + 01 234 567 89
              </p>
            </div>
          </div>
          <div class='row'>
            <div class='col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5'>
              <ul class='list-unstyled list-inline social text-center'>
                <li class='list-inline-item'>
                  <a href='https://www.fiverr.com/share/qb8D02'>
                    <i class='fa fa-facebook'></i>
                  </a>
                </li>
                <li class='list-inline-item'>
                  <a href='https://www.fiverr.com/share/qb8D02'>
                    <i class='fa fa-twitter'></i>
                  </a>
                </li>
                <li class='list-inline-item'>
                  <a href='https://www.fiverr.com/share/qb8D02'>
                    <i class='fa fa-instagram'></i>
                  </a>
                </li>
                <li class='list-inline-item'>
                  <a href='https://www.fiverr.com/share/qb8D02'>
                    <i class='fa fa-google-plus'></i>
                  </a>
                </li>
                <li class='list-inline-item'>
                  <a href='https://www.fiverr.com/share/qb8D02' target='_blank'>
                    <i class='fa fa-envelope'></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
          </div>
          <div class='row'>
            <div class='col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white'>
              <p>SidCoder Professional UI / UX FullStack Developer</p>
              <p class='h6'>© All right Reversed.</p>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
