import React, {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';
import {postsContext} from '../../../context/postsContext';

export const List = () => {
  const postsArray = useContext(postsContext);
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
    <ul className={style.list}>
      {
        postsArray.map((postsArray) => (
          <Post key={postsArray.id} postData={postsArray} />
        ))
      }
    </ul>
  );
};
