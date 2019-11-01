export default {
  async fetchCountries(query) {
    const baseUrl = "https://restcountries.eu/rest/v2/name";
    const searchCountries = `/${query}`;
    const res = await fetch(baseUrl + searchCountries);
    return await res.json();
  }
};
