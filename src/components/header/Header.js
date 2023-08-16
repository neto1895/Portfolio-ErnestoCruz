 import React from 'react'
 import Navbar from './Navbar';
 
 const header = () => {
   return (
    <header className='header'>
      <div className='title'>
        <h1>Ernesto Cruz Rosales</h1>
      </div>

      <div>
        <input type="checkbox" class="checkbox" id="checkbox"></input>
        <label for="checkbox" class="label">
          <i class="sun"><span>☀</span></i>
          <i class="moon"><span>☾</span></i>
          <div class="ball">
          </div>
        </label>
      </div>

      <div className='links'>
        <Navbar />
      </div>
    </header>
   )
 };
 
 export default header