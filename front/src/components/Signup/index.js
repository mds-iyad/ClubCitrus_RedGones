import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import svg2 from '../../assets/images/img-2.svg'
import Nav from '../Nav';
import { height } from '@mui/system';
import backgroundImage from "../../assets/images/auth.jpeg"
import styled from 'styled-components';

const Login2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const BackImage = styled.div`
    /* background: linear-gradient(
      90deg,
      rgb(39, 176, 255) 0%,
      rgb(0, 232, 236) 100%
    );
    height: 100vh; */
  `;

  return (
    <>
      <BackImage>
        <Nav />
      
        <div>

          <div className='form-container'>
            <span className='close-btn'>×</span>
            <div className='form-content-left'>
              <img className='form-img' src={svg2} alt='spaceship' />
            </div>
            {!isSubmitted ? (
              <FormSignup submitForm={submitForm} />
            ) : (
              <FormSuccess />
            )}
          </div>
        </div>

      </BackImage>
    </>
  );
};

export default Login2;
