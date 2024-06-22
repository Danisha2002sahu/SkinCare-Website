import React from 'react';
import './LoginPage.css'
import { ReactComponent as MaleIcon } from './male.svg';
import { ReactComponent as FemaleIcon } from './female.svg';

function TriggerLoginForm(){
  const loginform = document.querySelector('.login-container');
  const starterQuery = document.querySelector('.starterQuery');
  loginform.style.display = 'block';
  starterQuery.style.display = 'none';
}



function StarterQuery(){
  return(
    <div className="starterQuery">
      <h1>What's Your Gender</h1>
      <div className="GenderButtons">
      <button type="button" onClick={TriggerLoginForm}>
        <MaleIcon className="genderimage"/>
      </button>
      <button type="button" onClick={TriggerLoginForm}>
      <FemaleIcon className="genderimage"/>
      </button>
      </div>
    </div>
   
  )
}

function LoginPage() {
  return (
    <div className="login-container" style={{display: 'none'}}>
      <h2>Login Page</h2>
      <form>
        <div>
          <label>Username:
            <input type="text" name="username"></input>
            </label>
        </div>

        <div>
          <label>
            Password:
            <input type="password" name="password"/>
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}


// As we are supposed to show all the components of loginpage.js as a whole page on the website
// Insted of exporting and importing all the components indivisually we will wrap it in a parent component and export the parent component
// As wholePage.

function TotalLoginPage(){
  return(
    <div className='totalloginpage'>
    <StarterQuery/>
    <LoginPage/>
    </div>
  )
}
export default TotalLoginPage;