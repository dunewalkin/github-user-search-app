import React, { useState } from 'react';
import './toggle.scss';
import darkLogo from '../../assets/images/icon-moon.svg';
import lightLogo from '../../assets/images/icon-sun.svg'
import useLocalStorage from 'use-local-storage';

const Toggle = ({ onToggle }) => {
   const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', false);

  const toggleMode = () => {
   setIsDarkMode(!isDarkMode);
   onToggle(!isDarkMode ? 'dark' : 'light');
 };

  return (
   <button className={`toggle ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleMode}>
   {isDarkMode ? 'LIGHT' : 'DARK'}
   <img src={isDarkMode ? lightLogo : darkLogo} alt="icon-moon" />
   </button>
  );
};

export default Toggle;


