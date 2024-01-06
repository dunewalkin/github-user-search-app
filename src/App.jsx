import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Info from './components/Info/Info';
import './assets/styles/global.scss';
import useLocalStorage from 'use-local-storage';

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [dataLoaded, setDataLoaded] = useState(false);

  const handleToggleTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  const handleSearchResult = (data) => {
    setUserInfo(data);
    setDataLoaded(true);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    console.log('Saved Theme:', savedTheme);

    if (savedTheme && savedTheme !== theme) {
      document.body.setAttribute('data-theme', JSON.parse(savedTheme));
      setTheme(JSON.parse(savedTheme));
    } else {
      document.body.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <main role="main" className='main-container' data-theme={theme}>
      <Header onToggleTheme={handleToggleTheme} />
      <Search onSearchResult={handleSearchResult} />
      <div className={`info-container ${dataLoaded ? 'visible' : ''}`}>
        {dataLoaded && <Info userInfo={userInfo} />}
      </div>
    </main>
  );
};

export default App;
