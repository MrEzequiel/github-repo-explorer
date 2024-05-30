import { IPaginationDTO } from "../model/Pagination";
import { IReleases, IReleasesDTO } from "../model/Releases.model";

export function CreateReleases(dto: IPaginationDTO<IReleasesDTO[]>): IReleases[] {
  return dto.edges.map((edge) => edge.node)
}
