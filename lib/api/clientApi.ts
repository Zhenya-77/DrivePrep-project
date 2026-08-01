import { NextServer } from './api';
import {
  Category,
  CheckAnswerRequest,
  CheckAnswerResponse,
  Rule,
} from './serverApi';

export type RegisterRequest = {
  email: string;
  password: string;
  userName: string;
};

export interface User {
  id: string;
  email: string;
  userName?: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}

export type LoginRequest = {
  email: string;
  password: string;
};

type CheckSessionRequest = {
  success: boolean;
};

interface RulesAndCategory {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  category: Category;
  rules: Rule[];
}

export type UpdateUserRequest = {
  userName?: string;
};

export async function register(data: RegisterRequest) {
  const res = await NextServer.post<User>('/auth/register', data);

  return res.data;
}

export async function login(data: LoginRequest) {
  const res = await NextServer.post<User>('/auth/login', data);

  return res.data;
}

export async function checkSession() {
  const res = await NextServer.get<CheckSessionRequest>('/auth/session');

  return res.data.success;
}

export async function getMe() {
  const { data } = await NextServer.get<User>('/auth/me');

  return data;
}

export async function logout(): Promise<void> {
  await NextServer.post('/auth/logout');
}

export async function getRulesBySlug(
  slug: string,
  page: number,
  perPage: number
) {
  const res = await NextServer.get<RulesAndCategory>(`/rules/${slug}`, {
    params: {
      page,
      perPage,
    },
  });

  return res.data;
}

export async function updateMe(payload: UpdateUserRequest) {
  const res = await NextServer.patch<User>('/auth/me', payload);

  return res.data;
}

export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('avatar', file);

  const { data } = await NextServer.patch('/upload', formData);

  return data.url;
}

export async function checkAnswer(data: CheckAnswerRequest) {
  const res = await NextServer.post<CheckAnswerResponse>('/answers', data);

  return res.data;
}
