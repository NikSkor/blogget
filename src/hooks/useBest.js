import {useEffect} from 'react';
import {URL_API} from '../api/const';

export const useBest = () => {
  useEffect(() => {
    fetch(`${URL_API}/best`, {
      mode: 'no-cors',
    }).then(response => response.json()).
      then((data) => {
        console.log(data);
      });
  });
};
