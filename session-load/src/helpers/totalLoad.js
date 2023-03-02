import findLoad from "./load";

const findTotalLoad = (climbsArray) => {
  let total = 0
  climbsArray.forEach((climb) => {
    total += findLoad(climb.attempts, climb.grade).reduce((a, c) => a + c)
  })
  return total
};

export default findTotalLoad;
