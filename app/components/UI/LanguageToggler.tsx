import {useState} from 'react';

export function LanguageToggler() {
  const [isPolish, setIsPolish] = useState(true);

  return (
    <button onClick={() => setIsPolish(prev => !prev)}>{isPolish ? <p>PL</p> : <p>EN</p>}</button>
  );
}
