import React from 'react';
import style from './ErrorPage.module.css';
import {Text} from '../../../UI/Text';

export const ErrorPage = () => {
  return (
    <div className={style.container}>
      <Text As='h2'
        bold
        size={26}
        tsize={36}
        color='orange'
      >404</Text>
    </div>
  );
};
