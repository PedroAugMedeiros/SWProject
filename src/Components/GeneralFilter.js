import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function GeneralFilter() {
  const { filterPlanets } = useContext(PlanetsContext);
  const { filteredPlanets: { filterNumeric } } = useContext(PlanetsContext);

  let coluns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const compares = ['bigger then', 'less than', 'equal to'];
  const [column, setColuns] = useState(coluns[0]);
  const [comparison, setComparison] = useState('maior que');
  if (filterNumeric !== 0) {
    filterNumeric.forEach((filter) => {
      coluns = coluns.filter((columnItem) => columnItem !== filter.column);
    });
  }
  const [value, setValue] = useState(0);
  return (
    <section className="inputsSection">
      <label htmlFor="filter-name">
        <input
          className="inputs"
          type="text"
          name="filterByName"
          data-testid="name-filter"
          onChange={ ({ target }) => {
            filterPlanets((state) => ({
              ...state,
              [target.name]: { name: target.value },
            }));
          } }
        />
      </label>
      <div>

        <label htmlFor="column-filter" className="m-2">
          <select
            className="inputs"
            name="column"
            data-testid="column-filter"
            onChange={ ({ target }) => { setColuns(target.value); } }
            value={ column }
          >
            {
              coluns.map((option, index) => (
                <option key={ index } value={ option }>{option}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            className="inputs"
            data-testid="comparison-filter"
            onChange={ ({ target }) => { setComparison(target.value); } }
            value={ comparison }
          >
            {
              compares.map((option, index) => (
                <option key={ index } value={ option }>{option}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            className="inputs"
            type="number"
            name="value"
            id="value-filter"
            data-testid="value-filter"
            onChange={ ({ target }) => { setValue(target.value); } }
            value={ value }
          />
        </label>
        <button
          className="inputs"
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            filterPlanets((state) => ({
              ...state,
              filterNumeric: [...state.filterNumeric, {
                column,
                comparison,
                value,
              }],
            }));
            setColuns(coluns.filter((item) => item !== column)[0]);
          } }
        >
          Add Filter Numeric
        </button>
      </div>
    </section>
  );
}

export default GeneralFilter;
