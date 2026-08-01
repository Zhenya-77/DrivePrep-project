import { cookies } from 'next/headers';
import { NextServer } from './api';
import { User } from './clientApi';

export interface Category {
  title: string;
  slug: string;
  description: string;
  _id: string;
}

export interface Rule {
  _id: string;
  category: string;
  title: string;
  content: string;
  image: string;
}

export type Answer = {
  _id: string;
  text: string;
};

export type Question = {
  _id: string;
  question: string;
  image?: string | null;
  answers: Answer[];
  explanation: string;
};

export type QuestionsResponse = {
  questions: Question[];
  category: Category;
};

export type CheckAnswerRequest = {
  questionId: string;
  answerId: string;
};

export type CheckAnswerResponse = {
  isCorrect: boolean;
  explanation: string;
};

export async function checkServerSession() {
  const cookieStore = await cookies();
  const res = await NextServer.get('/auth/session', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res;
}

export async function getServerMe(): Promise<User> {
  const cookieStore = await cookies();
  const { data } = await NextServer.get<User>('/auth/me', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return data;
}

export async function getQuestionsByCategory(slug: string) {
  const cookieStore = await cookies();

  const { data } = await NextServer.get<QuestionsResponse>(`/tests/${slug}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return data;
}
