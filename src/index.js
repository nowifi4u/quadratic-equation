module.exports = function solveEquation(equation) {
  let solution = equation.replace(/\s/g, '').match(/[^\^]\d+/g)
  let answer = [0, 0]

  let det = Math.sqrt(solution[1]*solution[1] - 4*solution[0]*solution[2])
  answer[0] = Math.round( (-1)*solution[1] - det ) / (2*solution[0])
  answer[1] = Math.round( (-1)*solution[1] + det ) / (2*solution[0])
  answer.sort((l, r) => {return l-r} )
  return answer
}
