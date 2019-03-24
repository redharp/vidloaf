import Axios, { AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios';

export interface IHttpService {
    get<T>(path?: string, params?: AxiosRequestConfig): Promise<T>;
    patch<T>(path?: string, params?: AxiosRequestConfig): Promise<T>;
    put<T>(path?: string, params?: AxiosRequestConfig): Promise<T>;
    post<T>(path?: string, params?: AxiosRequestConfig): Promise<T>;
    delete<T>(path?: string, params?: AxiosRequestConfig): Promise<T>;
}

export class HttpService implements IHttpService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get<T>(path?: string, params?: AxiosRequestConfig): Promise<T> {
        const url: string = this.baseUrl + path;
        const result = await Axios.get<T>(url, params);
        return result.data;
    }

    async patch<T>(path?: string, params?: AxiosRequestConfig): Promise<T> {
        throw new Error('Method not implemented.');
    }

    async put<T>(path?: string, params?: AxiosRequestConfig): Promise<T> {
        throw new Error('Method not implemented.');
    }

    async post<T>(path?: string, params?: AxiosRequestConfig): Promise<T> {
        throw new Error('Method not implemented.');
    }

    async delete<T>(path?: string, params?: AxiosRequestConfig): Promise<T> {
        throw new Error('Method not implemented.');
    }

}
