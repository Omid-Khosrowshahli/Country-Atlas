import axios from 'axios';
import {ALL_COUNTRIES_NAMES, COUNTRY_INFO} from './endpoints';

export const countryNamesListRequest = () => {
  const config = {
    method: "get",
    url: ALL_COUNTRIES_NAMES,
    headers: {
      "Content-Type": "application/json"
    },
  };
  return axios(config);
}

export const countryinfoRequest = (name) => {
  const config = {
    method: "get",
    url: COUNTRY_INFO + name,
    headers: {
      "Content-Type": "application/json"
    },
  };
  return axios(config);
}