const baseUrl = 'https://pixabay.com/api/';
export default {
  page: 1,
  perPage: 12,
  query: '',
  key: '13266916-cbb933a2194e370075cd13811',
  fetchPhoto() {
    const requestParams = `?q=${this.query}&page=${this.page}&per_page=${this.perPage}&pageSize=12&key=${this.key}`;

    return fetch(baseUrl + requestParams)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();

        return parsedResponse.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
