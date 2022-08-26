import React, {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL_API} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isLogout, setIsLogout] = useState(false);

  // console.log(token);

  const handleLogout = e => {
    e.preventDefault();
    console.log('kuku');
    !isLogout ? setIsLogout(true) : setIsLogout(false);
  };

  const handleExit = e => {
    // e.preventDefault();
    delToken();
    // setIsLogout(true);
    setAuth({});
  };

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then((response) => {
      if (response.status === 401) handleExit();
      response.json().then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
        .catch((err) => {
          // console.err(err);
          setAuth({});
        });
    });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn}
            onClick={handleLogout}
          >
            <img className={style.img}
              src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`} />
          </button>
          {isLogout && (<button className={style.logout}
            onClick={handleExit}
          >Выйти</button>)}
        </>

      ) :
        (
          <Text As='a' href={urlAuth} className={style.authLink}>
            <AuthIcon className={style.svg} width={128} height={128} />
          </Text>
        )
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
