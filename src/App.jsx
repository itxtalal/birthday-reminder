import './App.css';
import React, { useState } from 'react';
import db from './data';

function App() {

  const [data, setData] = useState(db)

  const clearThis = (id) => {
    const filterData = data.filter(person => person.id !== id);
    setData(filterData)
  }

  const clearAll = () => {
    setData([]);
  }

  const resetData = () => {
    setData(db);
  }
  return (
    <>
    <div className="outer">
      <section className="card">
        <h2>Birthdays</h2>
        <article>
            {data.map((person) => {
              return (
              <div key = {person.id} className="grid-container">
                
                <div className="grid-item">
                  <img src={person.img} alt="Profile Pic" />
                </div>
                <div className="grid-item">
                  <h4>{person.name}</h4>
                  <p>{person.dob}</p>
                </div>
                <div className="grid-item">
                  <span onClick={()=>clearThis(person.id)} className='close'>X</span>
                </div>
              </div>
              )
            })}
          <button type="button" className='bottomBtn' onClick={clearAll}>Clear All</button>
          <button type="button" className='bottomBtn' onClick={resetData}>Reset Data</button>
        </article>
      </section>
    </div>
    </>
  );
}

export default App;
