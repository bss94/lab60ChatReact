import {Message} from './types';

export const getRequest = async (url: string, method: string = "GET"): Promise<Message[]> => {
  const response = await fetch(url, {method: method});
  if (response.ok) {
    return response.json();
  }
  throw new Error('Network Error:' + response.status);
};