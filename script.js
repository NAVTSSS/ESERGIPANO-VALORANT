/* ================================================================
   SERGIPANO 2026 — VALORANT — script.js
   ================================================================
   ESTE É O ARQUIVO QUE VOCÊ VAI EDITAR NO DIA A DIA.

   Aqui embaixo tem 4 "listas" (chamadas de arrays):

     1) times         -> nomes e logos dos times
     2) classificacao  -> tabela de pontos, vitórias, derrotas...
     3) jogos          -> todos os jogos da fase de grupos
     4) semifinais     -> os 2 jogos do mata-mata

   Para atualizar o site, você só precisa mudar os números e
   textos dentro dessas listas. O site se atualiza sozinho,
   porque o próprio código lê essas listas e monta a página.

   Dica: se tiver dúvida sobre uma vírgula ou chave { } faltando,
   copie o bloco inteiro de um item parecido e só troque os
   valores — isso evita erros de digitação.
================================================================ */


/* ================================================================
   1) TIMES
   ALTERE AQUI OS TIMES
   ALTERE AQUI AS LOGOS
   ----------------------------------------------------------------
   - "nome"   -> nome do time, exatamente como deve aparecer no site
   - "logo"   -> caminho do arquivo de imagem dentro da pasta assets/
   - "status" -> texto pequeno que aparece embaixo do nome
                 (ex: "Confirmado", "Aguardando confirmação")

   Para trocar uma logo: substitua o ARQUIVO dentro da pasta
   assets/ mantendo o MESMO NOME (ex: assets/troianos.png).
   Se quiser usar outro nome de arquivo, troque também aqui embaixo.
================================================================ */
const times = [
  {
    nome: "The Frag Academy",
    logo: "assets/the-frag-academy.png",
    status: "Confirmado"
  },
  {
    nome: "Troianos",
    logo: "assets/troianos.png",
    status: "Confirmado"
  },
  {
    nome: "Gabirus Alados",
    logo: "assets/gabirus-alados.png",
    status: "Confirmado"
  },
  {
    nome: "Crab E-Sports",
    logo: "assets/crab-esports.png",
    status: "Confirmado"
  },
  {
    nome: "Wolfgang",
    logo: "assets/volfgang.png",
    status: "Confirmado"
  }
];


/* ================================================================
   2) CLASSIFICAÇÃO
   ALTERE AQUI A CLASSIFICAÇÃO
   ----------------------------------------------------------------
   - "posicao"  -> posição do time na tabela (1 a 5)
   - "time"     -> precisa ser IGUAL ao "nome" usado na lista "times"
                   (isso é o que faz a logo aparecer certinha na tabela)
   - "jogos"    -> quantos jogos esse time já disputou
   - "vitorias" -> quantas vitórias
   - "derrotas" -> quantas derrotas
   - "saldo"    -> saldo de rounds/mapas (vitórias - derrotas, ou o
                   critério que vocês adotarem)
   - "pontos"   -> pontos na tabela

   As 4 primeiras posições ficam destacadas em amarelo
   automaticamente (são as que avançam para a semifinal).
================================================================ */
const classificacao = [
  { posicao: 1, time: "The Frag Academy", jogos: 0, vitorias: 0, derrotas: 0, saldo: 0, pontos: 0 },
  { posicao: 2, time: "Troianos",         jogos: 0, vitorias: 0, derrotas: 0, saldo: 0, pontos: 0 },
  { posicao: 3, time: "Gabirus Alados",   jogos: 0, vitorias: 0, derrotas: 0, saldo: 0, pontos: 0 },
  { posicao: 4, time: "Crab E-Sports",    jogos: 0, vitorias: 0, derrotas: 0, saldo: 0, pontos: 0 },
  { posicao: 5, time: "Wolfgang",         jogos: 0, vitorias: 0, derrotas: 0, saldo: 0, pontos: 0 }
];


