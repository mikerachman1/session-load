import { useState, useEffect } from 'react';
import '../styles/App.css';
import '../styles/Sessions.css'

const Climb = ({ name, grade, attempts }) => {
  
  return (
    <div className='climb'>
      <div className='section climb-head'>
        <FaEdit size='2rem' color='white'/>
        <h2>{name}</h2>
        <h2>V{grade}</h2>
      </div>
      <div className='section'>
        <h3>Attempts: {attempts.length}</h3>
        <h3>Tops: {findTops(attempts)}</h3>
      </div>
      <div className='section'>
        <h3>Completion Score per Attempt:</h3>
      </div>
      <div className='section attempts'>
        {attempts.map((attempt, index) => (
          <span key={index} className='load active'>{attempt}</span>
        ))}         
        <button className='add-attempt'>+</button>
      </div>
      <div className='section'>
        <h3>Load per Attempt:</h3>
      </div>
      <div className='section attempts'>
          {findLoad(attempts, grade).map((load, index) => (
            <span key={index} className='load'>{load}</span>
          ))}
      </div>
      <div className='section climb-tail'>
        <h2>Total Climb Load: {findLoad(attempts, grade).reduce((a, c) => a + c)}</h2>
      </div>
    </div>
  )
}

export default Climb