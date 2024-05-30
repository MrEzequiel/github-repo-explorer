import { IPullRequest, IPullRequestDTO } from "../model/PullRequest.model";


export const CreatePullRequests = (dto: IPullRequestDTO[]): IPullRequest[] => {
  return dto.map(({ node }) => {
    return {
      authorLogin: node.author.login,
      title: node.title,
      createdAt: node.createdAt,
      id: node.id,
      url: node.url
    }
  })
}
