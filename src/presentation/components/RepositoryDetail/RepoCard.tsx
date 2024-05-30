import { Fragment, useMemo } from "react"
import { IRepository } from "../../../domain/model/Repository.model"

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US")
}

function WithSeparator({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <hr className="my-4 border-gray-900" />
      {children}
    </Fragment>
  )
}

interface IRepoCardProps {
  repository: IRepository
}

export function RepoCard({ repository }: IRepoCardProps) {
  const cardInfo = useMemo(() => {
    return [
      { emoji: "⭐", value: repository.stargazerCount.toLocaleString("en-US"), label: "Stars" },
      { emoji: "🍴", value: repository.forkCount.toLocaleString('en-US'), label: "Forks" },
      { emoji: "📅", value: formatDate(repository.createdAt), label: "Created" },
      { emoji: "📅", value: formatDate(repository.updatedAt), label: "Updated" },
      { emoji: "💡", value: repository.issuesCount.toLocaleString('en-US'), label: "Issues" },
      { emoji: "👁️", value: repository.watchersCount.toLocaleString('en-US'), label: "Watchers" }
    ].filter(({ value }) => value !== undefined && value !== null)
  }, [repository])

  return (
    <main className="col-start-1 col-span-3">
      <div className="flex flex-col p-6 bg-gray-800">
        <a className="text-3xl font-bold hover:underline hover:text-purple-400" href={repository.url} target="_blank" rel="noreferrer">{repository.name}</a>
        <p className="text-sm mt-2">{repository.description}</p>

        <div className="flex gap-x-4 gap-y-2 mt-2 flex-wrap">
          {cardInfo.map(({ emoji, value, label }, index) => (
            <Fragment key={label}>
              <div title={label} className="flex items-center gap-1 flex-shrink-0" aria-label={label}>
                {emoji} {value}
              </div>
              {index < cardInfo.length - 1 && (
                <span className="text-gray-400">•</span>
              )}
            </Fragment>
          ))}
        </div>

        {!!repository.homepageUrl && (
          <WithSeparator>
            <div>
              <p className="text-sm uppercase font-bold text-gray-500 mb-2">Webpage</p>
              <a
                className="block font-bold hover:underline hover:text-purple-400 truncate"
                href={repository.homepageUrl}
                target="_blank"
                rel="noreferrer"
              >
                {repository.homepageUrl}
              </a>
            </div>
          </WithSeparator>
        )}

        {repository.topics.length > 0 && (
          <WithSeparator>
            <div>
              <p className="text-sm uppercase font-bold text-gray-500 mb-2">Topics</p>
              {repository.topics.map((topic) => (
                <span
                  key={topic.id}
                  className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
                >
                  {topic.name}
                </span>
              ))}
            </div>
          </WithSeparator>
        )}

        {!!repository.primaryLanguage && (
          <WithSeparator>
            <div>
              <p className="text-sm uppercase font-bold text-gray-500 mb-2">Language</p>
              <div className="flex items-center">
                <span
                  style={{ backgroundColor: repository.primaryLanguage.color }}
                  className="w-2 h-2 rounded-full block"
                />
                <span className="ml-2">{repository.primaryLanguage.name}</span>
              </div>
            </div>
          </WithSeparator>
        )}
      </div>
    </main>
  )
}
