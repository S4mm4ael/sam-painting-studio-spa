import {Theme, useTheme} from 'remix-themes';

export function BurgerBars() {
  const [themeX] = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={themeX === Theme.DARK ? '#fff' : '#000'}
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
    </svg>
  );
}
