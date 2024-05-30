import { IRepository, IRepositoryDTO } from "../model/Repository.model";
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
    primaryLanguage: dto.primaryLanguage
  }
}
