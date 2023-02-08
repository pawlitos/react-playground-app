import httpClient from './httpClient';

export const getUsers = () => {
  return httpClient.get('users');
};

export const getUser = (userId: number) => {
  return httpClient.get(`users/${userId}`);
};
