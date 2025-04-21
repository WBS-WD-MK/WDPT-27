import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);
  const lightTheme = 'corporate';
  const darkTheme = 'business';
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme:dark)').matches;

    const initialTheme = storedTheme || (prefersDarkScheme ? darkTheme : lightTheme);
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);
  const handleThemeChange = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === darkTheme ? lightTheme : darkTheme;
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      return newTheme;
    });
  };
  return (
    <label className='swap swap-rotate'>
      <input
        type='checkbox'
        className='theme-controller'
        checked={theme === lightTheme}
        onChange={handleThemeChange}
      />

      <Sun className='swap-off h-8 w-8 ' />
      <Moon className='swap-on h-8 w-8 ' />
    </label>
  );
};
export default ThemeSwitcher;
