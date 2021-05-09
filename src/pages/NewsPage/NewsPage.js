import classes from "./NewsPage.module.scss";
import { request } from "../../api/request";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Aside from '../../containers/Aside'
import { Spin, Space } from "antd";
const NewsPage = ({ match }) => {
  const [single, setSingle] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    request
      .get("https://newsapi.org/v2/everything", {
        params: {
          apiKey: "071e620b9e184883948c1e9746e46d4a",
          q: match.params.news,
        },
      })
      .then((res) => {
        setSingle({
          isFetched: true,
          data: res.data.articles,
          error: null,
        });
      })
      .catch((err) => {
        setSingle({
          isFetched: true,
          data: [],
          error: err,
        });
      });
  }, [match.params.news]);


  return (
    <div className={classes.NewsPage}>
      <div className="container">
        {single.isFetched ? (
          <div className={classes.Wrapper}>
            <div className={classes.Content}>
              <h2 className={classes.NewsTitle}>{single.data[5].title}</h2>
              <img
                className={classes.SingleNewsImage}
                src={single.data[5].urlToImage}
                alt={match.params.news}
              />
              <h4 className={classes.Desc}>{single.data[5].description}</h4>
              <p className={classes.NewsContent}>{single.data[5].content}</p>
              <p className={classes.Auth}>{single.data[5].source.name}</p>
            </div>
            <div className={classes.aside}>
              <Aside data={single} />
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className={classes.SimilarNews}>
          <h3 className={classes.RelatedNews}>Новости по теме</h3>
          <div className={classes.cardHolder}>
            {single.isFetched ? (
              single.data
                .slice(0, 3)
                .map((item, index) => (
                  <Card
                    title={item.title}
                    url={item.source.id}
                    date={item.publishedAt}
                    key={index}
                    img={item.urlToImage}
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
        </div>
      </div>

     
    </div>
  );
};

export default NewsPage;
