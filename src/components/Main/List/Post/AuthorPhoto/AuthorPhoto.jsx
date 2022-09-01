import React from 'react';
import style from './AuthorPhoto.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const AuthorPhoto = ({title, img}) => {
  return (
    ((img.includes('jpg')) ?
      <img className={style.img} src={img} alt={title} /> :
      <img className={style.img} src={notphoto} alt={title} />
    )
  );
};

AuthorPhoto.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
};
