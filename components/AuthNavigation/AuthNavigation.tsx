'use client';

import { logout } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import css from './AuthNavigation.module.css';

const AuthNavigation = () => {
  const router = useRouter();

  const { isAuthenticated, user, isAuthChecked } = useAuthStore();

  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  const handleLogout = async () => {
    await logout();

    clearIsAuthenticated();

    router.push('/sign-in');
  };

  if (!isAuthChecked) {
    return (
      <li className={`${css.userMenu} ${css.authHidden}`} aria-hidden="true">
        <span className={css.userName}>Користувач</span>
        <span className={css.logoutButton}>Вихід</span>
      </li>
    );
  }

  return isAuthenticated ? (
    <>
      <li className={css.authItem}>
        <Link className={css.profileLink} href="/profile">
          Профіль
        </Link>
      </li>

      <li className={css.userMenu}>
        <p className={css.userName}>{user?.userName}</p>

        <button
          className={css.logoutButton}
          type="button"
          onClick={handleLogout}
        >
          Вихід
        </button>
      </li>
    </>
  ) : (
    <>
      <li className={css.authItem}>
        <Link className={css.signInLink} href="/sign-in">
          Увійти
        </Link>
      </li>

      <li className={css.authItem}>
        <Link className={css.signUpLink} href="/sign-up">
          Зареєструватися
        </Link>
      </li>
    </>
  );
};

export default AuthNavigation;
