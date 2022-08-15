import React from 'react';
import style from './RatingPanel.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';


export const RatingPanel = ({ups}) => {
  return (
    <div className={style.rating}>
      <button className={style.up} arial-label='Поднять рейтинг' />
      <Text As='p'
        size={12}
        tsize={16}
        color='grey99'
        fontWeight='bold'
        className={style.ups}>{ups}</Text>
      <button className={style.down} arial-label='Понизить рейтинг' />
    </div>
  );
};

RatingPanel.propTypes = {
  ups: PropTypes.number,
};
