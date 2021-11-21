import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLng = ['ru'];

let language = window.navigator ? window.navigator.language : 'ru';
language = language.substr(0, 2).toLowerCase();

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },
    debug: false,
    lng: language,
    fallbackLng,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
