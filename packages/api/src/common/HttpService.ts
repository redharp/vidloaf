import Axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

interface IHttpService {
    get<T>(path: string, params: AxiosRequestConfig): Promise<T>;
    patch<T>(path: string, params: AxiosRequestConfig): Promise<T>;
    put<T>(path: string, params: AxiosRequestConfig): Promise<T>;
    post<T>(path: string, params: AxiosRequestConfig): Promise<T>;
    delete<T>(path: string, params: AxiosRequestConfig): Promise<T>;
}

export class HttpService implements IHttpService {
    private instance: HttpService;
    private baseUrl: string;

    constructor(baseUrl: string, auth?: string) {
        this.baseUrl = baseUrl;
    }

    async get<T>(path: string, params: AxiosRequestConfig): Promise<T> {
        throw new Error('Method not implemented.');
    }

    async patch<T>(path: string, params: AxiosRequestConfig): Promise<T> {
        throw new Error('Method not implemented.');
    }

    async put<T>(path: string, params: AxiosRequestConfig): Promise<T> {
        throw new Error('Method not implemented.');
    }

    async post<T>(path: string, params: AxiosRequestConfig): Promise<T> {
        throw new Error('Method not implemented.');
    }

    async delete<T>(path: string, params: AxiosRequestConfig): Promise<T> {
        throw new Error('Method not implemented.');
    }

}
