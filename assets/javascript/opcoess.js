var parametros = new URLSearchParams(location.search);
var id = parametros.get("id");

var filmes = filme.find(function (elem) {
  return elem.id == id;
});

if (filmes) {
  document.getElementById("titulo").innerText = filmes.titulo;
  document.getElementById("imagem").src = filmes.imagem;
  document.getElementById("imagem").alt = filmes.titulo;
  document.getElementById("sinopse").innerText = filmes.sinopse;
  document.getElementById("p_sinopse").innerText = filmes.p_sinopse;
  document.getElementById("elenco").innerText = filmes.elenco;
  document.getElementById("ator_1").innerText = filmes.ator_1;
  document.getElementById("p_ator_1").innerText = filmes.p_ator_1;
  document.getElementById("ator_2").innerText = filmes.ator_2;
  document.getElementById("p_ator_2").innerText = filmes.p_ator_2;
  document.getElementById("ator_3").innerText = filmes.ator_3;
  document.getElementById("p_ator_3").innerText = filmes.p_ator_3;
  document.getElementById("ator_4").innerText = filmes.ator_4;
  document.getElementById("p_ator_4").innerText = filmes.p_ator_4;
  document.getElementById("ator_5").innerText = filmes.ator_5;
  document.getElementById("p_ator_5").innerText = filmes.p_ator_5;
  document.getElementById("titulo_trailer").innerText = filmes.titulo_trailer;
  document.getElementById("meuIframe").src = filmes.meuIFrame;
}
