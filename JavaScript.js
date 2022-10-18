/*
    UNIVERSIDADE FEDERAL DE SERGIPE
    Aluna: Mariana de Jesus Silva

    Tarefa 02
        Segunda Avaliação
        
*/

//Bibliotecas para ler arquivos
const fs = require('fs')
const path = require('path')

//Especifica o nome do arquivo
const caminho = path.join(__dirname, 'dados.txt')

//Fica esperando a leitura do arquivo para avançar no código.
console.log('=== INICIO da leitura do arquivo...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('=== FIM da leitura.\n')

//Funcionalidades
/*Variáveis=
---------------------------------------------------------------
ano_periodo, codigoDisciplina, ch, freq, nota
---------------------------------------------------------------
Funcionalidades = 
---------------------------------------------------------------
Média CH
Desvio Padrão
Aprovações
Reprovações 
CH Cursada
Média de cada departamento
	Departamento & Média
	(codigoDisciplina) & (notas de código de disciplina)*/