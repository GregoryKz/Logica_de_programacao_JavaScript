// Exercício 01 – Ler dois valores e mostrar a soma
function exercicio01() {
  let a = Number(prompt("Digite o primeiro valor:"));
  let b = Number(prompt("Digite o segundo valor:"));
  alert("Soma: " + (a + b));
}

// Exercício 02 – Ler um valor e mostrar o antecessor
function exercicio02() {
  let valor = Number(prompt("Digite um valor:"));
  alert("Antecessor: " + (valor - 1));
}

// Exercício 03 – Área do retângulo
function exercicio03() {
  let base = Number(prompt("Digite a base:"));
  let altura = Number(prompt("Digite a altura:"));
  alert("Área do retângulo: " + (base * altura));
}

// Exercício 04 – Idade em dias
function exercicio04() {
  let anos = Number(prompt("Anos:"));
  let meses = Number(prompt("Meses:"));
  let dias = Number(prompt("Dias:"));
  let total = anos * 365 + meses * 30 + dias;
  alert("Idade em dias: " + total);
}

// Exercício 05 – Percentual de votos
function exercicio05() {
  let total = Number(prompt("Total de eleitores:"));
  let brancos = Number(prompt("Votos brancos:"));
  let nulos = Number(prompt("Votos nulos:"));
  let validos = Number(prompt("Votos válidos:"));

  alert("Brancos: " + (brancos / total * 100).toFixed(2) + "%");
  alert("Nulos: " + (nulos / total * 100).toFixed(2) + "%");
  alert("Válidos: " + (validos / total * 100).toFixed(2) + "%");
}

// Exercício 06 – Novo salário com reajuste
function exercicio06() {
  let salario = Number(prompt("Salário atual:"));
  let reajuste = Number(prompt("Percentual de reajuste:"));
  let novo = salario + (salario * reajuste / 100);
  alert("Novo salário: R$ " + novo.toFixed(2));
}

// Exercício 07 – Custo final do carro
function exercicio07() {
  let custo = Number(prompt("Custo de fábrica:"));
  let distribuidor = custo * 0.28;
  let impostos = custo * 0.45;
  alert("Custo final: R$ " + (custo + distribuidor + impostos).toFixed(2));
}

// Exercício 08 – Conversão de temperatura (F → C)
function exercicio08() {
  let f = Number(prompt("Temperatura em Fahrenheit:"));
  let c = (f - 32) * 5 / 9;
  alert("Temperatura em Celsius: " + c.toFixed(2));
}

// Exercício 09 – Média de duas notas
function exercicio09() {
  let n1 = Number(prompt("Nota 1:"));
  let n2 = Number(prompt("Nota 2:"));
  alert("Média: " + ((n1 + n2) / 2));
}

// Exercício 10 – Produto de dois valores
function exercicio10() {
  let a = Number(prompt("Digite o primeiro valor:"));
  let b = Number(prompt("Digite o segundo valor:"));
  alert("Produto: " + (a * b));
}

// Exercício 11 – Volume de uma caixa retangular
function exercicio11() {
  let comprimento = Number(prompt("Comprimento:"));
  let largura = Number(prompt("Largura:"));
  let altura = Number(prompt("Altura:"));
  alert("Volume: " + (comprimento * largura * altura));
}

// Exercício 12 – Quadrado da soma
function exercicio12() {
  let a = Number(prompt("Valor A:"));
  let b = Number(prompt("Valor B:"));
  alert("Resultado: " + Math.pow(a + b, 2));
}

// Exercício 13 – Soma dos quadrados
function exercicio13() {
  let a = Number(prompt("Valor A:"));
  let b = Number(prompt("Valor B:"));
  alert("Resultado: " + (a * a + b * b));
}

// Exercício 14 – Quadrado da diferença
function exercicio14() {
  let a = Number(prompt("Valor A:"));
  let b = Number(prompt("Valor B:"));
  alert("Resultado: " + Math.pow(a - b, 2));
}

// Exercício 15 – Conversão dólar → real
function exercicio15() {
  let dolar = Number(prompt("Valor em dólar:"));
  let cotacao = Number(prompt("Cotação do dólar:"));
  alert("Valor em reais: R$ " + (dolar * cotacao).toFixed(2));
}

