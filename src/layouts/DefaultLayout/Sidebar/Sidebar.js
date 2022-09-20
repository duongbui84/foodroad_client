import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHome, faLocationDot, faPhone, faPlus, faUtensils } from '@fortawesome/free-solid-svg-icons';

import styles from './Sidebar.module.scss';
import { SidebarItem } from '~/layouts/component/Items/SidebarItem';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('create-btn')}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <SidebarItem to={'/'} title="Home" icon={<FontAwesomeIcon icon={faHome} />} />
      <SidebarItem to={'/experiences'} title="Experiences" icon={<FontAwesomeIcon icon={faUtensils} />} />
      <SidebarItem to={'/destinations'} title="Destinations" icon={<FontAwesomeIcon icon={faLocationDot} />} />
      <SidebarItem to={'/blog'} title="Blog" icon={<FontAwesomeIcon icon={faBook} />} />
      <SidebarItem to={'/contact'} title="Contact" icon={<FontAwesomeIcon icon={faPhone} />} />
    </div>
  );
}

export default Sidebar;
