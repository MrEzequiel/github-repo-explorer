import { selectRepositoriesState } from "../../../features/repo/repoSlice"
import { useAppSelector } from "../../../store"
import { RepositoryError } from "../components/RepositoryError"
import { RepositoryLoading } from "../components/RepositoryLoading"
import { Repository } from "./repository"

interface IRepositoriesProps {
  onLoadMore: () => void
}

export function Repositories({ onLoadMore }: IRepositoriesProps) {
  const { error, loading, repositories, pageInfo } = useAppSelector(selectRepositoriesState)

  return (
    <section className="flex-1 max-w-screen-2xl px-9 mx-auto py-12 mb-16">
      {!repositories && loading && <RepositoryLoading />}

      {!!error && <RepositoryError message={'Something went wrong'} />}

      {!!repositories && !!repositories.length && (
        <div>
          <ul
            className="grid gap-6 mb-8"
            role="list"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
          >
            {repositories.map((repository) => (
              <Repository repository={repository} key={`${repository.ownerLogin}/${repository.name}`} />
            ))}

            {loading && <RepositoryLoading />}
          </ul>

          {pageInfo.hasNextPage && (
            <button
              className="w-full bg-purple-500 text-white font-bold text-lg py-3 disabled:opacity-70"
              onClick={onLoadMore}
              disabled={loading}
            >
              Load More
            </button>
          )}
        </div>
      )}

      {!!repositories && !repositories.length && (
        <div className="flex gap-1 flex-col items-center">
          <p className="text-5xl font-bold text-purple-500">404</p>
          <p className="text-lg">No repositories found</p>
        </div>
      )}
    </section>
  )
}
