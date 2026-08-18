// Verifica se o arquivo está carregado corretamente no navegador
console.log("Arquivo JavaScript conectado com sucesso!");

// ==========================================
// FUNCIONALIDADE 1: MODO ESCURO (DARK MODE)
// ==========================================
const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", function() {
  // O 'toggle' adiciona a classe se ela não existir, e remove se ela já existir
  document.body.classList.toggle("dark-mode");
});

// ==========================================
// FUNCIONALIDADE 2: EFEITO NAS TECNOLOGIAS
// ==========================================
// Seleciona TODOS os elementos da lista que possuem a classe "tech-item"
const itensTecnologia = document.querySelectorAll(".tech-item");

// Como são vários itens, usamos o 'forEach' para aplicar o efeito em um por um
itensTecnologia.forEach(function(item) {

  // Evento: Quando o ponteiro do mouse entra no item
  item.addEventListener("mouseenter", function() {
    item.style.color = "#3498db"; // Muda a cor do texto para azul
    item.style.fontWeight = "bold"; // Deixa o texto em negrito
    item.style.cursor = "pointer"; // Transforma a seta do mouse em "mãozinha"
  });

  // Evento: Quando o mouse sai do item (restaura o padrão)
  item.addEventListener("mouseleave", function() {
    item.style.color = ""; // Remove a cor customizada (volta ao CSS padrão)
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
    alert("Parabéns! Você encontrou o Easter Egg do portfólio! 🎉");
    cliques = 0; // Reinicia o contador
  }
});

// EVENTO QUE MOSTRA OS BOX DAS OPÇÕES DE TECNOLOGIAS QUE ESTOU ESTUDANDO

const tecnologias = document.querySelectorAll(".tech-item");
const info = document.getElementById("tech-info");

tecnologias.forEach(function(tecnologia) {

    tecnologia.addEventListener("click", function() {

        const tipo = tecnologia.dataset.tech;

        if (info.dataset.aberto === tipo) {
            info.innerHTML = "";
            info.dataset.aberto = "";
            return;
        }

        if (tipo === "html") {
            info.innerHTML = `
                <div class="tech-box">
                    <h3>HTML</h3>
                    <p>
                        HTML é a linguagem usada para estruturar uma página
                        da internet. Ele define elementos como títulos,
                        textos, imagens, links, botões e seções.
                    </p>
                    <p>
                        Em resumo, HTML cria a estrutura da página,
                        CSS cuida da aparência e JavaScript adiciona
                        interatividade.
                    </p>
                </div>
            `;
        }

        if (tipo === "css") {
            info.innerHTML = `
                <div class="tech-box">
                    <h3>CSS</h3>
                    <p>
                        CSS é a linguagem responsável pela aparência
                        de uma página. Ele permite definir cores,
                        tamanhos, fontes, espaçamentos e posicionamento
                        dos elementos.
                    </p>
                </div>
            `;
        }

        if (tipo === "javascript") {
            info.innerHTML = `
                <div class="tech-box">
                    <h3>JavaScript</h3>
                    <p>
                        JavaScript é uma linguagem utilizada para adicionar
                        interatividade às páginas, permitindo criar
                        funcionalidades e comportamentos dinâmicos.
                    </p>
                </div>
            `;
        }

        if (tipo === "php") {
            info.innerHTML = `
                <div class="tech-box">
                    <h3>PHP</h3>
                    <p>
                        PHP é uma linguagem de programação utilizada
                        principalmente no desenvolvimento do lado do
                        servidor, permitindo criar sistemas e páginas
                        dinâmicas.
                    </p>
                </div>
            `;
        }

        info.dataset.aberto = tipo;
    });

});
