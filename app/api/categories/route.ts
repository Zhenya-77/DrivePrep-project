import { NextResponse } from 'next/server';
import { ApiError, backendApi } from '../api';

export async function GET() {
  try {
    const { data } = await backendApi('/categories');

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
