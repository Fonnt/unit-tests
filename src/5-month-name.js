const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if (monthNumber > 12 || monthNumber <= 0) return null
  else return months[monthNumber - 1]
}

/* (monthNumber > 12 || monthNumber <= 0) ? null : months[monthNumber - 1] */

