import React from 'react';
import './NewsItem.css';

import { Article } from '../Article/Article';

export const NewsItem = ({ id }) => {
  return (
    <li className="list-item">
      <Article id={id} />
    </li>
  );
};
