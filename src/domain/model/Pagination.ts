export interface IPageInfo {
  endCursor?: string
  startCursor?: string
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface IPaginationDTO<T = unknown> {
  edges: T
  totalCount: number
  pageInfo: IPageInfo
}

export interface IPaginationInfo extends IPageInfo {
  size: number
}

export interface IPaginationResponse<T = unknown> {
  data: T
  pagination: IPaginationInfo
}

