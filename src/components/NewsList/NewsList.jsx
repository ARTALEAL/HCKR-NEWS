import React from 'react';
import './NewsList.css';
import { NewsItem } from '../NewsItem/NewsItem';

export const NewsList = ({ data }) => {
  const [newsItems, setNewsItems] = React.useState(null);
  React.useEffect(() => {
    const markup = data.map((id) => <NewsItem key={id} id={id} />);
    setNewsItems(markup);
  }, [data]);
  return <ul className="news-list">{newsItems}</ul>;
};
