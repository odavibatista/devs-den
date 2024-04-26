export function formatCEP(cep: string) {
    cep = cep.replace(/\D/g, '')
    cep = cep.substring(0, 5) + '-' + cep.substring(5, 8)
    return cep
}