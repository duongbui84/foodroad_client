import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { FacebookIcon, TweeterIcon } from '../Icons';
import styles from './FormSignUp.module.scss';

const cx = classNames.bind(styles);

function FormSignUp({ onClick }) {
  const regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const message = {
    noValue: 'Please enter this field !',
    notEmail: 'You have entered an invalid email address !',
    notPassword: 'Password must be at least 6 characters !',
    passwordIncorrect: 'Password is incorrect !',
  };

  //Handle validate field "Name"
  const [valueName, setValueName] = useState('');
  const [errorName, setErrorName] = useState('');
  const getValueName = (input) => {
    setValueName(input);
  };
  const handleMessageName = () => {
    if (valueName === '') {
      setErrorName(message.noValue);
    } else setErrorName('');
  };
  useEffect(() => {
    setErrorName('');
  }, [valueName]);

  //Handle validate field "Email"
  const [valueEmail, setValueEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const getValueEmail = (input) => {
    setValueEmail(input);
  };
  const handleMessageEmail = () => {
    if (valueEmail === '') {
      setErrorEmail(message.noValue);
    } else if (!regex.test(valueEmail)) {
      setErrorEmail(message.notEmail);
    } else setErrorEmail('');
  };
  useEffect(() => {
    setErrorEmail('');
  }, [valueEmail]);

  //Handle validate field "Password"
  const [valuePassword, setValuePassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const getValuePassword = (input) => {
    setValuePassword(input);
  };
  const handleMessagePassword = () => {
    if (valuePassword === '') {
      setErrorPassword(message.noValue);
    } else if (valuePassword.length < 6) {
      setErrorPassword(message.notPassword);
    } else if (valuePasswordRepeat !== valuePassword) {
      setErrorPasswordRepeat(message.passwordIncorrect);
    } else if (valuePasswordRepeat === valuePassword) {
      setErrorPasswordRepeat('');
    } else setErrorPassword('');
  };
  useEffect(() => {
    setErrorPassword('');
  }, [valuePassword]);

  //Handle validate field "Password repeat"
  const [valuePasswordRepeat, setValuePasswordRepeat] = useState('');
  const [errorPasswordRepeat, setErrorPasswordRepeat] = useState('');
  const getValuePasswordRepeat = (input) => {
    setValuePasswordRepeat(input);
  };
  const handleMessagePasswordRepeat = () => {
    if (valuePasswordRepeat === '') {
      setErrorPasswordRepeat(message.noValue);
    } else if (valuePasswordRepeat !== valuePassword) {
      setErrorPasswordRepeat(message.passwordIncorrect);
    } else setErrorPasswordRepeat('');
  };
  useEffect(() => {
    setErrorPasswordRepeat('');
  }, [valuePasswordRepeat]);

  //handle show & hide password
  const [isShowPassword, setIsShowPassWord] = useState(false);
  const handleShowPassword = () => {
    isShowPassword ? setIsShowPassWord(false) : setIsShowPassWord(true);
  };

  return (
    <div className={cx('wrapper')}>
      <form action="" className={cx('form')} id="form-1">
        <div onClick={onClick} className={cx('exit-btn')}>
          <FontAwesomeIcon icon={faXmark} />
        </div>

        <h2>Sign Up</h2>
        <p>To connect with us</p>
        <div className={cx('separation-line')}></div>

        <div className={cx('form-group')}>
          <label htmlFor="fullname" className={cx('form-label')}>
            Full Name
          </label>
          <input
            className={cx(errorName ? 'border-error' : '')}
            onChange={(e) => {
              getValueName(e.target.value);
            }}
            onBlur={handleMessageName}
            id="fullname"
            type="text"
            name="fullname"
            placeholder="Ex: Duong Bui"
          />
          <span className={cx('form-message')}>{errorName}</span>
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="email" className={cx('form-label')}>
            Email
          </label>
          <input
            className={cx(errorEmail ? 'border-error' : '')}
            onChange={(e) => {
              getValueEmail(e.target.value);
            }}
            onBlur={handleMessageEmail}
            id="email"
            type="text"
            name="email"
            placeholder="Ex: duongbui@gmail.com"
          />
          <span className={cx('form-message')}>{errorEmail}</span>
        </div>
        <div className={cx('form-group')}>
          <label className={cx('form-label')}>Password</label>
          <div className={cx('input-password')}>
            <input
              className={cx(errorPassword ? 'border-error' : '', 'input-password')}
              onChange={(e) => {
                getValuePassword(e.target.value);
              }}
              onBlur={handleMessagePassword}
              id="password"
              type={isShowPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter the password"
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
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="password-repeat" className={cx('form-label')}>
            Re-enter the password
          </label>
          <input
            className={cx(errorPasswordRepeat ? 'border-error' : '')}
            onChange={(e) => getValuePasswordRepeat(e.target.value)}
            onBlur={handleMessagePasswordRepeat}
            id="password-repeat"
            type={isShowPassword ? 'text' : 'password'}
            name="password-repeat"
            placeholder="Please re-enter the password"
          />
          <span className={cx('form-message')}>{errorPasswordRepeat}</span>
        </div>
        <div className={cx('container-btn')}>
          <input className={cx('submid-btn')} type="submit" value="Sign Up" />
        </div>
        <p className={cx('text-login')}>or Log In with</p>
        <div className={cx('social')}>
          <FacebookIcon className={cx('social-icon-form')} />
          <TweeterIcon className={cx('social-icon-form')} />
        </div>
        <i>---Let's explore more beauty of food---</i>
      </form>
    </div>
  );
}

export default FormSignUp;
