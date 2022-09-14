import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
// import { toast } from 'react-toastify';

// import { API_BASE_URL } from 'constants/env';
// import { STORAGE_PERSIST_KEY } from 'constants/env';

interface IAuthenticatedUser {
  token: string;
  username: string;
}

// const storageKey = STORAGE_PERSIST_KEY;

const removeAuthenticatedUserFromStorage = () => {
//   window['localStorage'].removeItem(storageKey);
};

const getAuthenticatedUserFromStorage = (): string | null => {
  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();
  return isBrowser ? window['localStorage'][''] : null;
};

const customAxios = axios.create({
  baseURL: "",
  responseType: 'json',
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const useRequestHandler = (request: AxiosRequestConfig) => {
  const authenticatedUserString = getAuthenticatedUserFromStorage();
  if (authenticatedUserString) {
    const authenticatedUser: IAuthenticatedUser = JSON.parse(authenticatedUserString);
    const headers = {
      Authorization: `${authenticatedUser.token}`,
    };
    request.headers = { ...request?.headers, ...headers };
  }
  return request;
};

const useResponseHandler = (response: AxiosResponse) => {
  return response;
};

const usErrorHandler = (error: AxiosError) => {
  if (error.response?.status === 401) {
    // toast.error('Please login again');
    removeAuthenticatedUserFromStorage();
    const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();
    isBrowser && window.location.replace('/sign-in');
  }
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => useRequestHandler(request),
  (error) => usErrorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => useResponseHandler(response),
  (error) => usErrorHandler(error)
);

export default customAxios;
