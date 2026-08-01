import { cookies } from 'next/headers';
import { ApiError, backendApi } from '../api';
import { NextResponse } from 'next/server';

export async function PATCH(request: Request) {
  const cookieStore = await cookies();

  try {
    const formData = await request.formData();

    const { data } = await backendApi.patch('/users/me/avatar', formData, {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      { status: (error as ApiError).status }
    );
  }
}
