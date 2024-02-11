let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista') 

let res = document.querySelector('div#res')
let valores = []

//Iremos verificar se o valor já foi encontrado na lista array

// Criar 2 duas funções: isNumero que vai receber o numero e inLista para saber se o numero está na determinada lista.


// Função para verificar se é um número
function isNumero(n) {

// Recebe um parâmetro  (Aula de Vetores)
// verificar se n é um número


    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

// Função para verificar se está na lista
function inLista(n, l) {

// Recebe dois parâmetros (Aula de Vetores)
// Se na lista o number de N for diferente de -1 (indica que o valor não for encontrado na lista)

    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    // Validação de campo usando CONDICIONAIS
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        // Criar elementos de forma dinâmica usando o document.createElement
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na Lista');
    }
    num.value = ''
    num.focus()
}


// BOTÃO FINALIZAR
function finalizar() {
    //1º Validação de campo 
        if (valores.length == 0) {
            window.alert('Adicione valoresa antes de finalizar') 
        }else{
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            
            // Laço de percurso (Aula de Array)
            for (let pos in valores) {
                soma += valores[pos]
                if(valores [pos] > maior)
                maior = valores [pos]
            if (valores[pos] < menor)
                 menor = valores[pos]
            }

            media = soma / tot
            //Mostrar resultado abaixo res.innerHTML
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temo ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
            res.innerHTML += `<p>A média é ${media}.</p>`
        }


}

let familia = [12,34,45,5,7]

console.log(familia);