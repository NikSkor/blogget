import React, {useState, useEffect} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandomId/generateRandomId';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {debounceRaf} from '../../../utils/debounce/debounce';
import {Text} from '../../../UI/Text';

const LIST = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Топ', Icon: TopIcon},
  {value: 'Лучшие', Icon: BestIcon},
  {value: 'Горячие', Icon: HotIcon},
].map(assignId);


export const Tabs = ({list, setList, addItem}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);
  const [headerMenu, setHeaderMenu] = useState('Меню');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
      setHeaderMenu('Меню');
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  const handleClick = value => {
    setHeaderMenu(value);
  };

  return (
    <div className={style.container}>
      {
        isDropDown && <div className={style.wrapperBtn}>
          <Text As='button' className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {headerMenu}
            <ArrowIcon width={15} height={15} />
          </Text>
        </div>
      }
      {
        (isDropdownOpen || !isDropDown) && <ul
          onClick={() => setIsDropdownOpen(false)}
          className={style.list}>
          {
            LIST.map(({value, id, Icon}) => (
              <li className={style.item} key={id}>
                <Text As='button' className={style.btn}
                  onClick={() => handleClick(value)}>
                  {value}
                  {Icon && <Icon width={30} height={30} />}
                </Text>
              </li>
            ))
          }
        </ul>
      }
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
