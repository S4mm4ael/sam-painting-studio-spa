import {Theme, useTheme} from 'remix-themes';
import {MoonIcon, SunIcon} from '../icons';

export function ThemeToggler() {
  const [theme, setTheme] = useTheme();
  return (
    <button onClick={() => setTheme(prev => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))}>
      {theme === Theme.DARK ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
