import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    window.location.search = `?lng=${lng}`;
  };

  return (
    <div>
      <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="it">Italian</option>
        <option value="nl">Dutch</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="pl">Polish</option>
        <option value="sv">Swedish</option>
        <option value="da">Danish</option>
        <option value="fi">Finnish</option>
        <option value="no">Norwegian</option>
        <option value="cs">Czech</option>
        <option value="hu">Hungarian</option>
        <option value="ro">Romanian</option>
        <option value="bg">Bulgarian</option>
        <option value="el">Greek</option>
        <option value="tr">Turkish</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
