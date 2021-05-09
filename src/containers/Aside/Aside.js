import { Link } from 'react-router-dom';
import classes from './Aside.module.scss'

const Aside = ({ data }) => {
  return (
    <div className={classes.rightCOntent}>
      <div className={classes.Aside}>
        <h2 className={classes.heading}>Cамые популярные новости</h2>
        {data.isFetched ? (
          data.data.slice(8, 12).map(item => (
            <Link to={item.id} key={item.title} className={classes.AsideLink}>
              <p className={classes.AsideTitle}>{item.title}</p>
              <span className={classes.AsideText}>{item.publishedAt}</span>
            </Link>
          ))
        ) : (
          <>loading data</>
        )}
      </div>
      <div className={classes.adBanner}>
      </div>
    </div>
  );
}

export default Aside
