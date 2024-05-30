import { IPaginationResponse } from "../model/Pagination";
import { IRepositorySearched, ISearchRepositoriesDTO } from "../model/Repository.model";

export function CreateSearchRepository(dto: ISearchRepositoriesDTO): IPaginationResponse<IRepositorySearched[]> {
  const { pageInfo, repositoryCount, edges } = dto.search;
  return {
    data: edges.map(({ node }) => ({
      description: node.description,
      forkCount: node.forkCount,
      name: node.name,
      stargazerCount: node.stargazerCount,
      url: node.url,
      ownerLogin: node.owner.login,
      ownerAvatarUrl: node.owner.avatarUrl
    })),
    pagination: {
      hasNextPage: pageInfo.hasNextPage,
      hasPreviousPage: pageInfo.hasPreviousPage,
      startCursor: pageInfo.startCursor,
      endCursor: pageInfo.endCursor,
      size: repositoryCount
    }
  }
}
