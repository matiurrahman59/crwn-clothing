import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUpStart } from '../../store/user/user-action';

// components
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';

// styles
import './SignUpForm.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('password do not match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log(error);
      }
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={onChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={onChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='Password'
          required
          onChange={onChange}
          name='password'
          autoComplete='off'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={onChange}
          name='confirmPassword'
          autoComplete='off'
          value={confirmPassword}
        />
        <Button type='submit'>Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
