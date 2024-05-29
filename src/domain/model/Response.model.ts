
export interface IError {
  message?: string
  type?: string
}

export interface IResponse<T = unknown> {
  data: T
  errors?: IError[]
}
