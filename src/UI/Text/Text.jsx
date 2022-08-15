import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    hover = {},
    onClick = () => {},
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    fontWeight,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    style[fontWeight],
    {[style.hover]: hover},
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fst${dsize}`]]: dsize},
  );

  return (
    <As className={classes} onClick={onClick} href={href}>{children}</As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
    PropTypes.func,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
};
