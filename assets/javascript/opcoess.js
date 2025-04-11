var parametros = new URLSearchParams(location.search);
var id = parametros.get("id");
var filmes = filme.find(function (elem) {
  return elem.id == id;
});

if (filmes) {
  document.getElementById("titulo").innerText = filme.titulo;
  document.getElementById("imagem").src = filme.imagem;
  document.getElementById("sinopse").innerText = filme.sinopse;
  document.getElementById("p_sinopse").innerText = filme.p_sinopse;
  document.getElementById("elenco").innerText = filme.elenco;
  document.getElementById("ator_1").innerText = filme.ator_1;
  document.getElementById("p_ator_1").innerText = filme.p_ator_1;
  document.getElementById("ator_2").innerText = filme.ator_2;
  document.getElementById("p_ator_2").innerText = filme.p_ator_2;
  document.getElementById("ator_3").innerText = filme.ator_3;
  document.getElementById("p_ator_3").innerText = filme.p_ator_3;
  document.getElementById("ator_4").innerText = filme.ator_4;
  document.getElementById("p_ator_4").innerText = filme.p_ator_4;
  document.getElementById("ator_5").innerText = filme.ator_5;
  document.getElementById("p_ator_5").innerText = filme.p_ator_5;
  document.getElementById("titulo_trailer").innerText = filme.titulo_trailer;
  document.getElementById("trailer").src = filme.meuIFrame;
}
