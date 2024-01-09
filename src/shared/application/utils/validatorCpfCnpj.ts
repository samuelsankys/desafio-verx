export function validateCNPJ(cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]+/g, '')

  if (cnpj === '') return false

  if (cnpj.length !== 14) {
    return false
  }

  if (
    cnpj === '00000000000000' ||
    cnpj === '11111111111111' ||
    cnpj === '22222222222222' ||
    cnpj === '33333333333333' ||
    cnpj === '44444444444444' ||
    cnpj === '55555555555555' ||
    cnpj === '66666666666666' ||
    cnpj === '77777777777777' ||
    cnpj === '88888888888888' ||
    cnpj === '99999999999999'
  ) {
    return false
  }

  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho)
  const digitos = cnpj.substring(tamanho)
  let soma = 0
  let pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i), 10) * pos--
    if (pos < 2) {
      pos = 9
    }
  }
  const resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado !== parseInt(digitos.charAt(0), 10)) {
    return false
  }

  tamanho = tamanho + 1
  numeros = cnpj.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i), 10) * pos--
    if (pos < 2) {
      pos = 9
    }
  }
  const resultado2 = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado2 !== parseInt(digitos.charAt(1), 10)) {
    return false
  }

  return true
}

export function validateCPF(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]+/g, '')
  if (cpf === '') return false

  if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false
  }

  const numeros = cpf.match(/\d/g)!.map(Number)
  let soma = numeros.reduce((acc, cur, idx) => {
    if (idx < 9) {
      return acc + cur * (10 - idx)
    }
    return acc
  }, 0)

  let resto = (soma * 10) % 11

  if (resto === 10 || resto === 11) {
    resto = 0
  }

  if (resto !== numeros[9]) {
    return false
  }

  soma = numeros.reduce((acc, cur, idx) => {
    if (idx < 10) {
      return acc + cur * (11 - idx)
    }
    return acc
  }, 0)

  resto = (soma * 10) % 11

  if (resto === 10 || resto === 11) {
    resto = 0
  }

  if (resto !== numeros[10]) {
    return false
  }

  return true
}
