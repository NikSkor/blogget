import React, {useState} from 'react';
import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import Modal from '../../../../../components/Modal';

export const PostContent = ({title, author, authorLink, linkPost,
  markdown}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          // href={linkPost}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {title}
        </Text>
      </Text>
      <Text As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href={authorLink}
      >
        {author}</Text>
      {isModalOpen && <Modal title={title} author={author}
        markdown={markdown}
        closeModal = {() => {
          setIsModalOpen(false);
        }}
      />}
    </div>
  );
};

PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  linkPost: PropTypes.string,
  authorLink: PropTypes.string,
  markdown: PropTypes.string,
};
