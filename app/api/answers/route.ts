import { NextRequest, NextResponse } from 'next/server';
import { ApiError, backendApi } from '../api';

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const { data } = await backendApi.post('/answers/check', body);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      { status: (error as ApiError).status ?? 500 }
    );
  }
}
