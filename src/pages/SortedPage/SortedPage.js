import { useEffect, useState } from "react";
import Aside from "../../containers/Aside"
import classes from "./SortedPage.module.scss"
import { Spin, Space } from "antd";
import { request } from '../../api/request'
import Card from '../../components/Card'
import Helmet from 'react-helmet'

const SortedPage = ({match}) => {
      const [newsData, setNewsData] = useState({
        isFetched: false,
        data: [],
        error: null,
      });

      useEffect(() => {
        request
          .get("/everything", {
            params: {
              // country: "us",
              q: match.params.title,
              apiKey: "071e620b9e184883948c1e9746e46d4a",
            },
          })
          .then((res) => {
            setNewsData({
              isFetched: true,
              data: res.data.articles,
              error: null,
            });
          })
          .catch((err) => {
            setNewsData({
              isFetched: true,
              data: [],
              error: err,
            });
          });
      }, [match.params.title]);

    return (
      <div className={classes.Container}>
        <Helmet>
          <title>News | {match.params.title}</title>
        </Helmet>
        <div className={classes.app}>
          <div className={classes.main}>
            <h2 className={classes.Heading}>{match.params.title}</h2>
            <div className={classes.NewsWrapper}>
              {newsData.isFetched ? (
                newsData.data
                  .slice(0, 10)
                  .map((item, index) => (
                    <Card
                      title={item.title}
                      url={item.url}
                      date={item.published_at}
                      key={index}
                      img={item.urlToImage}
                    />
                  ))
              ) : (
                <div className="spin-holder">
                  <Space size="middle">
                    <Spin/>
                  </Space>
                </div>
              )}
            </div>
          </div>
          <div className={classes.aside}>
            <Aside data={newsData} />
          </div>
        </div>
      </div>
    );
}

export default SortedPage
