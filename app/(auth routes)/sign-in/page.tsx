'use client';

import { ApiError } from '@/app/api/api';
import Container from '@/components/Container/Container';
import { login, LoginRequest } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import css from './SignIn.module.css';
import { useAuthStore } from '@/lib/store/authStore';

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = useState('');

  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues = Object.fromEntries(formData) as LoginRequest;
      const res = await login(formValues);

      if (res) {
        setUser(res);
        router.push('/profile');
      } else {
        setError('Не вірний пароль або пошта');
      }
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          'Сталася помилка'
      );
    }
  };

  return (
    <main className={css.main}>
      <Container>
        <section className={css.section}>
          <div className={css.card}>
            <h1 className={css.title}>Вхід</h1>

            <p className={css.description}>
              Увійдіть до свого облікового запису, щоб продовжити навчання.
            </p>

            <form className={css.form} action={handleSubmit}>
              <label className={css.field} htmlFor="email">
                <span className={css.label}>Пошта</span>

                <input
                  className={css.input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  autoComplete="email"
                  required
                />
              </label>

              <label className={css.field} htmlFor="password">
                <span className={css.label}>Пароль</span>

                <input
                  className={css.input}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Введіть пароль"
                  autoComplete="current-password"
                  required
                />
              </label>

              {error && <p className={css.error}>{error}</p>}

              <button className={css.button} type="submit">
                Увійти
              </button>
            </form>
          </div>
        </section>
      </Container>
    </main>
  );
}
