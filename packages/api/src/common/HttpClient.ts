import Axios, {AxiosRequestConfig} from 'axios';

export class HttpClient {

  private baseUrl: string;
  private authToken: string;
  private instance: HttpClient;

  constructor(baseUrl: string, authToken?: string) {
    if (this.instance) { return this.instance; } else {
      const config: AxiosRequestConfig = {
        url: baseUrl
      }

    }

  }

}