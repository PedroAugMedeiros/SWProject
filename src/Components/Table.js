import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets,
    filteredPlanets: { filterByName, filterNumeric } } = useContext(PlanetsContext);
  let planetsFilter = planets
    .filter((planet) => planet.name
      .includes(filterByName.name));
  if (filterNumeric.length !== 0) {
    filterNumeric.forEach((filter) => {
      planetsFilter = planetsFilter.filter((item) => {
        if (filter.comparison === 'maior que') {
          return Number(item[filter.column]) > Number(filter.value);
        }
        if (filter.comparison === 'menor que') {
          return Number(item[filter.column]) < Number(filter.value);
        }
        return item[filter.column] === filter.value;
      });
    });
  }

  const bodyTable = () => {
    const keyValues = Object.keys(planets[0]).filter((key) => key !== 'residents');
    return (
      planetsFilter.map((element, index) => (
        <tr key={ element.name }>
          {
            keyValues.map((key) => (
              <td key={ `${index} ${element[key]}` }>{element[key]}</td>
            ))
          }
        </tr>
      ))
    );
  };

  const table = () => (
    (planets.length !== 0) && (
      <table>
        <thead>
          <tr>
            {
              Object.keys(planets[0])
                .filter((key) => key !== 'residents')
                .map((title, index) => (
                  <th key={ index }>{title}</th>
                ))
            }
          </tr>
        </thead>
        <tbody>
          { bodyTable() }
        </tbody>
      </table>
    ));
  return (table());
}

export default Table;
