import Link from 'next/link';
import Container from '../Container/Container';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <div className={css.hero}>
      <Container>
        <div className={css.content}>
          <h1 className={css.title}>ПДР просто і зрозуміло</h1>
          <p className={css.description}>
            Вивчай правила дорожнього руху України зручно, швидко та ефективно.
            Усе, що потрібно для впевненості на дорозі
          </p>
        </div>

        <ul className={css.actions}>
          <li>
            <Link className={css.primaryButton} href="/rules">
              Перейти до правил
            </Link>
          </li>
          <li>
            <Link className={css.secondaryButton} href="/about">
              Про проект
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
