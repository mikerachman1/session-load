import { useState, useEffect } from 'react';
import './App.css';
import findTops from './helpers/tops';
import findLoad from './helpers/load';
import findTotalLoad from './helpers/totalLoad';

function App() {
  const [climbs, setClimbs] = useState([]); 

  const project = {
    name: 'Trillium',
    grade: 9,
    attempts: [.4, .5, .7, .2]
  };

  const flash = {
    name: 'Open Gates',
    grade: 5,
    attempts: [1]
  };

  const coupleTries = {
    name: 'Full Grain',
    grade: 4,
    attempts: [.8, 1]
  };

  useEffect(() => {
    setClimbs([project, flash, coupleTries])
  }, []);

  return (
    <div className="App">
      <h1>Session Load Calculator</h1>
      <div className='climbs-container'>
        {climbs.map((climb) => (
          <div key={climbs.indexOf(climb)} className='climb'>
            <div className='section'>
              <h2>{climb.name}</h2>
              <h2>V{climb.grade}</h2>
            </div>
            <div className='section'>
              <h3>Attempts: {climb.attempts.length}</h3>
              <h3>Tops: {findTops(climb.attempts)}</h3>
            </div>
            <div className='section'>
              <h3>Attempt Load: 
                {findLoad(climb.attempts, climb.grade).map((load, index) => (
                  <span key={index} className='load'>{load}</span>
                ))}
              </h3>
            </div>
            {climb.attempts.length > 1 &&
              <div className='section'>
                <h3>Total Climb Load: {findLoad(climb.attempts, climb.grade).reduce((a, c) => a + c)}</h3>
              </div>
            }
          </div>
        ))}
      </div>
      <div className='section'>
        <h2>Total Session Load:</h2>
        <h2>{findTotalLoad(climbs)}</h2>
      </div>
    </div>
  )
}

export default App