// Exercício 16 – Prestação em atraso
function exercicio16() {
  let valor = Number(prompt("Valor da prestação:"));
  let taxa = Number(prompt("Taxa de juros (%):"));
  let tempo = Number(prompt("Tempo de atraso:"));
  let prestacao = valor + (valor * taxa / 100 * tempo);
  alert("Valor da prestação: R$ " + prestacao.toFixed(2));
}

// Exercício 17 – Troca de valores
function exercicio17() {
  let a = Number(prompt("Valor A:"));
  let b = Number(prompt("Valor B:"));
  let temp = a;
  a = b;
  b = temp;
  alert("Novo A: " + a + " | Novo B: " + b);
}

// Exercício 18 – Cálculo do salário total
function exercicio18() {
  let salario = Number(prompt("Salário fixo:"));
  let vendas = Number(prompt("Total de vendas:"));
  let total = salario + (vendas * 0.15);
  alert("Salário total: R$ " + total.toFixed(2));
}

// Exercício 19 – Média ponderada
function exercicio19() {
  let n1 = Number(prompt("Nota 1:"));
  let n2 = Number(prompt("Nota 2:"));
  let n3 = Number(prompt("Nota 3:"));
  let media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
  alert("Média ponderada: " + media);
}

// Exercício 20 – Valor da hipotenusa
function exercicio20() {
  let a = Number(prompt("Cateto A:"));
  let b = Number(prompt("Cateto B:"));
  let h = Math.sqrt(a * a + b * b);
  alert("Hipotenusa: " + h.toFixed(2));
}
// Exercício 21 – Maior de dois valores
function exercicio21() {
  let a = Number(prompt("Digite o primeiro valor:"));
  let b = Number(prompt("Digite o segundo valor:"));

  if (a > b) {
    alert("Maior valor: " + a);
  } else {
    alert("Maior valor: " + b);
  }
}

// Exercício 22 – Menor de dois valores
function exercicio22() {
  let a = Number(prompt("Digite o primeiro valor:"));
  let b = Number(prompt("Digite o segundo valor:"));

  if (a < b) {
    alert("Menor valor: " + a);
  } else {
    alert("Menor valor: " + b);
  }
}

// Exercício 23 – Maior de três valores
function exercicio23() {
  let a = Number(prompt("Digite A:"));
  let b = Number(prompt("Digite B:"));
  let c = Number(prompt("Digite C:"));

  let maior = a;
  if (b > maior) maior = b;
  if (c > maior) maior = c;

  alert("Maior valor: " + maior);
}

// Exercício 24 – Valores em ordem crescente
function exercicio24() {
  let a = Number(prompt("Digite A:"));
  let b = Number(prompt("Digite B:"));
  let c = Number(prompt("Digite C:"));

  let valores = [a, b, c];
  valores.sort((x, y) => x - y);

  alert("Ordem crescente: " + valores.join(", "));
}

// Exercício 25 – Verificar se valor é positivo ou negativo
function exercicio25() {
  let valor = Number(prompt("Digite um valor:"));

  if (valor >= 0) {
    alert("Valor positivo");
  } else {
    alert("Valor negativo");
  }
}

// Exercício 26 – Verificar se pode votar
function exercicio26() {
  let anoNascimento = Number(prompt("Ano de nascimento:"));
  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - anoNascimento;

  if (idade >= 16) {
    alert("Pode votar");
  } else {
    alert("Não pode votar");
  }
}

// Exercício 27 – Média e aprovação
function exercicio27() {
  let n1 = Number(prompt("Nota 1:"));
  let n2 = Number(prompt("Nota 2:"));
  let media = (n1 + n2) / 2;

  if (media >= 7) {
    alert("Aprovado - Média: " + media);
  } else {
    alert("Reprovado - Média: " + media);
  }
}

// Exercício 28 – Valor maior que 10
function exercicio28() {
  let valor = Number(prompt("Digite um valor:"));

  if (valor > 10) {
    alert("É maior que 10");
  } else {
    alert("Não é maior que 10");
  }
}

// Exercício 29 – Positivo, negativo ou zero
function exercicio29() {
  let valor = Number(prompt("Digite um valor:"));

  if (valor > 0) {
    alert("Positivo");
  } else if (valor < 0) {
    alert("Negativo");
  } else {
    alert("Zero");
  }
}

// Exercício 30 – Maior ou menor que 100
function exercicio30() {
  let valor = Number(prompt("Digite um valor:"));

  if (valor > 100) {
    alert("Maior que 100");
  } else {
    alert("Menor ou igual a 100");
  }
}

