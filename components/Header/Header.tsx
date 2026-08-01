import Link from 'next/link';
import Container from '../Container/Container';
import css from './Header.module.css';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.inner}>
          <Link className={css.logo} href="/">
            DrivePrep
          </Link>
          <nav>
            <ul className={css.navigationList}>
              <li>
                <Link className={css.navigationLink} href="/">
                  Головна
                </Link>
              </li>
              <li>
                <Link className={css.navigationLink} href="/rules">
                  Правила
                </Link>
              </li>
              <li>
                <Link className={css.navigationLink} href="/about">
                  Про сайт
                </Link>
              </li>
              <AuthNavigation />
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
