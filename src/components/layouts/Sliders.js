import React, { Fragment } from 'react';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
const Sliders = () => {
  return (
    <Fragment>
      <div className='container mt-5'>
        <div className='row'>
          <Zoom clear>
            <div class='container'>
              <div class='card text-center '>
                <div class='card-header'>
                  COVID-19 Scholarship(COVID -19 AID = upto 10k Scholarship)
                </div>
                <div class='card-body'>
                  {/* <h5 class='card-title'>Special title treatment</h5> */}
                  <p class='card-text'>
                    Any candidate who registers in for the scholarships in our
                    administration will be given a special one-time scholarship
                    at entry level under “Covid-19 Scholarship”. we understands
                    the tension and confusion through which the parents and
                    their wards are going through with respect to their careers.
                    We recognize the responsibility and in order to reduce the
                    uncertainty about the career of students, we have launched a
                    special scholarships for all aspirants of and above class
                    Vth of KARNATAKA State.
                  </p>
                  {/* <a href='#' class='btn btn-primary'>
                Go somewhere
              </a> */}
                </div>
                <div class='card-footer text-muted'>2 days ago</div>
              </div>
            </div>
          </Zoom>
          <Slide bottom>
            <div class='container'>
              <div class='card text-center mt-4 mb-5'>
                <div class='card-header'>ABOUT US</div>
                <div class='card-body'>
                  {/* <h5 class='card-title'>Special title treatment</h5> */}
                  <p class='card-text'>
                    EDUAID scho is a registered charity that was established in
                    order to tackle the problems of poor and underprivileged
                    students. From its humble origins it has grown rapidly, and
                    now its projects cover a wide range of activities and many
                    programmes. The institution is committed to the welfare of
                    Students from the most underprivileged strata of society
                    without distinction of caste, creed or color. Its emphasis
                    is on assisting the children and youth who are the citizens
                    of tomorrow and the disabled who need a support to help
                    them Financially.
                  </p>
                  <a href='#' class='btn btn-primary'>
                    Know More
                  </a>
                </div>
                <div class='card-footer text-muted'>2 days ago</div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </Fragment>
  );
};

export default Sliders;
