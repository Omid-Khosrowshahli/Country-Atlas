const BASE_URL = import.meta.env.VITE_BASE_URL;

export const ALL_COUNTRIES_NAMES = BASE_URL + "all?fields=name";
export const COUNTRY_INFO = BASE_URL + "name/";