import { AxiosResponse } from 'axios';

import api from './api';

interface IBody {
  username: string;
  password: string;
}

interface IResponse {
  token: string;
}

export const login = (username: string, password: string) => {
  return api.post<IBody, AxiosResponse<IResponse>>(
    '/api/auth/login',
    {
      username,
      password,
    }
  );
};