/* ================================================================
   3) JOGOS DA FASE DE GRUPOS
   ALTERE AQUI OS JOGOS
   ALTERE AQUI OS RESULTADOS
   ----------------------------------------------------------------
   - "semana"  -> "Semana 1" ou "Semana 2" (agrupa os jogos)
   - "dia"     -> "Sexta-feira" ou "Sábado" (agrupa dentro da semana)
   - "horario" -> horário do jogo, ex: "20h00"
   - "timeA" e "timeB" -> nomes dos times (iguais aos da lista "times")
   - "placarA" e "placarB" -> resultado do jogo.
        Enquanto o jogo não acontece, deixe como null (sem aspas)
        Quando o jogo acabar, troque para o número de mapas/rounds
        vencidos por cada time. Exemplo: placarA: 1, placarB: 0
   - "formato" -> "MD1" (não muda na fase de grupos)
   - "status"  -> troque para um destes três textos, exatamente assim:
        "A jogar"       -> jogo ainda não começou
        "Em andamento"  -> jogo acontecendo agora (fica piscando)
        "Finalizado"    -> jogo já terminou (fica verde)
================================================================ */
const jogos = [
  // ---------- Semana 1 — Sexta-feira ----------
  { semana: "Semana 1", dia: "Sexta-feira", horario: "20h00", timeA: "The Frag Academy", timeB: "Troianos",       placarA: null, placarB: null, formato: "MD1", status: "A jogar" },
  { semana: "Semana 1", dia: "Sexta-feira", horario: "21h00", timeA: "Gabirus Alados",   timeB: "Crab E-Sports",  placarA: null, placarB: null, formato: "MD1", status: "A jogar" },
  { semana: "Semana 1", dia: "Sexta-feira", horario: "22h00", timeA: "The Frag Academy", timeB: "Wolfgang",       placarA: null, placarB: null, formato: "MD1", status: "A jogar" },

  // ---------- Semana 1 — Sábado ----------
  { semana: "Semana 1", dia: "Sábado", horario: "14h00", timeA: "Troianos",      timeB: "Gabirus Alados", placarA: null, placarB: null, formato: "MD1", status: "A jogar" },
  { semana: "Semana 1", dia: "Sábado", horario: "15h00", timeA: "Crab E-Sports", timeB: "Wolfgang",       placarA: null, placarB: null, formato: "MD1", status: "A jogar" },

  // ---------- Semana 2 — Sexta-feira ----------
  { semana: "Semana 2", dia: "Sexta-feira", horario: "20h00", timeA: "The Frag Academy", timeB: "Gabirus Alados", placarA: null, placarB: null, formato: "MD1", status: "A jogar" },
  { semana: "Semana 2", dia: "Sexta-feira", horario: "21h00", timeA: "Troianos",         timeB: "Wolfgang",       placarA: null, placarB: null, formato: "MD1", status: "A jogar" },
  { semana: "Semana 2", dia: "Sexta-feira", horario: "22h00", timeA: "The Frag Academy", timeB: "Crab E-Sports",  placarA: null, placarB: null, formato: "MD1", status: "A jogar" },

  // ---------- Semana 2 — Sábado ----------
  { semana: "Semana 2", dia: "Sábado", horario: "14h00", timeA: "Troianos",       timeB: "Crab E-Sports", placarA: null, placarB: null, formato: "MD1", status: "A jogar" },
  { semana: "Semana 2", dia: "Sábado", horario: "15h00", timeA: "Gabirus Alados", timeB: "Wolfgang",      placarA: null, placarB: null, formato: "MD1", status: "A jogar" }
];


/* ================================================================
   4) SEMIFINAIS
   ALTERE AQUI OS RESULTADOS (quando a fase de grupos terminar)
   ----------------------------------------------------------------
   - "confronto" -> comece com os placeholders "1º colocado x 4º colocado"
                    etc. Quando a fase de grupos terminar, troque pelos
                    nomes reais dos times, ex: "Troianos x Wolfgang"
   - "dia" / "horario" / "formato" -> já vêm prontos conforme o regulamento
================================================================ */
const semifinais = [
  {
    nome: "Semifinal 1",
    confronto: "1º colocado x 4º colocado",
    dia: "Sexta-feira",
    horario: "20h00",
    formato: "MD3"
  },
  {
    nome: "Semifinal 2",
    confronto: "2º colocado x 3º colocado",
    dia: "Sábado",
    horario: "14h00",
    formato: "MD3"
  }
];


/* ================================================================
   DAQUI PRA BAIXO É O "MOTOR" DO SITE.
   Não precisa mexer nessa parte — ela só lê as listas acima e
   desenha a página automaticamente.
================================================================ */

// Busca a logo de um time pelo nome (usado nas tabelas e jogos)
function buscarLogoDoTime(nomeTime) {
  const time = times.find(t => t.nome === nomeTime);
  return time ? time.logo : "";
}

