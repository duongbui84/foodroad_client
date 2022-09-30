import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './ExperiencesItem.module.scss';

const cx = classNames.bind(styles);

function ExperiencesItem({ to, bgImage, expType, privacy, description, address, price }) {
  return (
    <div className={cx('wrapper')}>
      <Link
        style={{
          backgroundImage: bgImage,
        }}
        className={cx('bgImage')}
        to={to}
      ></Link>
      <div className={cx('expType')}>
        <span>{expType}</span>
      </div>
      <div className={cx('sub-wrapper')}>
        <p className={cx('privacy')}>{privacy}</p>
        <Link className={cx('description')} to={to}>
          {description}
        </Link>
        <p className={cx('address')}>{address}</p>
        <div>
          from <span className={cx('price')}>{price}</span>
        </div>
      </div>
    </div>
  );
}

ExperiencesItem.propTypes = {
  to: PropTypes.string,
  bgImage: PropTypes.string,
  description: PropTypes.string,
  privacy: PropTypes.string,
  expType: PropTypes.string,
  price: PropTypes.string,
  address: PropTypes.string,
};

export default ExperiencesItem;
