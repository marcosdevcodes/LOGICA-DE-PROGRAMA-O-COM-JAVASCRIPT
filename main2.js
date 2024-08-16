// Verifique se uma string é um palíndromo 
// Vamos analisar detalhadamente o código que verifica se uma palavra é um palíndromo. Um palíndromo é uma palavra ou frase que pode ser lida da mesma maneira de trás para frente, como "madam", "racecar" ou "radar". Agora, vamos passo a passo entender o que cada parte desse código faz.
// Aqui, estamos definindo uma função chamada verificarPalindromo.
// palavra é o parâmetro que a função aceita. Esse 
// parâmetro será uma string, ou seja, uma palavra ou 
// frase que queremos verificar se é um palíndromo.
// O objetivo dessa função é retornar true (verdadeiro) 
// se a palavra for um palíndromo e false (falso) caso 
// contrário.

function verificarPalindromo(palavra){

    // Esta linha é onde a mágica acontece. Vamos dividir essa linha em partes para entender o que cada método faz:
    // palavra.split(''): O método split('') divide a string palavra em um array de caracteres. O argumento '' significa que a string será dividida em cada caractere individualmente.
    // Por exemplo, se palavra for "madam", o resultado de palavra.split('') será o array ['m', 'a', 'd', 'a', 'm'].
    // reverse(): O método reverse() inverte a ordem dos elementos no array.
    // Então, aplicando reverse() ao array ['m', 'a', 'd', 'a', 'm'] resultará em ['m', 'a', 'd', 'a', 'm'].
    // join(''): O método join('') pega todos os elementos do array e os junta novamente em uma única string.
    // Após inverter o array, join('') transforma ['m', 'a', 'd', 'a', 'm'] de volta para "madam".
    // Portanto, toda essa linha (palavra.split('').reverse().join('')) pega a palavra original, inverte-a e a armazena na variável palavraInvertida

    const palavraInvertida = palavra.split(' ').reverse().join('');

    //Aqui, estamos comparando a palavra original (palavra) com a palavra invertida (palavraInvertida) usando o operador de igualdade estrita ===.
    // Se as duas forem iguais, isso significa que a palavra é um palíndromo, e a função retorna true.
    // Se forem diferentes, a palavra não é um palíndromo, e a função retorna false.

    return palavra === palavraInvertida;
}

// const str = "madam";: Aqui, estamos definindo uma constante palavra com o valor "madam", que é a palavra que queremos verificar.
// const ehPalindromo = verificarPalindromo(str);: Chamamos a função verificarPalindromo, passando "madam" como argumento. O resultado da função (true ou false) é armazenado na constante ehPalindromo.
// console.log(ehPalindromo);: Finalmente, usamos console.log para imprimir o valor de ehPalindromo no console. Como "madam" é um palíndromo, o valor impresso será true.

const str = "madam";
const ehPalindromo = verificarPalindromo(str);
console.log(ehPalindromo);