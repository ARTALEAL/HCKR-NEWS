import './Main.css';
import { NewsList } from '../NewsList/NewsList';

export default function Main({ news }) {
  return (
    <>
      <h1>Hacker News</h1>
      <section className="elements" aria-label="News section">
        <NewsList data={news}></NewsList>
      </section>
    </>
  );
}
