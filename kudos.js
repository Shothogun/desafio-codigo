// Conversão de kudos para pontos
const KUDOS_TO_POINTS = [
  { name: 'OK', value: 5 },
  { name: 'NICE', value: 10 },
  { name: 'GOOD', value: 20 },
  { name: 'GREAT', value: 50 },
  { name: 'SUPER', value: 100 },
];

// Conversão de kudos para reais
const KUDOS_TO_REAL = [
  { name: 'OK', value: 2 },
  { name: 'NICE', value: 5 },
  { name: 'GOOD', value: 8 },
  { name: 'GREAT', value: 15 },
  { name: 'SUPER', value: 25 },
];

/* 
  Recebe: um int representando o número de pontos do usuário
  Retorna: um array contendo os kudos. Ex.: ['OK', 'GOOD'] 
*/
function getKudosForUser(points) {
  let kudo2pointsReversed = [...KUDOS_TO_POINTS]
  kudo2pointsReversed = kudo2pointsReversed.reverse()

  // Express how many kudos will be required to 
  // a certain amount of points
  var kudoHistogram = []
  
  // For each Kudo, computes how many kudos 
  // is used for the remaining amount of points
  kudo2pointsReversed.forEach((kudoObj,index)=>{
    let times = Math.floor(points/kudoObj.value)
    kudoHistogram.push(times)
    points = points-(times*kudoObj.value)
  })

  // Given the kudos amount, an array with the 
  // given amount lenght is filled with the
  // correspondent kudo
  let kudo =  kudoHistogram.map((freq, index)=>
    Array(freq).fill(kudo2pointsReversed[index])
  ).flat()

  return kudo
}

/* 
  Recebe: Recebe um array contendo os nomes dos kudos de um usuário. Ex.: ['OK', 'GOOD']
  Retorna: a mensagem padrão com o valor em reais dos kudos por extenso. Ex.: Parabéns, você ganhou vinte e cinco reais
*/
function getKudosValueMessageForUser(kudos) { }

module.exports = {
  getKudosForUser,
  getKudosValueMessageForUser,
};
