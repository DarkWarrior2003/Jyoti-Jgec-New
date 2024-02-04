import React from 'react'
import { NavLink } from 'react-router-dom';
import "./contactstyle.css"

const Contact = () => {
  return (
    <div className='lg:p-16 pt-8'>
    
    <div className='bg-image'></div>
    <div className='contactstyle'>
      <div id="box1" className="box"></div>
      <div className="container">
        <h1 className='text-amber-600 text-2xl text-center'><u><strong>Let's Have a Talk</strong></u></h1>
        <div id="social" className="item">
          <h2><u>Social Contact</u></h2>
          <p id="socialpara" className="para">
            <ul>
              <li><a href="mailto:jgec.jyoti@gmail.com" className='text-sm'>Email id:jgec.jyoti@gmail.com </a></li> <br />
              <li><a href="https://www.facebook.com/jgecjyoti?mibextid=ZbWKwL" className='text-sm'> Facebook Id: Jyoti - Free
                      Night-Education
                      Centre</a></li><br />
              <li><a href="https://www.linkedin.com/company/jyotijgec/" className='text-sm'> LinkedIn :- JYOTI - A Ray of Hope</a></li>
              <br />
              <li><a href="https://instagram.com/jyotijgec?igshid=NzZlODBkYWE4Ng==" className='text-sm'>Instragram: jyotijgec</a></li>
            </ul>
          </p>
        </div>
        <div id="onsite" className="item">
          <h2><u>On Site</u></h2>
          <p id="onsitepara" className="para text-sm">
            <ul>
              <li>Place: Jalpaiguri Government Enginnering College</li>
              <li>Denguajhar</li>
              <li>Jalpaiguri</li>
              <li>W.B,735102</li>
              <li>
                <a href="https://maps.app.goo.gl/uJXHGdrAya8KwDo57" className="btn">Location</a>
              </li>
            </ul>
          </p>
        </div>
        <div id="online" className="item text-sm">
          <h2><u>Online Contact</u></h2>
          <p id="onlinepara" className="para">
            Your Suggestions are more valuable for us. Here you can share your thoughts with us.
          </p>
          <NavLink to="/form" className="btn">Forms Page</NavLink>
        </div>
        <div id="oursidepara" className="item">
          <h2><u>From Our Side</u></h2>
          <p id="oursidepara" className="para text-sm">
            <ul>
              <li>Thanks For sharing your thoughts with us</li>
              <li>Your thoughts and Suggestion will help us to build our organization strong.</li>
              <li>We are continuously trying to fulfill all the necessities of the students and hope we will achieve
                  it. </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;

