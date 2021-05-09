import classes from "./Home.module.scss";
import Covid from "../../containers/Covid19";
import Notification from "../../containers/Notification";
import Helmet from 'react-helmet'
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Latest from "../../containers/Latest";
import { Spin, Space } from "antd";
import { request } from "../../api/request";

require('dotenv').config()

const Home = () => {
  const [newsData, setNewsData] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    request
      .get("top-headlines", {
        params: {
          country: "us",
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
    }, []);
    console.log(newsData);

  return (
    <div className={classes.homePage}>
      <Helmet>
        <title>Qaynoq Yangiliklar</title>
      </Helmet>
      <div className="container">
        <Covid />
        <div className={classes.cardHolder}>
          {newsData.isFetched ? (
            newsData.data.map((item, index) => (
              <Card
                title={item.title}
                url={item.url}
                date={item.publishedAt}
                img={item.urlToImage}
                key={index}
              />
            ))
          ) : (
              <div className="spin-holder">
                <Space size="middle">
                  <Spin size="large" />
                </Space>
              </div>
          )}
        </div>
        <Notification />
        <Latest data={newsData} />
        <Covid title={process.env.REACT_APP_TITLE} />
      </div>
    </div>
  );
};

export default Home;
