import { RepoRepository, RepoRepositoryInstance } from "../repositories/Repo.repository";

const CreateGetRepository = (repository: RepoRepository) =>
  (ownerLogin: string, repositoryName: string) => repository.getRepository({
    ownerLogin,
    repositoryName
  });

export const getRepository = CreateGetRepository(RepoRepositoryInstance); 
