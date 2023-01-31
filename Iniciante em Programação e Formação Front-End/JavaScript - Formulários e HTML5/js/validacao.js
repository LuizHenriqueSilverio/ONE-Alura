export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
    }else{
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemErro(tipoDeInput, input);
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagemDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },

    email: {
        valueMissing: 'O campo email não pode estar vazio.',
        typeMismatch: 'O email digitado não é valido.'
    },

    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 e 12 caracteres, deve conter pelo menos uma letra maiúscula, uma letra mínuscula, um número e não deve conter caracteres especiais.'
    },

    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },

    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        customError: 'O CPF digitado não é válido.'
    },

    cep: {
        valueMissing: 'O campo de CEP não pode estar vazio',
        patternMismatch: 'O CEP digitado não é válido.',
        customError: 'Não foi possível buscar o CEP'
    },

    logradouro: {
        valueMissing: 'O campo de logradouro não pode estar vazio.'
    },

    cidade: {
        valueMissing: 'O campo de logradouro não pode estar vazio.'
    },

    estado: {
        valueMissing: 'O campo de logradouro não pode estar vazio.'
    },

    preco: {
        valueMissing: 'O campo de preço não pode estar vazio.'
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input),
    cpf:input => validaCPF(input),
    cep:input => recuperarCEP(input)
}

const mostraMensagemErro = (tipoDeInput, input) => {
    let mensagem = '';

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagemDeErro[tipoDeInput][erro];
        }
    });

    return mensagem;
}

const validaDataNascimento = (input) => {
    const dataRecebida = new Date(input.value);
    let mensagem = '';

    if (maiorDeIdade(dataRecebida) == false){
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.';
    }

    input.setCustomValidity();
}

const maiorDeIdade = (data) => {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataMais18 <= dataAtual;
}

const checaCPFRepetido = (cpf) => {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    let cpfValido = true;

    valoresRepetidos.forEach(valor => {
        if(valor == cpf){
            cpfValido == false;
        }
    });

    return cpfValido;
}

function validaCPF(input){
    const cpfFormatado = input.value.replace(/\D/g, '');
    let mensagem = '';

    if(!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)){
        mensagem = 'O CPF digitado não é válido';
    }

    input.setCustomValidity(mensagem);
}

// Verifica se um CPF é válido de acordo com a lógica matemática de formação de CPF

const checaEstruturaCPF = (cpf) => {
    const multiplicador = 10;

    return checaDigitoVerificador(cpf, multiplicador);
}

const checaDigitoVerificador = (cpf, multiplicador) => {
    if(multiplicador >= 12){
        return true;
    }

    let multiplicadorInicial = multiplicador;
    let soma = 0;
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('');
    const digitoVerificador = cpf.charAt(multiplicador - 1);

    for(let contador = 0; multiplicadorInicial > 1; multiplicadorInicial--){
        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial;
        contador++;
    }

    if(digitoVerificador == confirmaDigito(soma)){
        return checaDigitoVerificador(cpf, multiplicador + 1);
    }else{
        return false;
    }
}

const confirmaDigito = (soma) => {
    return 11 - (soma % 11);
}

// Validação de CEP com a API da ViaCEP

const recuperarCEP = (input) => {
    const cep = input.value.replace(/\D/g, '');
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    }

    if(!input.validity.patternMismatch && !input.validity.valueMissing){
        fetch(url, options).then(
            response => response.json()
        ).then(
            (data) => {
                if(data.erro){
                    input.setCustomValidity('Não foi possível buscar o CEP');
                    return;
                }
                input.setCustomValidity('');
                preencheCamposCEP(data);
                return;
            }
        );
    }

}

const preencheCamposCEP = (data) => {
    const logradouro = document.querySelector('[data-tipo="logradouro"]');
    const cidade = document.querySelector('[data-tipo="cidade"]');
    const estado = document.querySelector('[data-tipo="estado"]');

    logradouro.value = data.logradouro;
    cidade.value = data.localidade;
    estado.value = data.uf;
}
