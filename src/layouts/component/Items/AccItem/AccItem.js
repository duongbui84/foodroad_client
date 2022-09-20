import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './AccItem.module.scss';

const cx = classNames.bind(styles);

function AccItem({ icon, title, time }) {
  return (
    <div className={cx('acc-list')}>
      <img className={cx('acc-img')} src={icon} alt="account img" />
      <div>
        <p className={cx('acc-info')}>{title}</p>
        <span className={cx('acc-sub-info')}>{time}</span>
      </div>
    </div>
  );
}

AccItem.propTypes = {
  children: PropTypes.node,
};

export default AccItem;
