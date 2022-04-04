const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function PlanetsApi() {
  const response = await fetch(URL);
  const json = await response.json();
  console.log(json);
  return json;
}

export default PlanetsApi;
