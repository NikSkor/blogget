import React, {useState, useContext} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {delToken} from '../../../store/tokenReducer';
// import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';
import {useDispatch} from 'react-redux';


export const Auth = () => {
  // const {delToken} = useContext(tokenContext);
  // const [auth, clearAuth] = useAuth();
  const dispatch = useDispatch();
  const [isLogout, setIsLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const handleLogout = e => {
    e.preventDefault();
    !isLogout ? setIsLogout(true) : setIsLogout(false);
  };

  const handleExit = e => {
    // e.preventDefault();
    dispatch(delToken());
    // setIsLogout(true);
    clearAuth();
  };

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
