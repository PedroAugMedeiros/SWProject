import React from 'react';
import GeneralFilter from './Components/GeneralFilter';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './Components/Table';
import './App.css';
import SWPlanets from './images/SWImage.png';

function App() {
  return (
    <article>
      <div className="SWPlanets">
        <img src={ SWPlanets } alt="SWPlanets" />
        <h1>Planets</h1>
      </div>
      <section className="App">
        <PlanetsProvider>
          <GeneralFilter />
          <Table />
        </PlanetsProvider>
      </section>
    </article>
  );
}

export default App;
