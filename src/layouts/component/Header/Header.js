import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import {
  faEllipsisVertical,
  faLanguage,
  faToggleOff,
  faBell,
  faHome,
  faUtensils,
  faLocationDot,
  faBook,
  faPhone,
  faBars,
  // faToggleOn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { Button } from '~/components/Button';
import avatar from '~/assets/image/img-logo/myAvatar.jpg';
import { AccItem } from '~/layouts/component/Items/AccItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Search } from '~/layouts/component/Search';
import exampleIcon from '~/assets/image/img-food-icon/ga-6-mon.jpg';
import FormSignUp from '~/components/FormSignUp/FormSignUp';
import FormLogIn from '~/components/FormLogIn/FormLogIn';

const cx = classNames.bind(styles);

const currentUser = false;

function Header() {
  const [showNoti, setShowNoti] = useState(false);
  const [showSubSidebar, setShowSubSidebar] = useState(false);
  const [showFormSignUp, setShowFormSignUp] = useState(false);
  const [showFormLogIn, setShowFormLogIn] = useState(false);

  const handleShowNoti = () => {
    showNoti ? setShowNoti(false) : setShowNoti(true);
  };
  const handleShowSubSidebar = () => {
    showSubSidebar ? setShowSubSidebar(false) : setShowSubSidebar(true);
  };
  const handleShowFormSignUp = () => {
    setShowFormSignUp(true);
  };
  const handleHideFormSignUp = () => {
    setTimeout(() => {
      setShowFormSignUp(false);
    }, 200);
  };
  const handleShowFormLogIn = () => {
    setShowFormLogIn(true);
  };
  const handleHideFormLogIn = () => {
    setTimeout(() => {
      setShowFormLogIn(false);
    }, 200);
  };

  return (
    <>
      <header className={cx('wrapper')}>
        {/*
      HEADER LOGO & NAME 
      */}
        <div className={cx('header-home')}>
          <Link className={cx('link-logo')} to={'/'}>
            <img
              src="https://foodandroad.com/wp-content/uploads/2021/04/foodandroad-logo.png"
              alt="logo-header"
            />
          </Link>
        </div>

        <Search />

        {/*
      HEADER ACC & MENU 
      */}

        <div className={cx('header-action')}>
          {currentUser ? (
            <>
              <div>
                <Tippy
                  onClickOutside={() => setShowNoti(false)}
                  visible={showNoti}
                  delay={[200, 100]}
                  interactive
                  placement="bottom-end"
                  render={(attr) => (
                    <div className={cx('notification')} tabIndex="-1" {...attr}>
                      <PopperWrapper>
                        <h4>Notifications</h4>
                        <AccItem
                          icon={exampleIcon}
                          title={'Trần Anh Quân reacted to your comment'}
                          time={'2 days ago'}
                        />
                        <AccItem
                          icon={exampleIcon}
                          title={'Trần Anh Quân mentioned you in a comment'}
                          time={'2 days ago'}
                        />
                        <AccItem
                          icon={exampleIcon}
                          title={'Nguyễn Yến Nhi reacted to your post'}
                          time={'3 days ago'}
                        />

                        <div className={cx('view-notif-btn')}>
                          <p>All notifications</p>
                        </div>
                      </PopperWrapper>
                    </div>
                  )}
                >
                  <button className={cx('notif-bell')} onClick={handleShowNoti}>
                    <FontAwesomeIcon icon={faBell} />
                  </button>
                </Tippy>
              </div>

              <div className={cx('avatar-user')}>
                <img src={avatar} alt="avatar" />
              </div>
            </>
          ) : (
            <>
              <Button onClick={handleShowFormSignUp} onlyText>
                Sign Up
              </Button>
              <Button onClick={handleShowFormLogIn} primary>
                Log In
              </Button>
            </>
          )}
          <Tippy
            delay={[200, 100]}
            interactive="true"
            placement="bottom-end"
            render={(attrs) => (
              <div className={cx('list-menu')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <div className={cx('menu-item')}>
                    <span>Language</span>
                    <FontAwesomeIcon icon={faLanguage} />
                  </div>
                  <div className={cx('menu-item')}>
                    <span>Light/Dark</span>
                    <FontAwesomeIcon icon={faToggleOff} />
                    {/* <FontAwesomeIcon icon={faToggleOn} /> */}
                  </div>
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx('header-menu')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </Tippy>
        </div>

        {/**
         * Menu on tablet & mobile screen
         */}

        <Tippy
          onClickOutside={() => setShowSubSidebar(false)}
          visible={showSubSidebar}
          delay={[200, 100]}
          interactive
          placement="bottom-end"
          render={(attr) => (
            <div
              onClick={() => setShowSubSidebar(false)}
              className={cx('sub-sidebar')}
              tabIndex="-1"
              {...attr}
            >
              <PopperWrapper>
                <div>
                  <p onClick={handleShowFormSignUp} className={cx('account-btn-tablet')}>
                    Sign Up
                  </p>
                  <p onClick={handleShowFormLogIn} className={cx('account-btn-tablet')}>
                    Log In
                  </p>
                  <div className={cx('separation-line')}></div>

                  <NavLink
                    className={(nav) => cx('sub-sidebar-item', { active: nav.isActive })}
                    to="/"
                  >
                    <FontAwesomeIcon className={cx('sub-sidebar-icon')} icon={faHome} />
                    Home
                  </NavLink>
                  <NavLink
                    className={(nav) => cx('sub-sidebar-item', { active: nav.isActive })}
                    to="/experiences"
                  >
                    <FontAwesomeIcon className={cx('sub-sidebar-icon')} icon={faUtensils} />
                    Experiences
                  </NavLink>
                  <NavLink
                    className={(nav) => cx('sub-sidebar-item', { active: nav.isActive })}
                    to="/destinations"
                  >
                    <FontAwesomeIcon className={cx('sub-sidebar-icon')} icon={faLocationDot} />
                    Destinations
                  </NavLink>
                  <NavLink
                    className={(nav) => cx('sub-sidebar-item', { active: nav.isActive })}
                    to={'/blog'}
                  >
                    <FontAwesomeIcon className={cx('sub-sidebar-icon')} icon={faBook} />
                    Blog
                  </NavLink>
                  <NavLink
                    className={(nav) => cx('sub-sidebar-item', { active: nav.isActive })}
                    to={'/contact'}
                  >
                    <FontAwesomeIcon className={cx('sub-sidebar-icon')} icon={faPhone} />
                    Contact
                  </NavLink>
                </div>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('menu-on-tablet')} onClick={handleShowSubSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </Tippy>
      </header>
      {showFormSignUp ? <FormSignUp onClick={handleHideFormSignUp} /> : null}
      {showFormLogIn ? <FormLogIn onClick={handleHideFormLogIn} /> : null}
    </>
  );
}
export default Header;
