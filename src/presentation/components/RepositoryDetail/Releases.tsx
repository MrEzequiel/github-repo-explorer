import { IReleases } from "../../../domain/model/Releases.model";

function ReleaseIcon() {
  return (
    <svg className="w-8 h-8 fill-green-600" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
      <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
    </svg>
  )
}

interface IPullRequestProps {
  releases: IReleases[]
  totalCount: number
}

export function Releases({ releases, totalCount }: IPullRequestProps) {
  return (
    <div>
      <div className="flex gap-2 items-center border-b border-gray-800 pb-2 w-full">
        <h1 className="text-2xl font-bold">Latest Releases</h1>
        <span className="flex justify-center bg-gray-600 text-gray-100 p-1 rounded-full min-w-12">
          {totalCount}
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-6">
        {releases.map((release) => (
          <div key={release.id} className="flex gap-2">
            <div className="pt-2">
              <ReleaseIcon />
            </div>
            <div>
              <a
                href={release.url}
                className="text-lg font-bold hover:underline hover:text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                {release.name}
              </a>
              <p className="text-sm text-gray-400">{release.tagName}</p>
              <div className="flex gap-2">
                <span className="text-sm text-gray-400">📅 {new Date(release.publishedAt).toLocaleDateString('en-US')}</span>
                <span className="text-sm text-gray-400">|</span>
                <div className="flex items-center gap-1">
                  <img src={release.author.avatarUrl} alt={release.author.login} className="w-6 h-6 rounded-full" />
                  <p className="text-sm text-gray-400">
                    {release.author.login}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
