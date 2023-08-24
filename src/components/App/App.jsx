import React from 'react';
import './App.css';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNewsIds,
  selectNewsIds,
  selectNewsIdsStatus,
} from '../../slices/newsSlice';
import { SingleNews } from '../SingleNews/SingleNews';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const newsIds = useSelector(selectNewsIds);
  const newsIdsStatus = useSelector(selectNewsIdsStatus);

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
      <Header ids={newsIds} dispatch={dispatch} />
      <Routes>
        <Route
          path="/HCKR-NEWS"
          element={<Main news={newsIds} ids={newsIds} dispatch={dispatch} />}
        />
        <Route exact path="/HCKR-NEWS/news/:newsId" element={<SingleNews />} />
        <Route path="/HCKR-NEWS/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
