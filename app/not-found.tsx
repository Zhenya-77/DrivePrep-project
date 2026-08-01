import Container from '@/components/Container/Container';
import Link from 'next/link';
import css from './NotFound.module.css';

export default function NotFoundPage() {
  return (
    <main className={css.main}>
      <Container>
        <section className={css.section}>
          <h1 className={css.title}>404</h1>

          <h2 className={css.subtitle}>Сторінку не знайдено</h2>

          <p className={css.text}>
            Схоже, сторінка, яку ви шукаєте, не існує або була переміщена.
            Перейдіть на головну сторінку, щоб продовжити користування
            DrivePrep.
          </p>

          <Link href="/" className={css.link}>
            Повернутися на головну
          </Link>
        </section>
      </Container>
    </main>
  );
}
