import { Link } from "react-router-dom"
import classes from "./Banner.module.scss"

const Banner = ({imgPath}) => {
    return (
        <div className={classes.banner}>
            <Link to="/bu-reklama-oka">
                <img src={imgPath} className={classes.BannerPic} alt=""/>
            </Link>
        </div>
    )
}

export default Banner