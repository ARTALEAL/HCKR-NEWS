import React from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../components/utils/api';
import { secToString } from '../utils/secToString';
import './Article.css';

export const Article = ({ children, id }) => {
  const [articleData, setArticleData] = React.useState({});
  const [isLoadingData, setIsLoadingData] = React.useState(false);

  React.useEffect(() => {
    setIsLoadingData(true);
    api
      .getItemById(id)
      .then(
        (data) => {
          setArticleData(data);
        },
        (err) => {
          console.log(err);
        }
      )
      .finally(() => {
        setIsLoadingData(false);
      });
  }, [id]);

  return isLoadingData ? (
    <h2>Please wait, we are loading news</h2>
  ) : (
    <article>
      <Link className="news-link" to={`/HCKR-NEWS/news/${articleData.id}`}>
        <header>
          <h2>{articleData.title}</h2>
        </header>
        <div className="news-container">
          <p className="news-score">
            <b>News score is:</b> {articleData.score}
          </p>
          <p className="news-author">
            <b>Author:</b> {articleData.by}
          </p>
          <p className="news-created">
            <b>Created at</b> {secToString(articleData.time)}
          </p>
        </div>
      </Link>
      {children}
    </article>
  );
};
