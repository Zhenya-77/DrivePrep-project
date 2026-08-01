'use client';

import { ApiError } from '@/app/api/api';
import Container from '@/components/Container/Container';
import { register, RegisterRequest } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import css from './SignUp.module.css';
import { useAuthStore } from '@/lib/store/authStore';

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState('');

  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues = Object.fromEntries(formData) as RegisterRequest;

      const res = await register(formValues);

      if (res) {
        setUser(res);
        router.push('/profile');
      } else {
        setError('Не вдалося зареєструватися');
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
            <h1 className={css.title}>Реєстрація</h1>

            <p className={css.description}>
              Створіть обліковий запис, щоб зберігати прогрес навчання.
            </p>

            <form className={css.form} action={handleSubmit}>
              <label className={css.field} htmlFor="userName">
                <span className={css.label}>Ім’я</span>

                <input
                  className={css.input}
                  id="userName"
                  name="userName"
                  type="text"
                  placeholder="Введіть ім’я"
                  autoComplete="name"
                  required
                />
              </label>

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
                  autoComplete="new-password"
                  minLength={6}
                  required
                />
              </label>

              {error && <p className={css.error}>{error}</p>}

              <button className={css.button} type="submit">
                Зареєструватися
              </button>
            </form>
          </div>
        </section>
      </Container>
    </main>
  );
}
