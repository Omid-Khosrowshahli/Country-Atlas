import { useEffect, useRef, useState } from "react";
import styles from './Dropdown.module.css';
import { useDispatch } from "react-redux";
import { setSelectedCountry } from "@store/slices/selectedCountrySlice";

const Dropdown = ({ options }) => {
  const [searchedString, setSearchedString] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(options);
  const [isOpen, setIsOpen] = useState(false);
  const [additionalButtonClass, setAdditionalButtonClass] = useState(styles.neon);

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSelectCountry = (country) => {
    dispatch(setSelectedCountry(country));
    setIsOpen(false);
  };

  const areOptionsFew = filteredCountries.length < 7;

  useEffect(() => {
    // filter functionality for dropdown
    setFilteredCountries(
      options.filter((option) => option.common.toLowerCase().includes(searchedString.toLowerCase()))
    );
  }, [searchedString, options]);

  useEffect(() => {
    if (isOpen) {
      setAdditionalButtonClass(styles.exploring);

      // focus on filter input field when opening the dropdown
      inputRef.current.focus();

      // check if the click event has been triggered on or out of the dropdown. if clicked outside, dropdown gets closed.
      const handleClickOutside = (event) => {
        if (!event.target.closest(`.${styles.dropdown}`)) {
          setIsOpen(false);
        };
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    } else {
      setAdditionalButtonClass(styles.neon);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropdown}>
      <button className={`${styles.dropdownSelect} ${additionalButtonClass}`} onClick={() => setIsOpen((prev) => !prev)}>
        Explore
      </button>
      {isOpen && (
        <div className={`${styles.dropdownOptions} ${areOptionsFew ? styles.fewOptions : ''}`}>
          <input ref={inputRef} type="text" value={searchedString} onChange={(event) => setSearchedString(event.target.value)} />
          <ul>
            {filteredCountries.map((country) => (
              <li
                key={country.official}
                onClick={() => handleSelectCountry(country)}
              >
                {country.common}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;