import React from 'react';
import style from './Comments.module.css';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import TimeLabel from '../../Main/List/Post/TimeLabel';

export const Comments = ({comments}) => {
  // console.log(comments);
  comments.forEach(el => {
    if (!Object.hasOwn(el, 'created')) {
      comments.pop();
    }
  }
  );

  return (
    <ul className={style.list}>
      {comments.map((comment) => (
        <li className={style.item} key={comment.id}>
          <Text as='h3' className={style.author} size={18} tsize={22}>
            {comment.author}: </Text>
          <Text as='p' className={style.comment} size={14} tsize={18}>
            {(comment.body !== '') ?
            `${comment.body} ` :
            `Нет комментариев.`}</Text>
          <TimeLabel date={comment.created} />
        </li>
      ))}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};
