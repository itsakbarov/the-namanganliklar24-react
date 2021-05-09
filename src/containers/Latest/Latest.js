import Card from "../../components/Card";
import Aside from "../Aside";
import classes from "./Latest.module.scss"

const Latest = ({data}) => {
    return (
      <div className={classes.LatestWrapper}>
        <div className={classes.left}>
          <h3>Latest News</h3>
          {data.isFetched ? (
            data.data
              .slice(10, 16)
              .map((item, index) => (
                <Card
                  className={window.screen.width > 525 ? "horizon" : " "}
                  title={item.title}
                  url={item.url}
                  date={item.publishedAt}
                  key={index}
                  text={item.description}
                  img={item.urlToImage}
                />
              ))
          ) : (
            <></>
          )}
        </div>
        <div className={classes.right}>
          <Aside data={data} />
        </div>
      </div>
    );
}

export default Latest
