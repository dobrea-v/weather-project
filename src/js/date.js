function getDateToday () {
  const now = new Date()
  let hours = now.getHours()
  let minute = now.getMinutes()
  let day = now.getDay()
  let month = now.getMonth()
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  if (hours >= 0 && hours <= 9) {
    hours = `0${hours}`
  }
  if (minute >= 0 && minute <= 9) {
    minute = `0${minute}`
  }
  if (month) {
    month = months[month]
  }
  if (day) {
    day = days[day]
  }

  document.querySelector('.date').innerHTML = `${day}, ${hours}:${minute}`
}

export default getDateToday
