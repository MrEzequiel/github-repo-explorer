import { IPullRequest } from "../../../domain/model/PullRequest.model";
import { URL } from "../../../types/semantic";

function PullRequestIcon() {
  return (
    <svg className="fill-green-600 w-6 h-6" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg>
  )
}

interface IPullRequestProps {
  pullRequests: IPullRequest[]
  totalCount: number
  urlPullRequest: URL
}

export function PullRequests({ pullRequests, totalCount, urlPullRequest }: IPullRequestProps) {
  const hasMorePullRequests = pullRequests.length < totalCount

  return (
    <div>
      <div className="flex gap-2 items-center border-b border-gray-800 pb-2 w-full">
        <h1 className="text-2xl font-bold">Latest Pull Requests</h1>
        <span className="flex justify-center bg-gray-600 text-gray-100 p-1 rounded-full min-w-11">
          {totalCount}
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {pullRequests.map((pullRequest) => (
          <div key={pullRequest.id} className="flex gap-2 py-2 border-b border-gray-900">
            <PullRequestIcon />
            <div>
              <a
                href={pullRequest.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:underline cursor-pointer"
              >
                {pullRequest.title}
              </a>
              <p className="text-gray-400">
                {pullRequest.authorLogin} • {new Date(pullRequest.createdAt).toLocaleString("en-US")}
              </p>
            </div>
          </div>
        ))}

        {hasMorePullRequests && (
          <a href={urlPullRequest} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline cursor-pointer">
            See more
          </a>
        )}
      </div>
    </div>
  )
}
