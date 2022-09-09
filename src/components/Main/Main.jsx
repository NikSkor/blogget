import React from 'react';
import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import {MainPage} from './MainPage/MainPage';
import {ErrorPage} from './ErrorPage/ErrorPage';


export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/category/:page' element={
          <List />
        }>
          <Route path='post/:id' element={<Modal/>}/>
        </Route>
        <Route path='/auth' element={<MainPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/category/rising' element={<MainPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </Layout>
  </main>
);

