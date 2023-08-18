import React, { createContext, useContext, useState } from 'react';
import en from './en.json'
import th from './th.json'
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const languageMap = {
    en: {
      translation: en,
      font: 'font-oswald',
    },
    th: {
      translation: th,
      font: 'font-kanit',
    },
  };

  const getTranslation = (key) => {
    return languageMap[currentLanguage].translation[key] || '';
  };

  const getCurrentFont = () => {
    return languageMap[currentLanguage].font;
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setLanguage, getTranslation, getCurrentFont }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
