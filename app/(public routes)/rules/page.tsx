import css from './page.module.css';

export default function Rules() {
  return (
    <div className={css.content}>
      <h2 className={css.title}>Правила дорожнього руху</h2>
      <p className={css.description}>Оберіть розділ для вивчення</p>
    </div>
  );
}
