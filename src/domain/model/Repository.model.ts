import { DateTime, URL } from "../../types/semantic"
import {  IPaginationDTO } from "./Pagination"
import { IResponse } from "./Response.model"
import { ITopic, ITopicDTO } from "./Topic.model"

export interface IRepositorySearchedDTO {
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


export interface IRepositoryCore {
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

export interface IRepository extends IRepositoryCore {
  topics: ITopic[]
}

export interface IRepositoryDTO extends IRepositoryCore {
  repositoryTopics: IPaginationDTO<ITopicDTO[]>
}

export type ISearchRepositoriesDTO = {
  search: IPaginationDTO<IRepositorySearchedDTO[]> & {
    repositoryCount: number
  }
}

export type IGetRepositoryResponse = IResponse<{
  repository: IRepositoryDTO
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
