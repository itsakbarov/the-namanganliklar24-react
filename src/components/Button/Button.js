import classes from './Button.module.scss'

const Button = ({icon, title}) => {
    return (
      <button className={classes.subscribeBtn}>
      {icon}
      {title}
      </button>
    );
}

export default Button
