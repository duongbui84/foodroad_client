import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './SidebarItem.module.scss';

const cx = classNames.bind(styles);

function SidebarItem({ icon, title, to }) {
  return (
    <NavLink to={to} className={(nav) => cx('wrapper', { active: nav.isActive })}>
      {icon}
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

SidebarItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string,
  to: PropTypes.string,
};

export default SidebarItem;
