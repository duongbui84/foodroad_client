import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Food.module.scss';

const cx = classNames.bind(styles);

function FoodItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('food-search')}>
      <img className={cx('food-img')} src={data.avatar} alt={data.avatar} />
      <p className={cx('food-info')}>{data.full_name}</p>
    </Link>
  );
}

FoodItem.propTypes = {
  data: PropTypes.object,
};

export default FoodItem;