// Exercício 31 – Verificar se número é par ou ímpar
function exercicio31() {
  let valor = Number(prompt("Digite um número:"));

  if (valor % 2 === 0) {
    alert("Par");
  } else {
    alert("Ímpar");
  }
}

// Exercício 32 – Maior valor e diferença
function exercicio32() {
  let a = Number(prompt("Digite A:"));
  let b = Number(prompt("Digite B:"));

  if (a > b) {
    alert("Maior: " + a + " | Diferença: " + (a - b));
  } else {
    alert("Maior: " + b + " | Diferença: " + (b - a));
  }
}

// Exercício 33 – Verificar se número está no intervalo
function exercicio33() {
  let valor = Number(prompt("Digite um valor:"));

  if (valor >= 10 && valor <= 20) {
    alert("Está no intervalo");
  } else {
    alert("Fora do intervalo");
  }
}

// Exercício 34 – Média e exame
function exercicio34() {
  let n1 = Number(prompt("Nota 1:"));
  let n2 = Number(prompt("Nota 2:"));
  let media = (n1 + n2) / 2;

  if (media >= 7) {
    alert("Aprovado");
  } else if (media >= 5) {
    alert("Exame");
  } else {
    alert("Reprovado");
  }
}

// Exercício 35 – Desconto em compra
function exercicio35() {
  let valor = Number(prompt("Valor da compra:"));

  if (valor >= 100) {
    alert("Valor com desconto: R$ " + (valor * 0.9).toFixed(2));
  } else {
    alert("Valor sem desconto: R$ " + valor.toFixed(2));
  }
}

// Exercício 36 – Salário com aumento
function exercicio36() {
  let salario = Number(prompt("Salário atual:"));

  if (salario < 1000) {
    salario *= 1.2;
  } else {
    salario *= 1.1;
  }

  alert("Novo salário: R$ " + salario.toFixed(2));
}

// Exercício 37 – Verificar múltiplo
function exercicio37() {
  let a = Number(prompt("Digite A:"));
  let b = Number(prompt("Digite B:"));

  if (a % b === 0) {
    alert("É múltiplo");
  } else {
    alert("Não é múltiplo");
  }
}

// Exercício 38 – Peso ideal
function exercicio38() {
  let altura = Number(prompt("Altura (m):"));
  let sexo = prompt("Sexo (M/F):").toUpperCase();

  let peso;
  if (sexo === "M") {
    peso = (72.7 * altura) - 58;
  } else {
    peso = (62.1 * altura) - 44.7;
  }

  alert("Peso ideal: " + peso.toFixed(2));
}

// Exercício 39 – Aposentadoria
function exercicio39() {
  let idade = Number(prompt("Idade:"));
  let tempo = Number(prompt("Tempo de trabalho:"));

  if (idade >= 65 || tempo >= 30 || (idade >= 60 && tempo >= 25)) {
    alert("Pode se aposentar");
  } else {
    alert("Não pode se aposentar");
  }
}

// Exercício 40 – Classificação do nadador
function exercicio40() {
  let idade = Number(prompt("Idade:"));

  if (idade >= 5 && idade <= 7) {
    alert("Infantil A");
  } else if (idade <= 10) {
    alert("Infantil B");
  } else if (idade <= 13) {
    alert("Juvenil A");
  } else if (idade <= 17) {
    alert("Juvenil B");
  } else {
    alert("Adulto");
  }
}
// Exercício 41 – Mostrar números de 1 a 10
function exercicio41() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

// Exercício 42 – Mostrar números de 1 a 100
function exercicio42() {
  let i = 1;
  while (i <= 100) {
    console.log(i);
    i++;
  }
}

// Exercício 43 – Mostrar números de 100 a 1
function exercicio43() {
  let i = 100;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}

// Exercício 44 – Mostrar números pares de 1 a 100
function exercicio44() {
  let i = 2;
  while (i <= 100) {
    console.log(i);
    i += 2;
  }
}

// Exercício 45 – Mostrar números ímpares de 1 a 100
function exercicio45() {
  let i = 1;
  while (i <= 100) {
    console.log(i);
    i += 2;
  }
}

// Exercício 46 – Soma dos números de 1 a 100
function exercicio46() {
  let i = 1;
  let soma = 0;

  while (i <= 100) {
    soma += i;
    i++;
  }

  alert("Soma: " + soma);
}

