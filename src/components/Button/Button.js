import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  children,
  maxContent,
  primary,
  primaryHover,
  onlyText,
  pageBtn,
  medium,
  large,
  to,
  href,
  onClick,
  styleBtn,
}) {
  let Component = 'button';
  const props = {
    to,
    href,
    onClick,
  };

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  const classes = cx(
    'wrapper',
    {
      primary,
      primaryHover,
      onlyText,
      pageBtn,
      medium,
      large,
      maxContent,
    },
    styleBtn,
  );

  return (
    <Component className={classes} {...props}>
      <span className={cx('text-button')}>{children}</span>
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  primaryHover: PropTypes.bool,
  onlyText: PropTypes.bool,
  active: PropTypes.bool,
  pageBtn: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
  styleBtn: PropTypes.string,
  onClick: PropTypes.func,
  maxContent: PropTypes.bool,
};

export default Button;
