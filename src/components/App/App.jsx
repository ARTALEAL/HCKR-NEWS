import React from 'react';
import './App.css';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNewsIds,
  selectNewsIds,
  selectNewsIdsError,
  selectNewsIdsStatus,
} from '../../slices/newsSlice';

function App() {
  const dispatch = useDispatch();

  const newsIds = useSelector(selectNewsIds);
  const newsIdsStatus = useSelector(selectNewsIdsStatus);
  const newsIdsError = useSelector(selectNewsIdsError);
  console.log(newsIds);

  React.useEffect(() => {
    const updateIds = setTimeout(() => {
      dispatch(fetchNewsIds());
    }, 60000);

    if (newsIdsStatus === 'idle') {
      dispatch(fetchNewsIds());
    }

    return () => {
      clearTimeout(updateIds);
    };
  }, [dispatch, newsIdsStatus]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main news={newsIds} />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
