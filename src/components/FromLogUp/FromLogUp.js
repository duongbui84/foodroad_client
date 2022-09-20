import classNames from 'classnames/bind';
import styles from './FromLogUp.module.scss';

const cx = classNames.bind(styles);

function FromLogUp() {
  return (
    <div>
      <form action="" className={cx('form')} id="form-1">
        <h2>Đăng ký tài khoản</h2>
        <p>Học lập trình miễn phí tại F8</p>

        <div className={cx('form-group')}>
          <label htmlFor="fullname" className={cx('form-label')}>
            Tên đầy đủ
          </label>
          <input id="fullname" type="text" name="fullname" placeholder="VD: Đương Bùi" />
          <span className={cx('form-message')}></span>
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="email" className={cx('form-label')}>
            Email liên kết
          </label>
          <input id="email" type="text" name="email" placeholder="VD: duongbui@gmail.com" />
          <span className={cx('form-message')}></span>
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="password" className={cx('form-label')}>
            Mật khẩu
          </label>
          <input id="password" type="password" name="password" placeholder="Nhập mật khẩu" />
          <span className={cx('form-message')}></span>
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="password-repeat" className={cx('form-label')}>
            Nhập lại mật khẩu
          </label>
          <input
            id="password-repeat"
            type="password"
            name="password-repeat"
            placeholder="Vui lòng nhập lại mật khẩu"
          />
          <span className={cx('form-message')}></span>
        </div>
        <div className={cx('container-btn')}>
          <input className={cx('submid-btn')} type="submit" value="Đăng ký" />
        </div>
      </form>
    </div>
  );
}

export default FromLogUp;