// Exercício 47 – Ler 10 valores e mostrar a soma
function exercicio47() {
  let i = 1;
  let soma = 0;

  while (i <= 10) {
    soma += Number(prompt("Digite o " + i + "º valor:"));
    i++;
  }

  alert("Soma total: " + soma);
}

// Exercício 48 – Ler 10 valores e mostrar a média
function exercicio48() {
  let i = 1;
  let soma = 0;

  while (i <= 10) {
    soma += Number(prompt("Digite o " + i + "º valor:"));
    i++;
  }

  alert("Média: " + (soma / 10));
}

// Exercício 49 – Ler valores até digitar zero
function exercicio49() {
  let valor;
  let soma = 0;

  while (true) {
    valor = Number(prompt("Digite um valor (0 para sair):"));
    if (valor === 0) break;
    soma += valor;
  }

  alert("Soma dos valores: " + soma);
}

// Exercício 50 – Contar valores positivos
function exercicio50() {
  let i = 1;
  let positivos = 0;

  while (i <= 10) {
    let valor = Number(prompt("Digite o " + i + "º valor:"));
    if (valor > 0) positivos++;
    i++;
  }

  alert("Quantidade de positivos: " + positivos);
}

// Exercício 51 – Contar valores negativos
function exercicio51() {
  let i = 1;
  let negativos = 0;

  while (i <= 10) {
    let valor = Number(prompt("Digite o " + i + "º valor:"));
    if (valor < 0) negativos++;
    i++;
  }

  alert("Quantidade de negativos: " + negativos);
}

// Exercício 52 – Maior valor entre 10 números
function exercicio52() {
  let i = 1;
  let maior = Number(prompt("Digite o 1º valor:"));
  i++;

  while (i <= 10) {
    let valor = Number(prompt("Digite o " + i + "º valor:"));
    if (valor > maior) maior = valor;
    i++;
  }

  alert("Maior valor: " + maior);
}

// Exercício 53 – Menor valor entre 10 números
function exercicio53() {
  let i = 1;
  let menor = Number(prompt("Digite o 1º valor:"));
  i++;

  while (i <= 10) {
    let valor = Number(prompt("Digite o " + i + "º valor:"));
    if (valor < menor) menor = valor;
    i++;
  }

  alert("Menor valor: " + menor);
}

// Exercício 54 – Média dos valores positivos
function exercicio54() {
  let i = 1;
  let soma = 0;
  let count = 0;

  while (i <= 10) {
    let valor = Number(prompt("Digite o " + i + "º valor:"));
    if (valor > 0) {
      soma += valor;
      count++;
    }
    i++;
  }

  alert("Média dos positivos: " + (count > 0 ? soma / count : 0));
}

// Exercício 55 – Ler idade até idade negativa
function exercicio55() {
  let idade;

  while (true) {
    idade = Number(prompt("Digite a idade (negativa para sair):"));
    if (idade < 0) break;
  }

  alert("Programa encerrado");
}

// Exercício 56 – Média das idades
function exercicio56() {
  let idade;
  let soma = 0;
  let count = 0;

  while (true) {
    idade = Number(prompt("Digite a idade (negativa para sair):"));
    if (idade < 0) break;
    soma += idade;
    count++;
  }

  alert("Média das idades: " + (count > 0 ? soma / count : 0));
}

// Exercício 57 – Contar maiores de idade
function exercicio57() {
  let idade;
  let maiores = 0;

  while (true) {
    idade = Number(prompt("Digite a idade (negativa para sair):"));
    if (idade < 0) break;
    if (idade >= 18) maiores++;
  }

  alert("Maiores de idade: " + maiores);
}

// Exercício 58 – Tabuada de um número
function exercicio58() {
  let n = Number(prompt("Digite um número:"));
  let i = 1;

  while (i <= 10) {
    console.log(n + " x " + i + " = " + (n * i));
    i++;
  }
}

// Exercício 59 – Fatorial
function exercicio59() {
  let n = Number(prompt("Digite um número:"));
  let fatorial = 1;

  while (n > 1) {
    fatorial *= n;
    n--;
  }

  alert("Fatorial: " + fatorial);
}

