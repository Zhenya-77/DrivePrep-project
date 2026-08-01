'use client';

import AvatarPicker from '@/components/AvatarPicker/AvatarPicker';
import Container from '@/components/Container/Container';
import { getMe, updateMe, uploadImage } from '@/lib/api/clientApi';
import { useEffect, useState } from 'react';
import css from './Edit.module.css';
import { useRouter } from 'next/navigation';

export default function EditProfile() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    getMe().then((user) => {
      setUserName(user.userName ?? '');
      setPhotoUrl(user.avatar ?? '');
    });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSaveUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateMe({ userName });

      if (imageFile) {
        await uploadImage(imageFile);
      }

      router.push('/profile');
      router.refresh();
    } catch (error) {
      console.error('Oops, some error:', error);
    }
  };

  return (
    <main className={css.page}>
      <Container>
        <div className={css.wrapper}>
          <h1 className={css.title}>Редагування профілю</h1>

          <AvatarPicker
            profilePhotoUrl={photoUrl}
            onChangePhoto={setImageFile}
          />

          <form className={css.form} onSubmit={handleSaveUser}>
            <input
              className={css.input}
              type="text"
              value={userName}
              onChange={handleChange}
            />

            <button className={css.button} type="submit">
              Зберегти зміни
            </button>
          </form>
        </div>
      </Container>
    </main>
  );
}
