import { Link } from "react-router-dom"
import classes from "./Footer.module.scss"
import { WhiteLogo, WhiteTelegram } from '../../assets/icons/base_Icons'
import { FooterColFirst, FooterColSecond } from "../../db/db";

const Footer = () => {
    return (
      <footer className={classes.SiteFooter}>
        <div className="container">
          <div className={classes.FooterTop}>
            <Link className={classes.FooterLogo} to="/">
              <WhiteLogo />
            </Link>
            <div className={classes.dFlex} style={{paddingTop: '0'}}>
              <p className={classes.FootText}>
                Подписывайтесь на наш канал в Telegram и будьте всегда в курсе
                самых последних новостей:
              </p>
              <a href="https://t.me/theAkbarov" className={classes.FooterBtnLink}>
                <WhiteTelegram />
                Подписатся
              </a>
            </div>
          </div>
          <div className={classes.dFlex}>
            <div className={classes.About}>
              <Link to="">О сайте </Link>
              <p className={classes.FooterTxt}>
                Воспроизводство, копирование, тиражирование, распростране ние и
                иное использование информации с сайта «NAMANGANLIKLAR24.UZ»
                возможно только с предварительного письменного разрешения
                редакции.
              </p>
            </div>
            <div>
                {
                    FooterColFirst.map(item=>(
                        <Link to={item.path}  key={item.title} className={classes.FooterLink}>
                            {item.title}
                        </Link>
                    ))
                }
            </div>
            <div>
                {
                    FooterColSecond.map(item=>(
                        <Link to={item.path} key={item.title} className={classes.FooterLink}>
                            {item.title}
                        </Link>
                    ))
                }
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer
