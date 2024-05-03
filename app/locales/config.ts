/* eslint-disable import/no-named-as-default-member */
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import textEn from './translation/en.json';

console.log(JSON.stringify(textEn));

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: JSON.stringify(textEn),
      },
    },
  });
