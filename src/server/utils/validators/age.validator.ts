export function ageValidator    (birthDate: Date) {
    const today = new Date()
    const birthYear = birthDate.getFullYear()
    const birthMonth = birthDate.getMonth()
    const birthDay = birthDate.getDate()
  
    const todayYear = today.getFullYear()
    const todayMonth = today.getMonth()
    const todayDay = today.getDate()
  
    let age = todayYear - birthYear
  
    if (todayMonth < birthMonth || (todayMonth === birthMonth && todayDay < birthDay)) {
        age--;
    }
  
    return age >= 18 && age <= 120
  }