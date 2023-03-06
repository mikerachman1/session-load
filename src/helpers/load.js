const findLoad = (attemptsArray, grade) => {
  return attemptsArray.map(attempt => attempt * grade);
}

export default findLoad