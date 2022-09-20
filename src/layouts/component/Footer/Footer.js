import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import MaxWidthSection from '~/layouts/GridSystem/MaxWidthSection';
import Row from '~/layouts/GridSystem/Row';
import { Link } from 'react-router-dom';
import { Button } from '~/components/Button';
import { FacebookIcon, InstagramIcon, LinkedinIcon, PinterestIcon, TweeterIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <MaxWidthSection gapDefault={0} gapMedium={0}>
        <Row sl={1} el={5} sm={1} em={5}>
          <div className={cx('footer-logo')}>
            <img alt="logo" src="https://foodandroad.com/wp-content/uploads/2021/04/foodandroad-logo.png" />
            <p>
              Food'n Road is a Food Travel Agency that promotes Food Tourism as a tool for connection and local
              development.
            </p>
          </div>
        </Row>
        <Row sl={5} el={7} className="none-in-medium">
          <div className={cx('list-link-footer')}>
            <h3>COMPANY</h3>
            <ul>
              <li>
                <Link to={'#'}>Who we are</Link>
              </li>
              <li>
                <Link to={'#'}>Become our partner</Link>
              </li>
              <li>
                <Link to={'#'}>Advertise with us</Link>
              </li>
              <li>
                <Link to={'#'}>Terms and Policies</Link>
              </li>
              <li>
                <Link to={'#'}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </Row>
        <Row sl={7} el={10} className="none-in-medium">
          <div className={cx('list-link-footer')}>
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <Link to={'#'}>What is Food Tourism</Link>
              </li>
              <li>
                <Link to={'#'}>Food Travel Destinations</Link>
              </li>
              <li>
                <Link to={'#'}>How to Plan a Food Trip</Link>
              </li>
              <li>
                <Link to={'#'}>Book Experiences</Link>
              </li>
            </ul>
          </div>
        </Row>
        <Row sl={10} el={14} sm={5} em={9}>
          <div className={cx('social-footer-section')}>
            <h3>CONNECT WITH US</h3>
            <div className={cx('list-social')}>
              <span className={cx('social')}>
                <FacebookIcon />
              </span>
              <span className={cx('social')}>
                <TweeterIcon />
              </span>
              <span className={cx('social')}>
                <InstagramIcon />
              </span>
              <span className={cx('social')}>
                <LinkedinIcon />
              </span>
              <span className={cx('social')}>
                <PinterestIcon />
              </span>
            </div>
            <h3>ASSINE</h3>
            <div className={cx('signup-email')}>
              <input placeholder="Email address" />
              <Button primary>SIGN UP</Button>
            </div>
          </div>
        </Row>
      </MaxWidthSection>
    </footer>
  );
}

export default Footer;
