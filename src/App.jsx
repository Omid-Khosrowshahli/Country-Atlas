import './App.css';
import CountryInfo from './containers/country-info/CountryInfo';
import CountrySearch from './containers/country-search/CountrySearch';
import MainLayout from './layouts/main-layout/MainLayout';

function App() {
  return (
    <MainLayout>
      <CountrySearch />
      <CountryInfo />
    </MainLayout>
  );
};

export default App;
