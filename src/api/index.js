import axios from "axios";

export const getCountries = () => axios.get('https://api.covid19api.com/countries')

export const getDataByCountry = (country) => axios.get(`https://api.covid19api.com/dayone/country/${country}`)