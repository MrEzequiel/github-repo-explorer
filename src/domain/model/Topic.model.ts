export interface ITopic {
  name: string
  id: string
}


export interface ITopicDTO {
  node: {
    topic: ITopic
    id: string
  }
}
