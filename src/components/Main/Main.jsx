import './Main.css';

export default function Main(props) {
  return (
    <>
      <h1>Hacker News</h1>
      <section className="elements" aria-label="Секция с карточками">
        {props.news &&
          props.news.map((el) => (
            <div className="card" key={el} title="Перейти к новости">
              <a
                className="post-link"
                href={el.url}
                target="_blank"
                rel="noreferrer"
              >
                <h2>{el.title}</h2>
                <div className="info-container">
                  <p>
                    дата публикации: {el.time} автор: {el.by} рейтинг:{' '}
                    {el.score}
                  </p>
                </div>
              </a>
            </div>
          ))}
      </section>
    </>
  );
}
