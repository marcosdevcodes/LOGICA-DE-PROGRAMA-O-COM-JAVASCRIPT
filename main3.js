// Encontre a primeira ocorrencia em um array
// Vamos analisar detalhadamente o código que busca o índice de um determinado elemento em um array. O objetivo desse código é encontrar a posição do primeiro elemento igual ao que estamos procurando dentro do array. Caso o elemento não seja encontrado, a função retorna -1. Agora, vamos passar por cada parte do código para entender como ele funciona.

// arr é o primeiro parâmetro, representando o array onde a busca será realizada.
// elemento é o segundo parâmetro, representando o valor que estamos procurando dentro do array.
// Essa função será usada para procurar o índice (posição) do primeiro elemento em arr que seja igual a elemento.
function encontarIndice(arr, elemento){
    //Estrutura de Repetição for
    for(let i = 0; i < arr.length; i++){
        // Aqui, estamos iniciando um loop for que vai percorrer todos os elementos do array arr. Vamos detalhar o que cada parte dessa linha faz:
        // let i = 0;: Declaramos uma variável i com valor inicial 0. i vai representar o índice atual no array durante cada iteração do loop.
        // i < arr.length;: Esta é a condição que mantém o loop ativo. O loop continuará rodando enquanto i for menor que arr.length (o número de elementos no array). A propriedade arr.length nos dá a quantidade total de elementos em arr.
        // i++: A cada iteração do loop, i é incrementado em 1, o que significa que o loop avança para o próximo elemento do array.
    //     O loop for vai percorrer o array arr elemento por elemento, usando o índice i para acessar cada valor dentro do array. Vamos detalhar o que acontece em cada parte do loop:
    // Inicialização (let i = 0;):
    // let i = 0;: No começo, o índice i é definido como 0. Isso significa que a primeira iteração do loop vai começar no primeiro elemento do array (arr[0]).
    // Condição (i < arr.length;):
    // i < arr.length;: Essa condição controla até onde o loop vai rodar. O loop continuará a ser executado enquanto i for menor que arr.length, que é o tamanho total do array. Por exemplo, se o array tiver 7 elementos, arr.length será 7, então o loop vai rodar de i = 0 até i = 6.
    // Incremento (i++):
    // i++: A cada iteração, i é incrementado em 1, o que significa que o loop passa para o próximo elemento do array. Se i começar em 0, na próxima iteração i será 1, depois 2, e assim por diante.

    // Agora, vamos examinar como o loop interage com a condição if em cada iteração.

    // Passo a Passo de Cada Iteração
    // Suponha que o array arr é [1, 2, 3, 4, 5, 2, 3] e o elemento que estamos procurando é 2. Vamos ver como o loop e a condição if trabalham juntos:
    // Primeira Iteração (i = 0):
    // arr[i]: Nesse ponto, i é 0, então arr[i] acessa o primeiro elemento do array, que é 1.
    // if (arr[i] === elemento): A condição verifica se 1 (valor de arr[0]) é igual a 2 (elemento que estamos procurando). Não é, então o if falha, e o loop continua para a próxima iteração.
    // Segunda Iteração (i = 1):
    // arr[i]: Agora, i é 1, então arr[i] acessa o segundo elemento do array, que é 2.
    // if (arr[i] === elemento): A condição verifica se 2 (valor de arr[1]) é igual a 2 (elemento). É, então a condição if é satisfeita.
    // return i;: Como a condição if é verdadeira, a função retorna 1, que é o índice onde 2 foi encontrado no array. A função termina aqui e não continua com as outras iterações.
    // Iterações Futuras (Se o elemento não tivesse sido encontrado):
    // Se o elemento 2 não fosse encontrado nas iterações anteriores, o loop continuaria incrementando i e comparando arr[i] com elemento.
    // Se chegássemos ao final do array sem encontrar o elemento, o loop terminaria e a função retornaria -1, indicando que o elemento não está presente no array.
    // Explicando a Condição if
    // A condição if (arr[i] === elemento) é o que decide se a função deve retornar o índice atual (i). Em cada iteração, arr[i] representa o elemento atual do array, e estamos comparando esse valor com elemento, que é o valor que estamos procurando.
    // Se arr[i] for igual a elemento, significa que encontramos o valor que procuramos, e o loop não precisa continuar; a função pode retornar o índice imediatamente.
    // Se arr[i] não for igual a elemento, o loop simplesmente continua para a próxima iteração, incrementando i e verificando o próximo elemento do array.

        if(arr[i] === elemento){
            return i;
        }
    }

    // Se o loop for terminar e o elemento não tiver sido encontrado (ou seja, o if nunca foi verdadeiro), a função vai alcançar esta linha e retornar -1.

    // O retorno -1 é uma convenção comum para indicar que o elemento não foi encontrado no array.
    return -1;
}

// Vamos agora ver o que acontece fora da função:
// const arr = [1, 2, 3, 4, 5, 2, 3];: Aqui, estamos criando um array chamado arr com os valores [1, 2, 3, 4, 5, 2, 3]. Usamos const porque não pretendemos modificar este array.
// const indice = encontrarIndice(arr, 2);: Chamamos a função encontrarIndice, passando arr e o número 2 como argumentos. O valor retornado pela função (o índice do primeiro 2 no array) é armazenado na variável indice.
// console.log(indice);: Finalmente, usamos console.log para imprimir o valor de indice no console. Como 2 aparece pela primeira vez no índice 1, o valor impresso será 1.

const array = [1, 2, 3, 4, 5, 2, 3];
const indice = encontarIndice(array, 2);
console.log(indice);