function salvar(req, res) {
  res.send('Produto > salvar ')
}

function obter(req, res) {
  res.send('Produto > obter ')
}

module.exports = { salvar, obter }