import { IGetJob } from "@/api/routes/jobs/getSingleJob";

export function jobModalityParser (job: IGetJob) {
    if (job.job.modality === 'remote') job.job.modality = 'Remoto'
    if (job.job.modality === 'hybrid') job.job.modality = 'Híbrido'
    if (job.job.modality === 'presential') job.job.modality = 'Presencial'
}