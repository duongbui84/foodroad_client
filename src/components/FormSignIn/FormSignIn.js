import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import * as authServices from '~/apiServices/authServieces';
import styles from './FormSignIn.module.scss';

const cx = classNames.bind(styles);

function FormSignIn({ onClick }) {
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const [errLogin, setErrorSignIn] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isShowPassword, setIsShowPassWord] = useState(false);
  const getValueEmail = (input) => {
    setValueEmail(input);
  };
  const getValuePassword = (input) => {
    setValuePassword(input);
  };

  useEffect(() => {
    setErrorEmail('');
    setErrorSignIn('');
  }, [valueEmail]);

  useEffect(() => {
    setErrorPassword('');
    setErrorSignIn('');
  }, [valuePassword]);

  const messNotValue = 'Please enter this field !';

  const handleSubmit = async (data) => {
    data.preventDefault();

    try {
      const response = await authServices.loginService(valueEmail, valuePassword);
      console.log(response);
      if (response.errCode !== 0) {
        setErrorSignIn(response.errMessage);
      } else setErrorSignIn('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowPassword = () => {
    isShowPassword ? setIsShowPassWord(false) : setIsShowPassWord(true);
  };

  const errorEmailWhenBlur = () => {
    if (valueEmail === '') {
      setErrorEmail(messNotValue);
    } else setErrorEmail('');
  };

  const errorPasswordWhenBlur = () => {
    if (valuePassword === '') {
      setErrorPassword(messNotValue);
    } else setErrorPassword('');
  };

  return (
    <div className={cx('wrapper')}>
      <form onSubmit={handleSubmit} className={cx('form')} id="form-1">
        <div onClick={onClick} className={cx('exit-btn')}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <h2>Sign In</h2>
        <p>To experiences with us</p>
        <div className={cx('separation-line')}></div>

        <div className={cx('form-group')}>
          <label htmlFor="email" className={cx('form-label')}>
            Email
          </label>
          <input
            className={cx(errorEmail ? 'border-error' : '')}
            onBlur={errorEmailWhenBlur}
            onChange={(e) => getValueEmail(e.target.value)}
            id="account"
            type="email"
            name="email"
            placeholder="Email or phone number"
          />
          <span className={cx('form-message')}>{errorEmail}</span>
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="password" className={cx('form-label')}>
            Password
          </label>
          <div className={cx('input-password')}>
            <input
              className={cx(errorPassword ? 'border-error' : '')}
              onChange={(e) => getValuePassword(e.target.value)}
              onBlur={errorPasswordWhenBlur}
              id="password"
              type={isShowPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
            />
            <div onClick={handleShowPassword} className={cx('icon-show-password')}>
              {isShowPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
          </div>
          <span className={cx('form-message')}>{errorPassword}</span>
          <span className={cx('form-message')}>{errLogin}</span>
        </div>

        <div className={cx('container-btn')}>
          <input className={cx('submid-btn')} type="submit" value="Log In" />
        </div>
        <h5>or</h5>
        <div className={cx('container-btn')}>
          <input className={cx('submid-btn')} type="submit" value="Log In with Tweeter" />
        </div>
        <h5>or</h5>
        <div className={cx('container-btn')}>
          <input className={cx('submid-btn')} type="submit" value="Log In with Facebook" />
        </div>
        <i>--- Let's explore more beauty of food ---</i>
      </form>
    </div>
  );
}

export default FormSignIn;
