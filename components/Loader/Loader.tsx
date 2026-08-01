import { ClipLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
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
