import React, { Fragment, useState } from 'react';

const Hostel = () => {
  const [formData, setFormaData] = useState({
    fullname: '',
    email: '',
    paddress: '',
    district: '',
    city: '',
    zipcode: '',
    collegeName: '',
    university: '',
    collegeAddress: '',
    bookName: '',
    bookAuthor: '',
    bookEdition: '',
  });

  const {
    fullname,
    email,
    paddress,
    district,
    city,
    zipcode,
    collegeName,
    university,
    collegeAddress,
    bookName,
    bookAuthor,
    bookEdition,
  } = formData;

  const onChange = (e) =>
    setFormaData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Fragment>
      <div className='container mt-5 '>
        <div className='card '>
          <div className='card-header text-center'>
            Scholarship ---- DHYNANSAGAR(Book Scholarship)
          </div>
          <div className='card-body'>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    Email-ID
                  </span>
                </div>
                <input
                  type='text'
                  name='fullname'
                  value={fullname}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  placeholder='Enter Your FullName'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    Email-ID
                  </span>
                </div>
                <input
                  type='text'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  placeholder='Enter Your Email-ID'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    Permanent Address
                  </span>
                </div>
                <input
                  type='text'
                  name='paddress'
                  value={paddress}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  placeholder='Enter Your Permanent Address'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>{' '}
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    District
                  </span>
                </div>
                <input
                  type='text'
                  name='district'
                  value={district}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  placeholder='Enter Your District'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>{' '}
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    City
                  </span>
                </div>
                <input
                  type='text'
                  name='city'
                  value={city}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  placeholder='Enter Your City'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>{' '}
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    Zipcode
                  </span>
                </div>
                <input
                  type='text'
                  name='zipcode'
                  value={zipcode}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  placeholder='Enter Zipcode'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>{' '}
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    @
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Your Date-Of-Birth'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>{' '}
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    College-Name
                  </span>
                </div>
                <input
                  type='text'
                  name='collegeName'
                  value={collegeName}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  placeholder='Enter Your College-Name'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    College-University
                  </span>
                </div>
                <input
                  type='text'
                  name='university'
                  value={university}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  placeholder='Enter Your College-University'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Upload College-ID</span>
                </div>
                <div className='custom-file'>
                  <input
                    type='file'
                    className='custom-file-input'
                    id='inputGroupFile01'
                  />
                  <label className='custom-file-label' for='inputGroupFile01'>
                    Choose file
                  </label>
                </div>
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    College-Addresss
                  </span>
                </div>
                <input
                  type='text'
                  name='collegeAddress'
                  value={collegeAddress}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  placeholder='Enter Your College-Addresss'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    Upload Admission-Letter
                  </span>
                </div>
                <div className='custom-file'>
                  <input
                    type='file'
                    className='custom-file-input'
                    id='inputGroupFile01'
                  />
                  <label className='custom-file-label' for='inputGroupFile01'>
                    Choose file
                  </label>
                </div>
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    Upload Previous-year marks card
                  </span>
                </div>
                <div className='custom-file'>
                  <input
                    type='file'
                    className='custom-file-input'
                    id='inputGroupFile01'
                  />
                  <label className='custom-file-label' for='inputGroupFile01'>
                    Choose file
                  </label>
                </div>
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    Book-Name
                  </span>
                </div>
                <input
                  type='text'
                  name='bookName'
                  value={bookName}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  placeholder='Enter Book-Name'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    Book-Author
                  </span>
                </div>
                <input
                  type='text'
                  name='bookAuthor'
                  value={bookAuthor}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  placeholder='Enter Your Book-Author'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon1'>
                    Book-Edition
                  </span>
                </div>
                <input
                  type='text'
                  name='bookEdition'
                  value={bookEdition}
                  onChange={(e) => onChange(e)}
                  className='form-control'
                  placeholder='Enter Your Book-Edition'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Upload Adhar-card</span>
                </div>
                <div className='custom-file'>
                  <input
                    type='file'
                    className='custom-file-input'
                    id='inputGroupFile01'
                  />
                  <label className='custom-file-label' for='inputGroupFile01'>
                    Choose file
                  </label>
                </div>
              </div>
              <button
                type='submit'
                className='btn btn-outline-secondary mx-auto d-block'
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hostel;
