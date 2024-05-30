import { IRepositorySearched } from "../../../domain/model/Repository.model";

interface IRepositoryProps {
  repository: IRepositorySearched
}

export function Repository({ repository }: IRepositoryProps) {
  const description = repository?.description &&
    repository?.description.length > 150 ?
    repository?.description.substring(0, 150) + "..." :
    repository?.description

  return (
    <li className="border-y border-x border-gray-400 p-4 flex gap-4 cursor-pointer hover:bg-gray-800 transition-colors hover:shadow-lg" onClick={console.log}>
      <img
        className="w-24 h-24 object-cover"
        src={repository.ownerAvatarUrl}
        alt={`image of ${repository.ownerLogin}/${repository.name}`}
      />

      <div className="max-w-sm overflow-hidden">
        <a
          href={repository.url}
          target="_blank"
          rel="noreferrer"
          className="block font-bold text-base hover:underline hover:text-purple-500 cursor-pointer leading-tight break-words"
          onClick={(e) => e.stopPropagation()}
        >
          {repository.ownerLogin} / {repository.name}
        </a>
        <p className="text-sm text-gray-400 mt-1 break-words">{description}</p>

        <div className="flex gap-4 flex-wrap mt-2">
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold">{repository.stargazerCount.toLocaleString('en')}</span>
            <span className="text-sm font">⭐</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold">{repository.forkCount.toLocaleString('en')}</span>
            <span className="text-sm font">🍴</span>
          </div>
        </div>
      </div>
    </li>
  )
}
