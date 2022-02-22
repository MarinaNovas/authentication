import React from "react";
import {useContext} from 'react';
import {languageContext} from '../context/context'

function Dashboard(){
  const language = useContext(languageContext);
  console.log(language);
  return(
    <div className="dashboard"></div>
  );
}

export default Dashboard;