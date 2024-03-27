import React from "react";
import {useTheme, Theme} from "remix-themes";
import {SunIcon, MoonIcon} from "../icons";

export function ThemeToggler() {
  const [theme, setTheme] = useTheme();
  return (
    <button onClick={() => setTheme(prev => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))}>
      {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
