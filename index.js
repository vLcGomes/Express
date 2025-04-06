const express = require('express')
const app = express()
const saudacao = require('./saudacaoMid')
const bodyParser = require('body-parser')

app.use(saudacao('Jorge'))

// Atende a todas as requisições independente da URL
// app.use((req, res, next) => {
//   res.send('Iniciando...')
//   next()
// })

// Parametro NEXT é uma função que permite dar sequencia a requisições diferente realizadas na mesma URL

// app.use((req, res, next) => {
//   res.send('Ok.')
//   next()
// })

// Funciona de Forma Similar ao METODO use
// -----------------------------------------
// app.all((req, res) => {
//   res.send('Testando...')
// })
// -----------------------------------------


// Diferentes Tipos de Resposta e URLs

app.get('/usuario/1', (req, res) => {
  res.json({
    id: 1,
    nome: 'Pedro',
    sobrenome: 'Costa',
    idade: 37,
    cidade: 'Joatinga/SP'
  })
})

app.get('/usuario/:id', (req, res) => {
  res.send(`<h1>Isso é um H1 HTML para o id ${req.params.id}</h1>`)
})

app.get('/usuarios', (req, res) => {
  res.json([
    {
      id: 1,
      nome: 'Pedro',
      sobrenome: 'Costa',
      idade: 37,
      cidade: 'Joatinga/SP'
    },
    {
      id: 2,
      nome: 'Clara',
      sobrenome: 'Barbosa',
      idade: 23,
      cidade: 'Cajamar/SP'
    },
    {
      id: 3,
      nome: 'Flavio',
      sobrenome: 'Jorge',
      idade: 46,
      cidade: 'São Paulo/SP'
    }
  ])
})

app.listen(3000, () => console.log('Executando...'))