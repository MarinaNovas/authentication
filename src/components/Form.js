import React from 'react';
import InputText from './InputText';

function Form(){
  return (
    <form id='authentication'>
      <InputText id = 'login' label='Login' placeholder='login' />
      <InputText id = 'password' label='Password' placeholder='password' />

      <button className="button-continue" type='submit'>Continue</button>
    </form>
  );
}

export default Form;
