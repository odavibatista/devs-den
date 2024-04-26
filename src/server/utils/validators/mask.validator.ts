export function emptyMaskValidator (value: string, digits: number): boolean {
    // Remover caracteres não numéricos
    value = value.replace(/\D/g, '')
  
    // Verificar se possui 11 dígitos
    if (value.length !== digits) {
      return false
    }
  
    return true
  }