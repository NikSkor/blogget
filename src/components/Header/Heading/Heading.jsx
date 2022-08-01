/* eslint-disable react/prop-types */
import React from 'react';
import style from './Heading.module.css';

export const Heading = ({text}) => {
  return (
    <h1 className={style.heading}>{text}</h1>
  );
};
