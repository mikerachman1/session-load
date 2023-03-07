import { useState, useEffect } from 'react';
import '../styles/App.css';
import '../styles/Sessions.css'


function Sessions() {
  const [sessions, setSessions] = useState([]);

  const firstSesh = {
    date: '3-3-2023',
    location: 'Holy Boulders',
    climbs: [
      {
        name: 'Trillium',
        grade: 9,
        attempts: [.4, .5, .7, .2]
      },
      {
        name: 'Open Gates',
        grade: 5,
        attempts: [1]
      },
      {
        name: 'Full Grain',
        grade: 4,
        attempts: [.8, 1]
      }
    ],
    totalLoad: 28.4
  }

  const secondSesh = {
    date: '3-9-2023',
    location: 'Climbing Gym',
    climbs: [
      {
        name: 'Roof climb',
        grade: 7,
        attempts: [.2, .5, 1]
      },
      {
        name: 'Slab wall',
        grade: 5,
        attempts: [.2, .3, .6, .7, 1]
      }
    ],
    totalLoad: 25.9
  }

  useEffect(()=> {
    setSessions([firstSesh, secondSesh])
  }, []);
  
  return (
    <div className='sessions'>
      <h1>Session Load Calculator</h1>
      <button className='add-session'>Add Session</button>
      <div className='sessions-container'>
        {sessions.map((session, index) => (
          <div key={index} className='session'>
            <div className='section'>
              <h2>{session.date}</h2>
              <h2>{session.location}</h2>
              <h3>Load: {session.totalLoad}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sessions
