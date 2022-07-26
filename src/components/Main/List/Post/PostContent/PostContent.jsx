import React from 'react';
import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
// import Modal from '../../../../../components/Modal';
import {Link, useParams} from 'react-router-dom';

export const PostContent = ({title, author, authorLink, linkPost,
  markdown, id}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const {page} = useParams();
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text
            bold
            size={18}
            tsize={24}
            className={style.linkPost}
            // href={linkPost}
            // onClick={() => {
            //   setIsModalOpen(true);
            // }}
          >
            {title}
          </Text>
        </Link>
      </Text>
      <Text As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href={authorLink}
      >
        {author}</Text>
      {/* {isModalOpen && <Modal id={id}
        closeModal = {() => {
          setIsModalOpen(false);
        }}
      />} */}
    </div>
  );
};

PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  linkPost: PropTypes.string,
  authorLink: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string,
};
