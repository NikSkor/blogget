import React from 'react';
// import style from './AuthLoader.module.css';
import HashLoader from 'react-spinners/HashLoader';

export const PreLoader = () => {
  return (
    <HashLoader color='#cc6633' css={{display: 'block'}} size={30}/>
  );
};
