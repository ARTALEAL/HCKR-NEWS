import React from 'react';
import { UpdateNewsButton } from '../UpdateNewsButton/UpdateNewsButton';
import { Link, useParams } from 'react-router-dom';
import './SingleNews.css';
import { api } from '../utils/api';
import CommentsList from '../CommentsList/CommentsList';
import { secToString } from '../utils/secToString';

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

  const handleUpdateNews = () => {
    fetchData();
  };
  return (
    <>
      <section className="single-news">
        <h3>{articleData.title}</h3>
        <div className="single-news-container">
          <UpdateNewsButton
            text="Update comments"
            isLoading={isLoadingData}
            onClick={handleUpdateNews}
          />
          <p>
            <a
              className="news-link button"
              href={articleData.url}
              target="_blank"
              rel="noreferrer"
            >
              Go to news page
            </a>
          </p>
          <p>
            <Link className="news-link button" to="/">
              Back
            </Link>
          </p>
        </div>
        <div>
          <p>
            <b>Author: </b>
            {articleData.by}
          </p>
          <p>
            <b>Created:</b> {secToString(articleData.time)}
          </p>
        </div>
        {articleData.kids && articleData.descendants > 0 ? (
          <p>{articleData.descendants} comments</p>
        ) : (
          <p>0 comments</p>
        )}
        {articleData.kids && <CommentsList data={articleData.kids} />}
      </section>
    </>
  );
};
