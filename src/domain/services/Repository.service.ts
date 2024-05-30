import { AxiosHttpRequest } from "../../infra/AxiosHttpRequest";
import { NotFound } from "../errors/NotFound";
import { UnexpectedError } from "../errors/UnexpectedError";
import { IGetRepositoryResponse, ISearchRepositoriesDTO } from "../model/Repository.model";
import { IResponse } from "../model/Response.model";

interface IRepositoryService {
  searchRepositories(repositoryName: string, first: number, after?: string): Promise<IResponse<ISearchRepositoriesDTO>>
  getRepository(ownerLogin: string, repositoryName: string): Promise<IGetRepositoryResponse>
}

export class RepositoryService extends AxiosHttpRequest implements IRepositoryService {
  constructor () {
    super()
  }

  async searchRepositories(repositoryName: string, first: number, after?: string) {
    try {
      const { data } = await this.query<IResponse<ISearchRepositoriesDTO>>({
        body: {
          query: `
          query($repoName: String!, $first: Int, $after: String) {
            search(query: $repoName, type: REPOSITORY, first: $first, after: $after) {
              repositoryCount
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
              edges {
                node {
                  ... on Repository {
                    name
                    owner {
                      login
                      avatarUrl
                    }
                    description
                    url
                    stargazerCount
                    forkCount
                  }
                }
              }
            }
          }`,
          variables: {
            repoName: repositoryName,
            first,
            after
          }
        }
      })
      return data
    } catch (error) {
      throw new UnexpectedError()
    }
  }

  async getRepository(ownerLogin: string, repositoryName: string) {
    try {
      const { data } = await this.query<IGetRepositoryResponse>({
        body: {
          query: `
          query($ownerLogin: String!, $name: String!) {
            repository(owner: $ownerLogin, name: $name) {
              name
              homepageUrl
              owner {
                login
                avatarUrl
                url
              }
              description
              url
              createdAt
              updatedAt
              stargazerCount
              forkCount
              issues(states: OPEN) {
                totalCount
              }
              watchers {
                totalCount
              }
              primaryLanguage {
                color
                id
                name
              }
              repositoryTopics(first: 10) {
                edges {
                  node {
                    topic {
                      id
                      name
                    }
                    id
                  }
                }
              }
            }
          }`,
          variables: {
            ownerLogin,
            name: repositoryName
          }
        }
      })
      if(data.errors) {
        throw new NotFound(`Repository ${repositoryName} not found on ${ownerLogin}`)
      }
      return data
    } catch (error) {
      if(error instanceof NotFound) throw error
      throw new UnexpectedError()
    }
  }
}
