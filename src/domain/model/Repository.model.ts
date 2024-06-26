import { DateTime, URL } from "../../types/semantic"
import { ILanguage } from "./Language.model"
import { IPaginationDTO } from "./Pagination"
import { IPullRequest, IPullRequestDTO } from "./PullRequest.model"
import { IReleases, IReleasesDTO } from "./Releases.model"
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
  primaryLanguage: ILanguage | null
  stargazerCount: number
  createdAt: DateTime
  updatedAt: DateTime
}

export interface IRepository extends IRepositoryCore {
  topics: ITopic[]
  watchersCount: number
  issuesCount: number
  pullRequests: IPullRequest[]
  releases: IReleases[]
  releasesCount: number
  pullRequestCount: number
}

export interface IRepositoryDTO extends IRepositoryCore {
  repositoryTopics: IPaginationDTO<ITopicDTO[]>
  pullRequests: IPaginationDTO<IPullRequestDTO[]>
  releases: IPaginationDTO<IReleasesDTO[]>
  watchers: {
    totalCount: number
  }
  issues: {
    totalCount: number
  }
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
