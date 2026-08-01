'use client';

import { ClipLoader } from 'react-spinners';
import css from './loading.module.css';

export default function Loading() {
  return (
    <div className={css.loader} role="status" aria-live="polite">
      <ClipLoader
        color="var(--color-primary)"
        size={56}
        speedMultiplier={0.9}
        aria-label="Завантаження сторінки"
      />

      <p className={css.text}>Завантаження...</p>
    </div>
  );
}
