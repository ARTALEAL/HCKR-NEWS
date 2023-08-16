import React from 'react';

import { Link, useParams } from 'react-router-dom';

import { api } from '../utils/api';
import CommentsList from '../CommentsList/CommentsList';

export const SingleNews = () => {
  const { newsId } = useParams();

  const [articleData, setArticleData] = React.useState({});
  const [isLoadingData, setIsLoadingData] = React.useState(false);

  const fetchData = React.useCallback(() => {
    setIsLoadingData(true);
    api
      .getItemById(newsId)
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
  }, [newsId]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  //   const handleUpdateNews = () => {
  //     fetchData();
  //   };
  console.log(articleData);
  return (
    <>
      <h1>Hacker News</h1>
      <section>
        <h3>{articleData.title}</h3>
        <a href={articleData.url} target="_blank" rel="noreferrer">
          Go to original
        </a>
        <br />
        <Link to="/">Back to news list</Link>
        {articleData.kids && articleData.descendants > 0 ? (
          <p>`${articleData.descendants} comments`</p>
        ) : (
          <p>0 comments</p>
        )}
        {articleData.kids && <CommentsList data={articleData.kids} />}
      </section>
    </>
  );
};
