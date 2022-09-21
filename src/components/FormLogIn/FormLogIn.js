import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './FormLogIn.module.scss';

const cx = classNames.bind(styles);

function FormLogIn({ onClick }) {
  const message = {
    notValue: 'Please enter this field !',
    notName: "The name, email or mobile number you entered isn't connected to an account !",
    notPassword: "The password that you've entered is incorrect !",
  };

  const fakeData = {
    userName: 'duongbui84',
    userPassword: '12345678',
  };

  //handle show & hide password
  const [isShowPassword, setIsShowPassWord] = useState(false);
  const handleShowPassword = () => {
    isShowPassword ? setIsShowPassWord(false) : setIsShowPassWord(true);
  };

  //handle validate name
  const [valueName, setValueName] = useState('');
  const [errorName, setErrorName] = useState('');
  const getValueName = (input) => {
    setValueName(input);
  };
  const errorNameWhenBlur = () => {
    if (valueName === '') {
      setErrorName(message.notValue);
    } else setErrorName('');
  };
  const handleValidateName = () => {
    if (valueName === '') {
      setErrorName(message.notValue);
    } else if (valueName !== '' && valueName !== fakeData.userName) {
      setErrorName(message.notName);
    } else setErrorName('');
  };
  useEffect(() => {
    setErrorName('');
  }, [valueName]);

  //handle validate password
  const [valuePassword, setValuePassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const getValuePassword = (input) => {
    setValuePassword(input);
  };
  const errorPasswordWhenBlur = () => {
    if (valuePassword === '') {
      setErrorPassword(message.notValue);
    } else setErrorPassword('');
  };
  const handleValidatePassword = () => {
    if (valuePassword === '') {
      setErrorPassword(message.notValue);
    } else if (valuePassword !== fakeData.userPassword) {
      setErrorPassword(message.notPassword);
    } else setErrorPassword('');
  };
  useEffect(() => {
    setErrorPassword('');
  }, [valuePassword]);

  const handleSubmit = (data) => {
    data.preventDefault();
    handleValidateName();
    handleValidatePassword();
    console.log('userName: ', valueName);
    console.log('userPassword: ', valuePassword);
  };

  useEffect(() => {}, []);
  return (
    <div className={cx('wrapper')}>
      <form onSubmit={handleSubmit} action="" className={cx('form')} id="form-1">
        <div onClick={onClick} className={cx('exit-btn')}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <h2>Log In</h2>
        <p>To experiences with us</p>
        <div className={cx('separation-line')}></div>

        <div className={cx('form-group')}>
          <label htmlFor="account" className={cx('form-label')}>
            Account
          </label>
          <input
            className={cx(errorName ? 'border-error' : '')}
            onBlur={errorNameWhenBlur}
            onChange={(e) => getValueName(e.target.value)}
            id="account"
            type="text"
            name="account"
            placeholder="Name, email or phone number"
          />
          <span className={cx('form-message')}>{errorName}</span>
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

export default FormLogIn;
