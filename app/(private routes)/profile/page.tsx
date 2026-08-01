import Container from '@/components/Container/Container';
import { getServerMe } from '@/lib/api/serverApi';
import css from './Profile.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default async function Profile() {
  const user = await getServerMe();

  return (
    <main className={css.main}>
      <Container>
        <section className={css.profile}>
          <div className={css.profileHeader}>
            <div className={css.avatar}>
              {user?.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.userName ?? 'User avatar'}
                  width={80}
                  height={80}
                  className={css.avatarImage}
                />
              ) : (
                <span aria-hidden="true">
                  {user?.userName?.charAt(0).toUpperCase() ?? 'U'}
                </span>
              )}
            </div>

            <div className={css.userInfo}>
              <h1 className={css.title}>{user?.userName ?? 'Користувач'}</h1>

              <p className={css.email}>{user?.email ?? 'Email не вказано'}</p>
              <Link className={css.editLink} href="/profile/edit">
                Редагування профілю
              </Link>
            </div>
          </div>

          <div className={css.stats}>
            <div className={css.statCard}>
              <span className={css.statValue}>0</span>
              <span className={css.statLabel}>Вивчено правил</span>
            </div>

            <div className={css.statCard}>
              <span className={css.statValue}>0</span>
              <span className={css.statLabel}>Завершено категорій</span>
            </div>

            <div className={css.statCard}>
              <span className={css.statValue}>0</span>
              <span className={css.statLabel}>Пройдено тестів</span>
            </div>
          </div>

          <div className={css.actions}>
            <Link className={css.primaryLink} href="/rules">
              Перейти до правил
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
