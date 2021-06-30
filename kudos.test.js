const kudos = require('./kudos');

test('test getKudosForUser', () => {
  expect(kudos.getKudosForUser(30)).toEqual(['GOOD', 'NICE']);
  expect(kudos.getKudosForUser(40)).toEqual(['GOOD', 'GOOD']);
  expect(kudos.getKudosForUser(100)).toEqual(['SUPER']);

  // More tests
  expect(kudos.getKudosForUser(0)).toEqual([]);
  expect(kudos.getKudosForUser(5)).toEqual(['OK']);
  expect(kudos.getKudosForUser(10)).toEqual(['NICE']);
  expect(kudos.getKudosForUser(20)).toEqual(['GOOD']);
  expect(kudos.getKudosForUser(50)).toEqual(['GREAT']);
  expect(kudos.getKudosForUser(100)).toEqual(['SUPER']);

  expect(kudos.getKudosForUser(135)).toEqual(['SUPER', 'GOOD', 'NICE', 'OK']);
  expect(kudos.getKudosForUser(40)).toEqual(['GOOD', 'GOOD']);
  expect(kudos.getKudosForUser(1000)).toEqual(['SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER'
    , 'SUPER', 'SUPER', 'SUPER', 'SUPER', 'SUPER']);
});

test('test getKudosValueMessageForUser', () => {
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(0)))
  .toEqual('Você recebeu zero reais em retorno aos kudos !');

  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(30)))
    .toEqual('Você recebeu treze reais em retorno aos kudos GOOD, NICE!');

  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(135)))
    .toEqual('Você recebeu quarenta reais em retorno aos kudos SUPER, GOOD, NICE, OK!');


  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(40)))
    .toEqual('Você recebeu dezesseis reais em retorno aos kudos GOOD, GOOD!');

  // More tests
  // R$ 2,00
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(5)))
    .toEqual('Você recebeu dois reais em retorno aos kudos OK!');

  // R$ 7,00
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(15)))
    .toEqual('Você recebeu sete reais em retorno aos kudos NICE, OK!');

  // R$ 13,00
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(30)))
    .toEqual('Você recebeu treze reais em retorno aos kudos GOOD, NICE!');

  // R$ 18,00
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(45)))
    .toEqual('Você recebeu dezoito reais em retorno aos kudos GOOD, GOOD, OK!');

  // R$ 15,00
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(50)))
    .toEqual('Você recebeu quinze reais em retorno aos kudos GREAT!');

  // R$ 23,00
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(70)))
    .toEqual('Você recebeu vinte e três reais em retorno aos kudos GREAT, GOOD!');

  // R$ 100,00
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(400)))
    .toEqual('Você recebeu cem reais em retorno aos kudos SUPER, SUPER, SUPER, SUPER!');

  // R$ 115,00
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(450)))
    .toEqual('Você recebeu cento e quinze reais em retorno aos kudos SUPER, SUPER, SUPER, SUPER, GREAT!');

  // R$ 1000,00
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(4000)))
    .toEqual('Você recebeu mil reais em retorno aos kudos SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, \
SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, \
SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER!');

 // R$ 1015,00
 expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(4050)))
 .toEqual('Você recebeu mil e quinze reais em retorno aos kudos SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, \
SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, \
SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, GREAT!');

// R$ 1115,00
 expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(4450)))
 .toEqual('Você recebeu mil cento e quinze reais em retorno aos kudos SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, \
SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, \
SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, \
SUPER, SUPER, SUPER, SUPER, GREAT!');

// R$ 1123,00
expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(4470)))
.toEqual('Você recebeu mil cento e vinte e três reais em retorno aos kudos SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, \
SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, \
SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, \
SUPER, SUPER, SUPER, SUPER, GREAT, GOOD!');
});
