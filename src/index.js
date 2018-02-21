module.exports = function solveEquation(equation) {
  let mult = equation.replace(/\s/g, '').match(/[^\^]\d+/g)
  let answer = [0, 0]

  let det = Math.sqrt(mult[1]*mult[1] - 4*mult[0]*mult[2])
  answer[0] = Math.round( (-1)*mult[1] - det ) / (2*mult[0])
  answer[1] = Math.round( (-1)*mult[1] + det ) / (2*mult[0])
  answer.sort((l, r) => {return l-r} )
  return answer
}