// Transforma o texto de status em uma classe CSS
function classeDoStatus(status) {
  switch (status) {
    case "Em andamento": return "status-em-andamento";
    case "Finalizado": return "status-finalizado";
    default: return "status-a-jogar";
  }
}

/* ---------------- 3. TIMES ---------------- */
function renderTimes() {
  const container = document.getElementById("teamsGrid");
  container.innerHTML = times.map(time => `
    <div class="team-card">
      <div class="team-logo-wrap">
        <img src="${time.logo}" alt="Logo ${time.nome}">
      </div>
      <div class="team-name">${time.nome}</div>
      <span class="team-status">${time.status}</span>
    </div>
  `).join("");
}

/* ---------------- 4. CLASSIFICAÇÃO ---------------- */
function renderClassificacao() {
  const corpo = document.getElementById("standingsBody");
  const ordenada = [...classificacao].sort((a, b) => a.posicao - b.posicao);

  corpo.innerHTML = ordenada.map(item => `
    <tr class="${item.posicao <= 4 ? "top-four" : ""}">
      <td class="col-position"><span class="pos-badge">${item.posicao}</span></td>
      <td class="col-team">
        <div class="team-cell">
          <img src="${buscarLogoDoTime(item.time)}" alt="Logo ${item.time}">
          <span>${item.time}</span>
        </div>
      </td>
      <td>${item.jogos}</td>
      <td>${item.vitorias}</td>
      <td>${item.derrotas}</td>
      <td>${item.saldo}</td>
      <td>${item.pontos}</td>
    </tr>
  `).join("");
}

/* ---------------- 5. JOGOS (agrupados por semana + dia) ---------------- */
function renderJogos() {
  const container = document.getElementById("jogosContainer");

  // Agrupa os jogos mantendo a ordem em que aparecem no array "jogos"
  const grupos = [];
  jogos.forEach(jogo => {
    const chave = `${jogo.semana} — ${jogo.dia}`;
    let grupo = grupos.find(g => g.chave === chave);
    if (!grupo) {
      grupo = { chave, itens: [] };
      grupos.push(grupo);
    }
    grupo.itens.push(jogo);
  });

  container.innerHTML = grupos.map(grupo => `
    <div class="game-group">
      <h3 class="game-group-title">${grupo.chave}</h3>
      <div class="games-grid">
        ${grupo.itens.map(jogo => `
          <div class="match-card">
            <div class="match-time">
              <span class="time">${jogo.horario}</span>
              <span class="match-format">${jogo.formato}</span>
            </div>
            <div class="match-teams">
              <div class="match-team">
                <img src="${buscarLogoDoTime(jogo.timeA)}" alt="Logo ${jogo.timeA}">
                <span>${jogo.timeA}</span>
              </div>
              <div class="match-score">
                ${jogo.placarA === null ? '<span class="dash">-</span>' : jogo.placarA}
                <span class="dash">x</span>
                ${jogo.placarB === null ? '<span class="dash">-</span>' : jogo.placarB}
              </div>
              <div class="match-team">
                <img src="${buscarLogoDoTime(jogo.timeB)}" alt="Logo ${jogo.timeB}">
                <span>${jogo.timeB}</span>
              </div>
            </div>
            <div class="match-status ${classeDoStatus(jogo.status)}">${jogo.status}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/* ---------------- 6. SEMIFINAIS ---------------- */
function renderSemifinais() {
  const container = document.getElementById("semisGrid");
  container.innerHTML = semifinais.map(semi => `
    <div class="semi-card">
      <div class="semi-name">${semi.nome}</div>
      <div class="semi-matchup">${semi.confronto}</div>
      <div class="semi-meta">
        <span class="semi-tag">${semi.dia}</span>
        <span class="semi-tag">${semi.horario}</span>
        <span class="semi-tag">${semi.formato}</span>
      </div>
    </div>
  `).join("");
}

/* ---------------- MENU MOBILE ---------------- */
function initMenuMobile() {
  const botao = document.getElementById("navToggle");
  const menu = document.getElementById("mainNav");

  botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("open");
    botao.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  // Fecha o menu ao clicar em um link (útil no celular)
  menu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      botao.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------- INICIALIZAÇÃO ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderTimes();
  renderClassificacao();
  renderJogos();
  renderSemifinais();
  initMenuMobile();
});