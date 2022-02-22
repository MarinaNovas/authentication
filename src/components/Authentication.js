import React from 'react';
import Form from './Form';
import ButtonClose from './ButtonClose';


function Authentication({ showAuthentication }) {
  return (
    <div className='wrapper'>
      <div className={`authentication ${!showAuthentication ? 'hide' : ''}`}>
        <header class="authentication__header">
          <ButtonClose />
        </header>
        <Form />
      </div>
    </div>
  );
}

export default Authentication;