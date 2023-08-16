import React from 'react';
import './App.css';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNewsIds,
  selectNewsIds,
  selectNewsIdsError,
  selectNewsIdsStatus,
} from '../../slices/newsSlice';
import { SingleNews } from '../SingleNews/SingleNews';

function App() {
  const dispatch = useDispatch();

  const newsIds = useSelector(selectNewsIds);
  const newsIdsStatus = useSelector(selectNewsIdsStatus);
  const newsIdsError = useSelector(selectNewsIdsError);

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
        <Route exact path="/news/:newsId" element={<SingleNews />} />
      </Routes>
    </div>
  );
}

export default App;
