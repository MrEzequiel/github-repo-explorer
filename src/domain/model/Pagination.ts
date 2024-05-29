export interface IPaginationInfo {
  endCursor?: string
  startCursor?: string
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface IPaginationDTO<T = unknown> {
  edges: T
  pageInfo: IPaginationInfo
}

export interface IPagination<T = unknown> {
  data: T
  pagination: IPaginationInfo & {
    size: number
  }
}
