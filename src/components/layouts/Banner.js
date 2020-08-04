import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <Fragment>
      <Fade top>
        <div className='jumbotron container mt-5'>
          <h1 className='display-4'>Covid-19</h1>
          <p className='lead'>
            Future has always been uncertain but the current scenario that has
            emerged due to COVID-19 has brought a fear of unpredictable changes
            surrounding all of us. It has not only caused an unprecedented
            health crisis but is also causing huge financial distress
          </p>
          <p className='lead'>
            <Link className='btn btn-primary btn-lg' to='/about' role='button'>
              Know More
            </Link>
          </p>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Banner;
