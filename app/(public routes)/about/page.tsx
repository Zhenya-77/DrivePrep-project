import Container from '@/components/Container/Container';
import css from './About.module.css';

export default function About() {
  return (
    <main className={css.main}>
      <Container>
        <section className={css.hero}>
          <h1 className={css.title}>Про DrivePrep</h1>
          <p className={css.description}>
            DrivePrep — це навчальна платформа для підготовки до іспиту з Правил
            дорожнього руху. Вона допомагає швидко знаходити потрібні теми,
            вивчати правила та повторювати матеріал у зручному форматі.
          </p>
        </section>
        <section className={css.section}>
          <h2 className={css.subtitle}>Що можна знайти на платформі</h2>
          <p className={css.text}>
            На сайті зібрані основні категорії Правил дорожнього руху. Кожна
            категорія містить структурований перелік правил, що дозволяє
            поступово опрацьовувати матеріал і швидко повертатися до потрібної
            теми.
          </p>
        </section>
        <section className={css.section}>
          <h2 className={css.subtitle}>Для кого створений DrivePrep</h2>
          <p className={css.text}>
            Платформа стане у пригоді майбутнім водіям, які готуються до
            складання теоретичного іспиту, а також усім, хто хоче повторити або
            освіжити знання Правил дорожнього руху.
          </p>
        </section>
        <section className={css.section}>
          <h2 className={css.subtitle}>Мета проєкту</h2>
          <p className={css.text}>
            Основна мета DrivePrep — зробити вивчення Правил дорожнього руху
            простим, зрозумілим і доступним. Проєкт зосереджений на зручній
            навігації, швидкому доступі до інформації та комфортному читанні
            навчальних матеріалів.
          </p>
        </section>
      </Container>
    </main>
  );
}
