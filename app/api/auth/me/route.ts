import { cookies } from 'next/headers';
import { ApiError, backendApi } from '../../api';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = await cookies();

  try {
    const { data } = await backendApi.get('/auth/me', {
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
      { status: (error as ApiError).response?.status ?? 500 }
    );
  }
}

export async function PATCH(request: Request) {
  const cookieStore = await cookies();
  const body = await request.json();

  try {
    const { data } = await backendApi.patch('/users/me', body, {
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
      { status: (error as ApiError).response?.status ?? 500 }
    );
  }
}
