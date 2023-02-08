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
