import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <>
      <header>
        <h2>There's Nothing Here</h2>
      </header>
      <main className="notfound-main">
        <h3>Let's Go back to the News!</h3>
        <p>
          <Link className="news-link button" to="/">
            Back
          </Link>
        </p>
      </main>
      <footer>Hacker News</footer>
    </>
  );
}

export default NotFound;
