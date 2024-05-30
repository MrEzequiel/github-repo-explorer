import { IRepository, IRepositoryDTO } from "../model/Repository.model";
import { CreatePullRequests } from "./createPullRequests.factory";
import { CreateTopic } from "./createTopic.factory";

export const CreateRepository = (dto: IRepositoryDTO): IRepository => {
  return {
    createdAt: dto.createdAt,
    description: dto.description,
    forkCount: dto.forkCount,
    homepageUrl: dto.homepageUrl,
    name: dto.name,
    owner: dto.owner,
    stargazerCount: dto.stargazerCount,
    topics: CreateTopic(dto.repositoryTopics),
    updatedAt: dto.updatedAt,
    url: dto.url,
    issuesCount: dto.issues.totalCount,
    watchersCount: dto.watchers.totalCount,
    primaryLanguage: dto.primaryLanguage,
    pullRequests: CreatePullRequests(dto.pullRequests.edges),
    pullRequestCount: dto.pullRequests.totalCount
  }
}
