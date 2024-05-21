import { IGetJob } from "@/api/endpoints/jobs/getSingleJob.endpoint"
export function jobModalityParser (job: IGetJob) {
    if (job.job.modality === 'remote') job.job.modality = 'Remoto'
    if (job.job.modality === 'hybrid') job.job.modality = 'Híbrido'
    if (job.job.modality === 'presential') job.job.modality = 'Presencial'

    if (job.job.contract === 'pj') job.job.contract = 'PJ'
    if (job.job.contract === 'clt') job.job.contract = 'CLT'
    if (job.job.contract === 'intern') job.job.contract = 'Estágio'
}