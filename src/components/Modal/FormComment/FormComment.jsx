import React, {useContext} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useRef, useEffect, useState} from 'react';
// import {commentContext} from '../../../context/commentContext';
import {authContext} from '../../../context/authContext';
import {useSelector, useDispatch} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';


export const FormComment = () => {
  const value = useSelector(state => state.comment.comment);
  const dispath = useDispatch();

  const {auth} = useContext(authContext);
  const textAreaRef = useRef(null);
  // const {setValue} = useContext(commentContext);
  const [isOpenButton, setIsOpenButton] = useState(true);
  const [isOpenComment, setIsOpenComment] = useState(false);

  const handleComment = e => {
    e.preventDefault();
    setIsOpenButton(false);
    setIsOpenComment(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = e => {
    dispath(updateComment(e.target.value));
  };

  // const handleChange = e => {
  //   const target = e.target;
  //   if (target.value !== '') setTextState(target.value);
  // };

  // const handleClick = e => {
  //   e.preventDefault();
  //   const target = e.target;
  //   if (target === confirmRef.current) {
  //     console.log(textState);
  //   }
  // };

  const handleFocus = e => {
    textAreaRef.current.focus();
  };

  useEffect(() => {
    // document.addEventListener('click', handleClick);
    document.addEventListener('click', handleFocus);
    return () => {
      // document.removeEventListener('click', handleClick);
      document.removeEventListener('click', handleFocus);
    };
  });

  return (
    <>
      {isOpenButton &&
        <button className={style.btn + ' ' + style.btnRight}
          onClick={handleComment}>Написать комментарий</button>}
      {isOpenComment &&
        <form className={style.form} onSubmit={handleSubmit}>
          <Text as='h3' size={14} tsize={18}>
            {auth.name}</Text>
          <textarea className={style.textarea} onChange={handleChange}
            value={value} ref={textAreaRef}></textarea>
          <button className={style.btn}>Отправить</button>
        </form>
      }
    </>
  );
};
