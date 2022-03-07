import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { NavLink } from 'react-router-dom';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Commencez par créer votre compte !
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your first name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='lastName'
            placeholder='Enter your Last name'
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>N° Siret</label>
          <input
            className='form-input form-input-number'
            type='number'
            name='siret'
            placeholder='Enter your siret number'
            value={values.siret}
            onChange={handleChange}
          />
          {errors.siret && <p>{errors.siret}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Vous avez déjà un compte? Conntez-vous <NavLink to="/login">here</NavLink>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
