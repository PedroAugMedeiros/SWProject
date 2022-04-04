import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import PlanetsApi from '../services/PlanetsAPI';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterNumeric: [],
};

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, filterPlanets] = useState(INITIAL_STATE);

  async function getPlanets() {
    const fetchedPlanets = await PlanetsApi();
    const planetsResults = fetchedPlanets.results;
    setPlanets(planetsResults);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  const value = { planets, filteredPlanets, filterPlanets };

  return (
    <PlanetsContext.Provider value={ value }>{ children }</PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
