import React, {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {delToken} from '../../../store/tokenReducer';
import {useDispatch} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth';
import PreLoader from '../../../UI/PreLoader';


export const Auth = () => {
  const dispatch = useDispatch();
  const [isLogout, setIsLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();

  const handleLogout = e => {
    e.preventDefault();
    !isLogout ? setIsLogout(true) : setIsLogout(false);
    // setIsLogout(true);
  };

  const handleExit = e => {
    dispatch(delToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (
        <PreLoader/>
      ) : auth.name ? (
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
