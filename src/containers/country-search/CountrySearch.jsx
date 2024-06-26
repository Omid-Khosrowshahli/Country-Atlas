import { useState, useEffect } from "react";
import Dropdown from "@components/Dropdown/Dropdown";
import { countryNamesListRequest } from "@services/api/apiCalls";
import styles from './CountrySearch.module.css';

const CountrySearch = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // fetching all country names to populate the dropdown with
    countryNamesListRequest().then((res) => {
      setCountries(res.data.map((item) => item.name));
    }).catch(
      (error) => alert('There was a problem getting data from the server. Please try again later!')
    );
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>Quick facts about Countries around the globe!</div>
        <div className={styles.search}>
          <Dropdown options={countries} />
        </div>
      </div>
    </div>
  );
};

export default CountrySearch;