'use client';

import { Category } from '@/lib/api/serverApi';
import Link from 'next/link';
import { useState } from 'react';
import css from './TestCategorySelect.module.css';

type Props = {
  categories: Category[];
};

export default function TestCategorySelect({ categories }: Props) {
  const [selectedSlug, setSelectedSlug] = useState('');

  return (
    <div className={css.controls}>
      <div className={css.field}>
        <label htmlFor="test-category" className={css.label}>
          Оберіть категорію
        </label>

        <select
          name="category"
          id="test-category"
          className={css.select}
          value={selectedSlug}
          onChange={(event) => setSelectedSlug(event.target.value)}
        >
          <option value="" disabled>
            Оберіть категорію
          </option>

          {categories.map((category) => (
            <option key={category._id} value={category.slug}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      {selectedSlug ? (
        <Link href={`/tests/${selectedSlug}`} className={css.startButton}>
          Розпочати тест
        </Link>
      ) : (
        <span className={`${css.startButton} ${css.disabledButton}`}>
          Розпочати тест
        </span>
      )}
    </div>
  );
}
