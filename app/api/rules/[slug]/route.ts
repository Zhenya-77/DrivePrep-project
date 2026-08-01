import { NextRequest, NextResponse } from 'next/server';
import { ApiError, backendApi } from '../../api';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: NextRequest, { params }: Props) {
  const { slug } = await params;
  const page = request.nextUrl.searchParams.get('page');
  const perPage = request.nextUrl.searchParams.get('perPage');
  try {
    const { data } = await backendApi(`/rules/${slug}`, {
      params: {
        page,
        perPage,
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
      { status: (error as ApiError).status ?? 500 }
    );
  }
}
