function getDateToday () {
  const dateGlobal = new Date()
  let minutMM = dateGlobal.getMinutes()
  if (minutMM >= 0 && minutMM <= 9) {
    minutMM = `0${minutMM}`
  }

  document.querySelector('.date').innerHTML = `${dateGlobal.getDate()}-${dateGlobal.getMonth() + 1}`
  document.querySelector('.time').innerHTML = `${dateGlobal.getHours()}:${minutMM}`
}
export default getDateToday