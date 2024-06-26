import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { countryinfoRequest } from "@services/api/apiCalls";
import styles from './countryInfo.module.css';

import { PiCityBold } from "react-icons/pi";
import { PiMapTrifoldBold } from "react-icons/pi";
import { IoLanguageSharp } from "react-icons/io5";
import { GrCurrency } from "react-icons/gr";
import { RiTimeZoneLine } from "react-icons/ri";

const CountryInfo = () => {
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectedCountry = useSelector(
    (state) => state.selectedCountry.selectedCountry
  );

  useEffect(() => {
    if (selectedCountry) {
      setLoading(true);
      // fetching information regarding the selected country
      countryinfoRequest(selectedCountry.official).then((res) => {
        setCountryInfo(res.data[0]);
        setLoading(false);
      }).catch(
        (error) => alert("There was a problem getting data from the server. Please try again later!")
      ).finally(() => setLoading(false));
    };
  }, [selectedCountry]);

  useEffect(() => {
    // incrementing left padding line by line to create a diagonal style for the information list
    const listItems = document.querySelectorAll(`.${styles.infoList} li`);
    const increment = 10;

    listItems.forEach((li, index) => {
      li.style.paddingLeft = `${increment * (index * 4)}px`;
    });

    // automatically scrolling to the country information section as soon as the information is fetched.
    if (countryInfo) {
      const informationElement = document.getElementById("information");
      informationElement && informationElement.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }, [countryInfo]);

  return (
    countryInfo && (
      <div id="information" className={`${loading ? styles.infoLoading : ''}`}>
        <div className={styles.nameAndFlag}>
          <div className={styles.name}>
            {countryInfo.name.official}
          </div>
          <div className={styles.flag}>
            <img src={countryInfo.flags.png} />
          </div>
        </div>
        <div>
          <div className={styles.info}>
            <ul className={styles.infoList}>
              <li>
                <PiCityBold className={styles.icon} />
                <span>Capital{countryInfo.capital?.length > 1 ? 's' : ''}: </span>
                {countryInfo.capital.join(', ')}
              </li>
              <li>
                <PiMapTrifoldBold className={styles.icon} />
                <span>Continent{countryInfo.continents.length > 1 ? 's' : ''}: </span>
                {countryInfo.continents.join(', ')}
              </li>
              <li>
                <IoLanguageSharp className={styles.icon} />
                <span>Language{Object.keys(countryInfo.languages).length > 1 ? 's' : ''}: </span>
                {Object.values(countryInfo.languages).join(', ')}
              </li>
              <li>
                <GrCurrency className={styles.icon} />
                <span>Currency: </span>
                {Object.values(countryInfo.currencies)[0].name}
              </li>
              <li>
                <RiTimeZoneLine className={styles.icon} />
                <span>Time zone{countryInfo.timezones.length > 1 ? 's' : ''}: </span>
                {countryInfo.timezones.join(', ')}
              </li>
            </ul>
            {Object.keys(countryInfo.coatOfArms).length > 0 &&
              <div className={styles.coatOfArms}>
                <span>Coat of arms</span>
                <img src={countryInfo.coatOfArms.png} />
              </div>
            }
          </div>
        </div>
      </div>
    )
  );
};

export default CountryInfo;