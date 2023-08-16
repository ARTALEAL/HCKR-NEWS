import React from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../components/utils/api';
import { secToString } from '../utils/secToString';

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
      <Link className="news-link" to={`/news/${articleData.id}`}>
        <header>
          <h1>{articleData.title}</h1>
        </header>
        <main className="news-container">
          <p className="news-score">News score is: {articleData.score}</p>
          <p className="news-score">
            Created at {secToString(articleData.time)}
          </p>
        </main>
      </Link>
      {children}
    </article>
  );
};
