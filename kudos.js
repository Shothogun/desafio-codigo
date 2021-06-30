
var extenso = require('extenso')

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
  kudo2pointsReversed.forEach((kudoObj, index) => {
    let times = Math.floor(points / kudoObj.value)
    kudoHistogram.push(times)
    points = points - (times * kudoObj.value)
  })

  // Given the kudos amount, an array with the 
  // given amount lenght is filled with the
  // correspondent kudo
  let kudo = kudoHistogram.map((freq, index) =>
    Array(freq).fill(kudo2pointsReversed[index].name)
  ).flat()

  return kudo
}

/* 
  Recebe: Recebe um array contendo os nomes dos kudos de um usuário. Ex.: ['OK', 'GOOD']
  Retorna: a mensagem padrão com o valor em reais dos kudos por extenso. Ex.: Parabéns, você ganhou vinte e cinco reais
*/
function getKudosValueMessageForUser(kudos) {
  // Exception case: no Kudo!
  if (kudos.length == 0){
    return "Você recebeu zero reais em retorno aos kudos !"
  }

  var findKudo2ReaisValue = (kudoName) =>
    KUDOS_TO_REAL.find(obj => obj.name == kudoName).value

  var reais = kudos.reduce((total, kudoName) =>
    total + findKudo2ReaisValue(kudoName)
    , 0)

  var head = kudos[0]
  var tail = []

  if (kudos.length > 1) {
    tail = kudos.slice(1).map(el => " "+el)
    tail[0] = ',' + tail[0]
  }

  var message = "Você recebeu " + extenso(reais, { mode: 'currency' }) +
    " em retorno aos kudos " + head + tail + "!"

  return message
}

// function number2Words(value) {
//   let numberInWords = ""
//   let digitList = getDigits(value)

//   let hundredNumber = digitList[0] != 0 ||
//     digitList[1] != 0 ||
//     digitList[2] != 0

//   let thousandNumber = digitList[2] == 1 &&
//     digitList[3] == 0 &&
//     digitList[4] == 0 && 
//     digitList[5] == 0 

//   // Exemplos a testar: 1001, 1100, 1101, 1199, 1200
//   numberInWords += thousandNumber ? ""
//     : parseHundreds2Word(digitList[0], digitList[1], digitList[2])
//   numberInWords += thousandNumber || (!hundredNumber) ? "" : " " 
//   numberInWords += hundredNumber ? ("mil") : "";

//   hundredNumber = digitList[3] != 0 ||
//     digitList[4] != 0 ||
//     digitList[5] != 0

//   numberInWords += numberInWords == "" ? "" :
//     hundredNumber ? " " : ""

//   numberInWords += parseHundreds2Word(digitList[3], digitList[4], digitList[5])
//   return numberInWords
// }

// function parseHundreds2Word(hundred, dozen, unit) {
//   let units = ["", "um", "dois", "tres", "quatro", "cinco"
//     , "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze"
//     , "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]

//   let dozenM10 = ["", "", "vinte", "trinta", "quarenta", "cinquenta"
//     , "sessenta", "setenta", "oitenta", "noventa", "cem"]

//   let hundreds = ["", "cento", "duzentos", "trezentos", "quatrocentos"
//     , "quinhentos", "seiscentos", "setecentos"
//     , "oitocentos", "novecentos"]

//   let numberInWords = ""
//   let simpleHundredNumber = hundred == 1 &&
//     dozen == 0 &&
//     unit == 0

//   let unitE = (dozen > 1) && (unit != 0) || (hundred != 0 && dozen == 0) && (unit != 0)
//   let dozenE = (hundred != 0 && (dozen != 0))

//   numberInWords += simpleHundredNumber ? ("cem") :
//     (hundred != 0) ? (hundreds[hundred]) : "";
//   numberInWords += dozenE ? " e " : ""
//   numberInWords += (dozen != 0) ?
//     ((units[dozen * 10 + unit] ||
//       dozenM10[dozen])) : "";
//   numberInWords += unitE ? " e " : ""
//   numberInWords += (dozen != 1 && unit != 0) ? (units[unit]) : ""

//   return numberInWords
// }

// function getDigits(value) {
//   let digitList = []
//   const DIGITS_SIZE = 6

//   while (value > 0) {
//     digitList.push(value % 10)
//     value = Math.floor(value / 10)
//   }

//   while (digitList.length < DIGITS_SIZE) {
//     digitList.push(0)
//   }

//   digitList.reverse()

//   return digitList
// }

module.exports = {
  getKudosForUser,
  getKudosValueMessageForUser,
};
