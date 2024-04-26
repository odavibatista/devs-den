export function formatPhone(phone: string) {
    phone = phone.replace(/\D/g, '')
    if (phone.length === 11) {
        return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    } else {
        return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    }
}