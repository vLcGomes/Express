module.exports = (app, texto) => {
  function salvar(req, res) {
    res.send('Produto > salvar > ' + texto)
  }

  function obter(req, res) {
  res.send('Produto > obter > ' + texto)
  }

  app.post('/product', salvar)
  app.get('/product', obter)

  return { salvar, obter }
}