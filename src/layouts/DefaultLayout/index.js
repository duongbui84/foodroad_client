import classNames from 'classnames/bind';

import { Header } from '~/layouts/component/Header';
import { Sidebar } from '~/layouts/DefaultLayout/Sidebar';
import Footer from '../component/Footer/Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