// Exercício 60 – Sequência de Fibonacci
function exercicio60() {
  let n = Number(prompt("Quantidade de termos:"));
  let a = 0, b = 1, i = 1;

  while (i <= n) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
    i++;
  }
}
// Exercício 61 – Mostrar números de 1 a 10
function exercicio61() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Exercício 62 – Mostrar números de 1 a 100
function exercicio62() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// Exercício 63 – Mostrar números de 100 a 1
function exercicio63() {
  for (let i = 100; i >= 1; i--) {
    console.log(i);
  }
}

// Exercício 64 – Mostrar números pares de 1 a 100
function exercicio64() {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
}

// Exercício 65 – Mostrar números ímpares de 1 a 100
function exercicio65() {
  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
  }
}

// Exercício 66 – Soma dos números de 1 a 100
function exercicio66() {
  let soma = 0;
  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  alert("Soma: " + soma);
}

// Exercício 67 – Ler 10 valores e mostrar a soma
function exercicio67() {
  let soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += Number(prompt("Digite o " + i + "º valor:"));
  }
  alert("Soma total: " + soma);
}

// Exercício 68 – Ler 10 valores e mostrar a média
function exercicio68() {
  let soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += Number(prompt("Digite o " + i + "º valor:"));
  }
  alert("Média: " + (soma / 10));
}

// Exercício 69 – Maior valor entre 10 números
function exercicio69() {
  let maior = Number(prompt("Digite o 1º valor:"));
  for (let i = 2; i <= 10; i++) {
    let valor = Number(prompt("Digite o " + i + "º valor:"));
    if (valor > maior) maior = valor;
  }
  alert("Maior valor: " + maior);
}

// Exercício 70 – Menor valor entre 10 números
function exercicio70() {
  let menor = Number(prompt("Digite o 1º valor:"));
  for (let i = 2; i <= 10; i++) {
    let valor = Number(prompt("Digite o " + i + "º valor:"));
    if (valor < menor) menor = valor;
  }
  alert("Menor valor: " + menor);
}

// Exercício 71 – Contar valores positivos
function exercicio71() {
  let positivos = 0;
  for (let i = 1; i <= 10; i++) {
    let valor = Number(prompt("Digite o " + i + "º valor:"));
    if (valor > 0) positivos++;
  }
  alert("Quantidade de positivos: " + positivos);
}

// Exercício 72 – Contar valores negativos
function exercicio72() {
  let negativos = 0;
  for (let i = 1; i <= 10; i++) {
    let valor = Number(prompt("Digite o " + i + "º valor:"));
    if (valor < 0) negativos++;
  }
  alert("Quantidade de negativos: " + negativos);
}

// Exercício 73 – Média dos valores positivos
function exercicio73() {
  let soma = 0;
  let count = 0;
  for (let i = 1; i <= 10; i++) {
    let valor = Number(prompt("Digite o " + i + "º valor:"));
    if (valor > 0) {
      soma += valor;
      count++;
    }
  }
  alert("Média dos positivos: " + (count > 0 ? soma / count : 0));
}

// Exercício 74 – Tabuada
function exercicio74() {
  let n = Number(prompt("Digite um número:"));
  for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
  }
}

// Exercício 75 – Fatorial
function exercicio75() {
  let n = Number(prompt("Digite um número:"));
  let fatorial = 1;
  for (let i = n; i > 1; i--) {
    fatorial *= i;
  }
  alert("Fatorial: " + fatorial);
}

// Exercício 76 – Sequência de Fibonacci
function exercicio76() {
  let n = Number(prompt("Quantidade de termos:"));
  let a = 0, b = 1;
  for (let i = 1; i <= n; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
}

// Exercício 77 – Contar números pares de 1 a 100
function exercicio77() {
  let count = 0;
  for (let i = 2; i <= 100; i += 2) {
    count++;
  }
  alert("Quantidade de pares: " + count);
}

// Exercício 78 – Soma dos números pares de 1 a 100
function exercicio78() {
  let soma = 0;
  for (let i = 2; i <= 100; i += 2) {
    soma += i;
  }
  alert("Soma dos pares: " + soma);
}

// Exercício 79 – Soma dos números ímpares de 1 a 100
function exercicio79() {
  let soma = 0;
  for (let i = 1; i <= 100; i += 2) {
    soma += i;
  }
  alert("Soma dos ímpares: " + soma);
}

// Exercício 80 – Mostrar quadrados de 1 a 10
function exercicio80() {
  for (let i = 1; i <= 10; i++) {
    console.log("Número: " + i + " | Quadrado: " + (i * i));
  }
}

