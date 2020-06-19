const checkLeadingZero = value => {
  return value < 10 ? `0${value}` : value
}

module.exports = checkLeadingZero