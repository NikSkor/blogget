import React from 'react';
import style from './RatingPanel.module.css';
import PropTypes from 'prop-types';

export const RatingPanel = ({ups}) => {
  console.log(style);
  return (
    <div className={style.rating}>
      <button className={style.up} arial-label='Поднять рейтинг' />
      <p className={style.ups}>{ups}</p>
      <button className={style.down} arial-label='Понизить рейтинг' />
    </div>
  );
};

RatingPanel.propTypes = {
  ups: PropTypes.number,
};
