import React from 'react';

const LanguageSelector = () => {
  return (
    <select className="language-selector">
      <option className="language-selector-item" default value="English">English</option>
      <option className="language-selector-item" value="Espanol">Espanol</option>
      <option className="language-selector-item" value="Arabic">Arabic</option>
    </select>
  );
};

export default LanguageSelector;
