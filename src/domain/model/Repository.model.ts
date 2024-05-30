import { DateTime, URL } from "../../types/semantic"
import {  IPaginationDTO } from "./Pagination"
import { IResponse } from "./Response.model"

export interface IRepositoryDTO {
  node: {
    description: string
    forkCount: number
    name: string
    owner: {
      login: string
      avatarUrl: URL
    }
    stargazerCount: number
    url: URL
  }
}

export interface IRepositoryOwner {
  avatarUrl: URL
  login: string
  url: URL
}

export interface IRepository {
  description: string | null
  forkCount: number
  homepageUrl: URL
  url: URL
  name: string
  owner: IRepositoryOwner
  stargazerCount: number
  createdAt: DateTime
  updatedAt: DateTime
}

export type ISearchRepositoriesDTO = {
  search: IPaginationDTO<IRepositoryDTO[]> & {
    repositoryCount: number
  }
}

export type IGetRepositoryResponse = IResponse<{
  repository: IRepository
}>

export interface IRepositorySearched {
  description: string | null
  forkCount: number
  name: string
  stargazerCount: number
  url: string
  ownerLogin: string
  ownerAvatarUrl: string
}
