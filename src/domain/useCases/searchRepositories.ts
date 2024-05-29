import { RepoRepository, RepoRepositoryInstance } from "../repositories/Repo.repository";

const CreateSearchRepository = (repository: RepoRepository) =>
  (repositoryName: string, first: number, after?: string) => repository.searchRepositories({
    repositoryName,
    after,
    first,
  });

export const searchRepository = CreateSearchRepository(RepoRepositoryInstance); 
