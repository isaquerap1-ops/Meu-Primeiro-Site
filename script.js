// Verifica se o arquivo está carregado corretamente no navegador
console.log(Arquivo JavScript conectado com sucesso!");

//Seleciona o botão de tema que criamos no HTML pelo ID dele
const botaoTema = document.getElementByld("botao-tema");

//Adiciona um evento de clique ao botão
botaoTema.addEventListener("click", function() {
  //seleciona o corpo (body) da página
const corpoPagina = document.body;
  //se o fundo atual for claro, muda para escuro. se for escuro, volta para o claro.
if(corpoPagina.style.backgroundColor ==="rgb(26,37,47)" 
  corpoPagina.style backgroundColor ==="#1a252f") {
// Restaura o padrão do CSS ORIGIAL (Modo Claro)
  corpoPagina.style.backgroundColor = "#1a252f";
  corpoPagina.style.color = "#ffffff"; 
}
}); 

// ==========================================
// FUNCIONALIDADE 2: EFEITO NAS TECNOLOGIAS
// ==========================================
// Seleciona TODOS os elementos da lista que possuem a classe "tech-item"
const itensTecnologia = document.querySelectorAll(".tech-item");
// Como são vários itens, usamos o 'forEach' (para cada) para aplicar o efeito em um
por um
itensTecnologia.forEach(function(item) {

 // Evento: Quando o ponteiro do mouse entra no item
 item.addEventListener("mouseenter", function() {
 item.style.color = "#3498db"; // Muda a cor do texto para azul
 item.style.fontWeight = "bold"; // Deixa o texto em negrito
 item.style.cursor = "pointer"; // Transforma a seta do mouse em "mãozinha"
 });
 // Evento: Quando o mouse sai do item (restaura o padrão)
 item.addEventListener("mouseleave", function() {
 item.style.color = ""; // Remove a cor customizada (volta ao CSS
padrão)
 item.style.fontWeight = "normal"; // Remove o negrito
 });
});
// ==========================================
// FUNCIONALIDADE 3: CONTADOR DE CLIQUES SECRETO
// ==========================================
// Seleciona o título principal (seu nome) dentro do cabeçalho
const tituloNome = document.querySelector("header h1");
// Cria uma variável para contar quantas vezes ele foi clicado
let cliques = 0;
tituloNome.addEventListener("click", function() {
 cliques = cliques + 1; // Soma 1 ao total de cliques
 // Se o usuário clicar 5 vezes, exibe uma mensagem secreta
 if (cliques === 5) {
 alert("Parabéns! Você encontreou o Easter Egg do portfólio! ");
 cliques = 0; // Reinicia o contador
 }
});
