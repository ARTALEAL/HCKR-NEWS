import './Main.css';
import { NewsList } from '../NewsList/NewsList';
import { UpdateNewsButton } from '../UpdateNewsButton/UpdateNewsButton';
import { fetchNewsIds } from '../../slices/newsSlice';
export default function Main({ news, ids, dispatch }) {
  function handleClickUpdateButton() {
    dispatch(fetchNewsIds());
  }
  return (
    <>
      <header>
        <h1>Hacker News</h1>
        <UpdateNewsButton
          text="Update news"
          isLoading={ids}
          onClick={handleClickUpdateButton}
        />
      </header>
      <section className="elements" aria-label="News section">
        <NewsList data={news}></NewsList>
      </section>
      <footer>Hacker News</footer>
    </>
  );
}
