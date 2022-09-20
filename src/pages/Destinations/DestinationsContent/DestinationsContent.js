import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './DestinationsContent.module.scss';

const cx = classNames.bind(styles);

function DestinationsContent({ bgImage, text, to }) {
  return (
    <Link
      style={{
        backgroundImage: bgImage,
      }}
      to={to}
      className={cx('background-item')}
    >
      {text}
    </Link>
  );
}

DestinationsContent.propTypes = {
  background: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};
export default DestinationsContent;
