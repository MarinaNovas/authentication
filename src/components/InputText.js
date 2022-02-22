import React from "react";
import {useState} from 'react';

function InputText({id,label, placeholder}){
  const [value, setValue] = useState('');
  return (
    <div className="input" key={id}>
      <label className="input__label" for={id}>{label}</label>
      <input className="input__text" id={id} type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder={`Enter ${placeholder} ...`}/>
    </div>
  );
}

export default InputText;