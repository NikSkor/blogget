import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
// import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import {useRef} from 'react';
import {useEffect} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {FormComment} from './FormComment/FormComment';
import {Comments} from './Comments/Comments';
import {useSelector} from 'react-redux';
import PreLoader from '../../UI/PreLoader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const status = useSelector(state => state.commentsData.statusLoader);
  const error = useSelector(state => state.commentsData.error);
  const {post, comments} = useCommentsData(id);
  // const [titlePost, setTitlePost] = useState('');
  // const [authorPost, setAuthorPost] = useState('');
  // const [contentPost, setContentPost] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [comments, setComments] = useState([]);
  // let post = {};

  // console.log(commentsData);
  // if (status === 'loaded') {
  //   useEffect(() => {
  //     // console.log(status);
  //     if (!Object.hasOwn(commentsData, 'comments')) {
  //       // setIsLoading(false);
  //       return;
  //     } else {
  //       post = {...commentsData.post};
  //       setComments([...commentsData.comments]);
  //       setTitlePost(post.title);
  //       setAuthorPost(post.author);
  //       setContentPost(post.selftext);
  //       // setIsLoading(true);
  //     }
  //   }, []);
  //   // console.log(commentsData);
  // }

  // console.log(isLoading);
  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      // closeModal();
      navigate(`/category/${page}`);
    }
  };

  const handleClose = e => {
    // closeModal();
    navigate(`/category/${page}`);
  };

  const handleEscape = e => {
    if (e.key === 'Escape') navigate(`/category/${page}`);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      {/* {!isLoading &&
      <div className={style.modal}>
        <h2 className={style.title}>Загрузка</h2>
        <button className={style.close} onClick={handleClose}>
          <CloseIcon />
        </button>
      </div>
      } */}
      {status === 'loading' &&
        <div className={style.modal}>
          <div className={style.loadBlock}>
            <h2 className={style.title + ' ' + style.loadTitle}>Загрузка...</h2>
            <PreLoader />
          </div>
          <button className={style.close} onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
      }
      {status === 'error' &&
      <div className={style.modal}>
        <div className={style.loadBlock}>
          <h2 className={style.title + ' ' +
            style.loadTitle}>{`Ошибка! ${error}`}</h2>
        </div>
        <button className={style.close} onClick={handleClose}>
          <CloseIcon />
        </button>
      </div>
      }
      {status === 'loaded' &&
        <div className={style.modal}>
          <h2 className={style.title}>{post.title}</h2>
          <div className={style.content}>
            <Markdown options={{
              overrides: {
                a: {
                  props: {
                    target: '_blank',
                  }
                }
              }
            }}>
              {post.selftext}
            </Markdown>
          </div>
          <p className={style.author}>{post.author}</p>
          <FormComment />
          <Comments comments={comments} />
          <button className={style.close} onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
      }

    </div>,
    document.getElementById('modal-root')
  );
};

// Modal.propTypes = {
//   id: PropTypes.string,
//   closeModal: PropTypes.func,
// };
