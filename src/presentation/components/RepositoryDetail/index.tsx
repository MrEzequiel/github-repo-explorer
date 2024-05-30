import { IRepository } from "../../../domain/model/Repository.model";
import { RepoCard } from "./RepoCard";
import { UserCard } from "./UserCard";

interface IRepositoryDetailProps {
  repository: IRepository
}

export function RepositoryDetail({ repository }: IRepositoryDetailProps) {
  return (
    <div className="sm:grid sm:grid-cols-4 gap-4 flex flex-col">
      <main className="col-start-1 col-span-3">
        <RepoCard repository={repository} />
      </main>

      <UserCard owner={repository.owner} />
    </div>
  )
}
