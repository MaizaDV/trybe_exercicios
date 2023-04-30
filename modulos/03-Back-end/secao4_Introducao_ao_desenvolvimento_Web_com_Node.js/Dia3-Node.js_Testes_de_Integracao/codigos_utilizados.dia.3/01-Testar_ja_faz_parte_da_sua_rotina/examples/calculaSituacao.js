function calculaSituacao(media) {
  if (media >= 7) {
    return 'aprovação';
  }

  return 'reprovação';
}

module.exports = calculaSituacao;
