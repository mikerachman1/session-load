import { useState, useEffect } from 'react';
import '../styles/App.css';
import '../styles/Sessions.css'

const Session = ({ date, location, climbs }) => {
  
  return (
    <>
      <h2>{date}</h2>
      <h2>{location}</h2>
      <div className='climbs-container'>
        {climbs.map((climb, index) => (
          <Climb 
            key={index}
            name={climb.name}
            grade={climb.grade}
            attempts={climb.attempts}
          />
        ))}
      </div>
      <div className='section'>
        <h2>Total Session Load:</h2>
        <h2>{findTotalLoad(climbs)}</h2>
      </div>
    </>
  )
}

export default Session
