import { DateTime, URL } from "../../types/semantic"

export interface IReleases {
  id: string
  name: string,
  publishedAt: DateTime,
  tagName: string,
  url: URL,
  author: {
    name: string
    login: string
    avatarUrl: URL
  }
}

export interface IReleasesDTO {
  node: IReleases
}
