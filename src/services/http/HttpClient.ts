import axios, { AxiosInstance } from 'axios';

interface HttpInterface {
  get(url: string): void;
  post(url: string, data: any): void;
}

class HttpClient implements HttpInterface {
  instance: AxiosInstance;

  constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 1000,
    });
  }

  get(url: string) {
    return this.instance
      .get(url)
      .then((res) => res.data)
      .catch((error) => error);
  }

  post(url: string, data: any) {
    return this.instance
      .post(url, data)
      .then((res) => res.data)
      .catch((error) => error);
  }
}

export default HttpClient;
