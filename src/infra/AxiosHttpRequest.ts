import axios, { AxiosInstance } from "axios";


export type HttpRequest = {
  body?: {
    query: string
    variables?: unknown
  }
  headers?: Record<string, string>
}

export abstract class AxiosHttpRequest {
  protected fetcher: AxiosInstance
  constructor () {
    const baseURL = import.meta.env.VITE_GITHUB_GRAPHQL_URL
    const token = import.meta.env.VITE_GITHUB_AUTHORIZATION_TOKEN

    if(!baseURL) throw new Error("VITE_GITHUB_GRAPHQL_URL is not set")
    if(!token) throw new Error("VITE_GITHUB_AUTHORIZATION_TOKEN is not set")

    this.fetcher = axios.create({
      baseURL,
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
      }
    })
  }

  protected async query<T = unknown>(params: HttpRequest) {
    return this.fetcher<T>({
      data: params.body || {},
      headers: params.headers || {},
    })
  }
}
