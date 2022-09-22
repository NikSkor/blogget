import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useParams} from 'react-router-dom';
// import {useBest} from '../../../hooks/useBest';
import {postsDataRequestAsync}
  from '../../../store/postsDataReducer/action';
import style from './List.module.css';
import Post from './Post';
import {postsDataSlice} from '../../../store/postsDataReducer/postsDataSlice';
import {generateRandomId}
  from '../../../utils/generateRandomId/generateRandomId';
import {clearSearch, searchRequest} from '../../../store/search/searchAction';
// import {postsContext} from '../../../context/postsContext';
// import {useSelector} from 'react-redux';

export const List = () => {
  // const postsArray = useContext(postsContext);
  const dataPosts = useSelector(state => state.postsData.postsData);
  const dataSearch = useSelector(state => state.search.postsData);
  const search = useSelector(state => state.search.search);
  const isActive = useSelector(state => state.search.isActive);
  const token = useSelector(state => state.token.token);
  let data = [];
  const postsData = [];
  // console.log(dataSearch);
  // console.log(data);
  const redditUrl = 'https://www.reddit.com';
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();


  useEffect(() => {
    dispatch(postsDataSlice.actions.changePage(page));
    dispatch(clearSearch());
  }, [page]);

  if (!isActive) {
    data = [...dataPosts];
  } else {
    data = [...dataSearch];
  }
  // console.log(data);

  data.forEach(({data}) => {
    postsData.push({
      title: data.title,
      author: data.author,
      linkPost: `${redditUrl}${data.permalink}`,
      urlImage: data.url,
      ups: data.score,
      authorLink: `${redditUrl}/r/${data.subreddit}`,
      date: data.created,
      id: data.id,
      markdown: data.selftext,
      keyId: generateRandomId(),
    }
    );
  });

  useEffect(() => {
    if (!token) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!isActive) {
          dispatch(postsDataRequestAsync());
        } else {
          dispatch(searchRequest(search));
        }
      }
    }, {
      rootMargin: '100px',
    });
    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  });

  // console.log(postsData);

  // console.log(postsData);
  // console.log(postsArray);
  // const postsData = [
  //   {
  //     thumbnail: '',
  //     title: 'Title1',
  //     author: 'Nickname1',
  //     ups: 24,
  //     date: '2022-02-24T09:45:00.000Z',
  //     id: '1',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title2',
  //     author: 'Nickname2',
  //     ups: 77,
  //     date: '2022-02-30T08:45:00.000Z',
  //     id: '2',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title3',
  //     author: 'Nickname3',
  //     ups: 22,
  //     date: '2022-05-14T07:56:00.000Z',
  //     id: '3',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title4',
  //     author: 'Nickname4',
  //     ups: 2,
  //     date: '2021-03-12T13:04:00.000Z',
  //     id: '4',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title5',
  //     author: 'Nickname5',
  //     ups: 74,
  //     date: '2022-09-02T00:15:00.000Z',
  //     id: '5',
  //   },
  // ];

  return (
    <>
      <ul className={style.list}>
        {
          postsData.map((postsItem) => (
            <Post key={postsItem.keyId} postData={postsItem} />
          ))
        }
        <li ref={endList} className={style.end}></li>
      </ul>
      <Outlet/>
    </>
  );
};
