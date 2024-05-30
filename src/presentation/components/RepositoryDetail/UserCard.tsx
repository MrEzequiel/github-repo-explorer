import { IRepositoryOwner } from "../../../domain/model/Repository.model"

interface IUserCardProps {
  owner: IRepositoryOwner
}

export function UserCard({ owner }: IUserCardProps) {
  return (
    <aside className="w-full h-fit border border-dashed border-gray-600 p-6 flex flex-col gap-2 items-center overflow-hidden">
      <img
        className="w-24 h-24 object-cover"
        src={owner.avatarUrl}
        alt={`image of ${owner.avatarUrl}`}
      />
      <a className="block overflow-hidden text-xl font-bold hover:underline hover:text-purple-400 break-words text-center" href={owner.url} target="_blank">{owner.login}</a>
    </aside>
  )
}
