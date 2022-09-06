import React from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useRef, useEffect, useState} from 'react';


export const FormComment = () => {
  const confirmRef = useRef(null);
  const [textState, setTextState] = useState('');

  const handleChange = e => {
    const target = e.target;
    if (target.value !== '') setTextState(target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    const target = e.target;
    if (target === confirmRef.current) {
      console.log(textState);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <form className={style.form}>
      <Text as='h3' size={14} tsize={18}>Имя авторизованного пользователя</Text>
      <textarea className={style.textarea} onChange={handleChange}></textarea>
      <button className={style.btn} ref={confirmRef}>Отправить</button>
    </form>
  );
};
