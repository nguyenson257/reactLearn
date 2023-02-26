import './App.scss';
import { Login } from './login/Login';
import { Dashboard } from './dashboard/Dashboard';
import React, { useState } from "react";

function App() {
  const [curentForm, setCurentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurentForm(formName);
  }

  return (
    <div className="App">
      {
        curentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Dashboard onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
