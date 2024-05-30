import { CreateRepository } from "../factories/createRepository.factory";
import { CreateSearchRepository } from "../factories/createSearchRepository.factory";
import { IPaginationResponse } from "../model/Pagination";
import { IRepository, IRepositorySearched } from "../model/Repository.model";
import { RepositoryService } from '../services/Repository.service'

interface IRepoRepository {
  searchRepositories(arg: { repositoryName: string, first: number, after?: string }): Promise<IPaginationResponse<IRepositorySearched[]>>
  getRepository(arg: { ownerLogin: string, repositoryName: string }): Promise<IRepository>
}

export class RepoRepository implements IRepoRepository {
  private repositoryService: RepositoryService
  constructor(_repositoryService: RepositoryService) {
    this.repositoryService = _repositoryService
  }

  searchRepositories: IRepoRepository['searchRepositories'] = async (params) => {
    const { data } =
      await this.repositoryService.searchRepositories(params.repositoryName, params.first, params.after)
    return CreateSearchRepository(data)
  }

  getRepository: IRepoRepository['getRepository'] = async (params) => {
    const { data } = await this.repositoryService.getRepository(params.ownerLogin, params.repositoryName)
    return CreateRepository(data.repository)
  }
}

export const RepoRepositoryInstance = new RepoRepository(new RepositoryService())

