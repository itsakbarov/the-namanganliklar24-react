import { Link } from 'react-router-dom'
import { SiteLogo, TelegramIcon } from '../../assets/icons/base_Icons'
import { NavList } from '../../db/db'
import Button from  '../../components/Button'

import './Sidebar.scss'
const Sidebar = ({drawerState, setDrawerState}) => {
    return (
      <div className={`${drawerState ? "active" : " "} side-bar`}>
        <Link to="/" className="drawer-logo">
          <SiteLogo />
        </Link>
        <button
          className="close-btn"
          onClick={() => setDrawerState(!drawerState)}
        >
          &times;
        </button>
        <Button icon={TelegramIcon} title="Подписатся" />
        <div className="content">
          {NavList.map((item) => (
            <Link
            key={item.title}
              className="side-bar-link"
              onClick={() => setDrawerState(!drawerState)}
              to={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    );
}

export default Sidebar
