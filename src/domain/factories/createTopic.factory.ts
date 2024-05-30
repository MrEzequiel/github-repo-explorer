import { IPaginationDTO } from "../model/Pagination";
import { ITopic, ITopicDTO } from "../model/Topic.model";

export function CreateTopic(dto: IPaginationDTO<ITopicDTO[]>): ITopic[] {
  return dto.edges.map((edge) => edge.node.topic)
}
