import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-700 rounded"
    >
      Toggle Dark Mode
    </button>
  );
}
