import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Heading from './Heading';
import Search from './Search';
import Auth from './Auth';

export const Header = () => {
  // const {Consumer} = tokenContext; старый метод

  // const context = useContext(tokenContext);
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo/>
          <Heading text='Главная'/>
          <Search/>
          {/* <Consumer>
            {(context) =>
              <Auth token={context.token} delToken={context.delToken} />}
          </Consumer> */}
          {/* <Auth {...context} /> */}
          {/* <Auth token={context.token} delToken={context.delToken} /> */}
          <Auth />
        </div>
      </Layout>
    </header>
  );
};

// Header.propTypes = {
//   token: PropTypes.string,
//   delToken: PropTypes.func,
// };
