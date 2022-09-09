import React from 'react';
import style from './MainPage.module.css';
import {Text} from '../../../UI/Text';


export const MainPage = () => {
  return (
    <div className={style.container}>
      <Text As='h2'
        bold
        size={26}
        tsize={36}
      >Стартовая страница</Text>
      <Text As='h3'
        bold
        size={18}
        tsize={22}
      >Добро пожаловать!</Text>
      <Text As='p'
        size={12}
        tsize={18}
      >Выберите категорию</Text>
    </div>
  );
};
