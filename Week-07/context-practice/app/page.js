"use client"
import React from 'react';
import { ThemeProvider } from '../Context/ThemeContext';
import ThemeToggle from '../Components/ThemeToggle';

const App = () => (
  <ThemeProvider>
    <ThemeToggle />
  </ThemeProvider>
);

export default App;

