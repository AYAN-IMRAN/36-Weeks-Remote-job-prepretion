// Components/ThemeToggle.js
import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const bgClass = theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white';

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center transition-all duration-500 ${bgClass}`}>
      <h1 className="text-3xl font-bold mb-6">
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </h1>
      
      <button
        onClick={toggleTheme}
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-indigo-600 hover:to-purple-500 transition-all duration-200 ease-in-out"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
