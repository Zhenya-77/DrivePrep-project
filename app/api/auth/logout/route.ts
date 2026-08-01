import { cookies } from 'next/headers';
import { backendApi } from '../../api';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = await cookies();

  await backendApi.post('auth/logout', null, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  cookieStore.delete('sessionId');
  cookieStore.delete('accessToken');
  cookieStore.delete('refreshToken');

  return NextResponse.json({ message: 'Logged out successfully' });
}
