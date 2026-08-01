import axios, { AxiosError } from 'axios';

export type ApiError = AxiosError<{ error: string }>;

export const backendApi = axios.create({
  baseURL: process.env.BACKEND_PUBLIC_API_URL,
  withCredentials: true,
});
