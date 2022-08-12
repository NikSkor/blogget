import React from 'react';
import style from './TimeLabel.module.css';
import formatDate from '../../../../../utils/formatDate/formatDate';
import PropTypes from 'prop-types';

export const TimeLabel = ({date}) => {
  console.log(style);
  return (
    <time className={style.date} dateTime={date}>{formatDate(date)}</time>
  );
};

TimeLabel.propTypes = {
  date: PropTypes.string,
};

