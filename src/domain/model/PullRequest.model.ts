import { DateTime, URL } from "../../types/semantic"

export interface IPullRequestDTO {
  node: {
    author: {
      login: string
    },
    title: string,
    createdAt: DateTime,
    id: string,
    url: URL,
  }
}

export interface IPullRequest {
  authorLogin: string
  title: string
  createdAt: DateTime
  id: string
  url: URL
}
