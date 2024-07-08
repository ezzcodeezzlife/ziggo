import React from 'react';
import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t, ready } = useTranslation();

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>{ready ? t('loading_message') : 'Loading translations, please wait...'}</h1>
    </div>
  );
};

export default Loading;
