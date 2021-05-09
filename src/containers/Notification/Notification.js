import { BellIcon } from "../../assets/icons/base_Icons"
import classes from "./Notification.module.scss"

const Notification = () => {
    return (
      <div className={classes.Notification}>
        <div className={classes.left}>
          <BellIcon />
          <span>Хотите узнать новости первыми? подключите уведомления!</span>
        </div>
        <div className={classes.right}>
          <button>Включит уведомления!</button>
        </div>
      </div>
    );
}

export default Notification
