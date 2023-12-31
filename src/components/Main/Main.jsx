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
      <UpdateNewsButton
        text="Update news"
        isLoading={ids}
        onClick={handleClickUpdateButton}
      />
      <section className="elements" aria-label="News section">
        <main>
          <NewsList data={news}></NewsList>
        </main>
      </section>
    </>
  );
}
