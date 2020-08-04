import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { link, Link } from 'react-router-dom';
const Scholarships = () => {
  return (
    <Fragment>
      <div className='container'>
        <Fade top>
          <div class='container'>
            <h1 class='text-center mb-5'>Scholarships</h1>
            <div class='card-deck mb-3 text-center'>
              <div class='row'>
                <div class='card-group'>
                  <div class='col-sm-3  '>
                    <div class='card'>
                      <div class='card-body'>
                        <h5 class='card-title'>DHYNANSAGAR</h5>
                        <p class='card-text'>
                          <i
                            class='fa fa-book '
                            style={{ fontSize: '60px', color: 'red' }}
                          ></i>
                        </p>
                        <h6>Book Scholarship</h6>

                        <Link to='/dhyanasagar' class='btn btn-primary'>
                          Apply Here
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class='col-sm-3  '>
                    <div class='card'>
                      <div class='card-body'>
                        <h5 class='card-title'>SAMPURNA VIDYA</h5>
                        <p class='card-text'>
                          <i
                            class='fa fa-graduation-cap'
                            style={{ fontSize: '60px', color: 'red' }}
                          ></i>
                        </p>
                        <h6>Full Fledge Scholarship for one year</h6>
                        <Link to='/sampurna-vidya' class='btn btn-primary'>
                          Apply Here
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class='col-sm-3  '>
                    <div class='card'>
                      <div class='card-body'>
                        <h5 class='card-title'>FAAC & FC </h5>
                        <p class='card-text'>
                          <i
                            class='fa fa-bed'
                            style={{ fontSize: '60px', color: 'red' }}
                          ></i>
                        </p>
                        <h6>Food And Acomdation 10-12k Scholarships</h6>
                        <Link to='/faac-fc' class='btn btn-primary'>
                          Apply Here
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class='col-sm-3  '>
                    <div class='card'>
                      <div class='card-body'>
                        <h5 class='card-title'>
                          ePASS Other State Universities
                        </h5>
                        <p class='card-text'>
                          <i
                            class='fa fa-university'
                            style={{ fontSize: '60px', color: 'red' }}
                          ></i>
                        </p>
                        <h6>50k Scholarhips</h6>
                        <Link to='/epass' class='btn btn-primary'>
                          Apply Here
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default Scholarships;
