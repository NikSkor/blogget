import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
// import notphoto from './img/notphoto.jpg';
// import formatDate from '../../../../utils/formatDate/formatDate';
import DeleteButton from './DeleteButton';
import AuthorPhoto from './AuthorPhoto';
import PostContent from './PostContent';
import RatingPanel from './RatingPanel';
import TimeLabel from './TimeLabel';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <AuthorPhoto title={title}/>
      {/* <img className={style.img} src={notphoto} alt={title} /> */}
      <PostContent title={title} author={author} />
      {/* <div className={style.content}>
        <h2 className={style.title}>
          <a className={style.linkPost} href="#post">
            {title}
          </a>
        </h2>
        <a className={style.linkAuthor} href="#author">{author}</a>
      </div> */}
      <RatingPanel ups={ups} />
      {/* <div className={style.rating}>
        <button className={style.up} arial-label='Поднять рейтинг' />
        <p className={style.ups}>{ups}</p>
        <button className={style.down} arial-label='Понизить рейтинг' />
      </div> */}
      <DeleteButton /> {/** Кнопка может быть использована
       * где то ещё, она даёт доп функцию Post,
       * а так не надо делать,
       * лучше вынести в отдельный компонент */}
      <TimeLabel date={date} />
      {/* <time className={style.date}
      dateTime={date}>{formatDate(date)}</time> */}
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
