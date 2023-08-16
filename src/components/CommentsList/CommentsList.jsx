import React from 'react';
import './CommentsList.css';
import { CommentItem } from '../CommentItem/CommentItem';

export default function CommentsList({ data }) {
  return (
    <ul className="comments-list">
      {data.map((id) => (
        <CommentItem key={id} data={id} />
      ))}
    </ul>
  );
}
