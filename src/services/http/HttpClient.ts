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
      timeout: 3000,
    });

    // this.instance.interceptors.response.use(
    //   (response) => {
    //     // Any status code that lie within the range of 2xx cause this function to trigger
    //     // Do something with response data
    //     return new Promise((resolve) => setTimeout(() => resolve(response), 500));
    //   },
    //   (error) => {
    //     // Any status codes that falls outside the range of 2xx cause this function to trigger
    //     // Do something with response error
    //     return Promise.reject(error);
    //   }
    // );
  }

  async get(url: string) {
    const res = await this.instance.get(url);
    return res.data;
  }

  async post(url: string, data: any) {
    const res = await this.instance.post(url, data);
    return res.data;
  }
}

export default HttpClient;
