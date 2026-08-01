import Link from 'next/link';
import css from './Sidebar.module.css';
import { getServerCategories } from '@/lib/api/serverApi';

export default async function RulesSidebar() {
  const categories = await getServerCategories();

  return (
    <ul className={css.list}>
      {categories.map((category) => (
        <li className={css.item} key={category._id}>
          <Link className={css.link} href={`/rules/${category.slug}`}>
            {category.title}
          </Link>
        </li>
      ))}

      <li className={css.testItem}>
        <Link className={css.testLink} href="/tests">
          Пройти тест
        </Link>
      </li>
    </ul>
  );
}
