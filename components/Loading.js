import React from 'react';
import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>{t('loading_message')}</h1>
    </div>
  );
};

export default Loading;
