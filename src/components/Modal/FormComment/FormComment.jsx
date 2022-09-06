import React from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useRef, useEffect, useState} from 'react';


export const FormComment = () => {
  const confirmRef = useRef(null);
  const textAreaRef = useRef(null);
  const [textState, setTextState] = useState('');
  const [isOpenButton, setIsOpenButton] = useState(true);
  const [isOpenComment, setIsOpenComment] = useState(false);

  const handleComment = e => {
    e.preventDefault();
    setIsOpenButton(false);
    setIsOpenComment(true);
  };

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

  const handleFocus = e => {
    textAreaRef.current.focus();
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('click', handleFocus);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('click', handleFocus);
    };
  });

  return (
    <>
      {isOpenButton &&
        <button className={style.btn + ' ' + style.btnRight}
          onClick={handleComment}>Написать комментарий</button>}
      {isOpenComment &&
        <form className={style.form}>
          <Text as='h3' size={14} tsize={18}>
            Имя авторизованного пользователя</Text>
          <textarea className={style.textarea} onChange={handleChange}
            ref={textAreaRef}></textarea>
          <button className={style.btn} ref={confirmRef}>Отправить</button>
        </form>
      }
    </>
  );
};
