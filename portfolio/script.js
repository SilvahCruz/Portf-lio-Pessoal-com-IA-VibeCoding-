// ===== API GitHub =====
const listaProjetos = document.getElementById("lista-projetos");

// Substituir "octocat" pelo seu username do GitHub
const GITHUB_USER = "SilvahCruz";

fetch(`https://api.github.com/users/${GITHUB_USER}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.classList.add("projeto-card");
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description ? repo.description : "Sem descrição disponível"}</p>
        <a href="${repo.html_url}" target="_blank">Ver Projeto</a>
      `;
      listaProjetos.appendChild(card);
    });
  })
  .catch(error => console.error("Erro ao carregar repositórios:", error));

// ===== Botões de Contato =====
document.getElementById("btn-github").addEventListener("click", () => {
  window.open("https://github.com/SilvahCruz", "_blank");
});

document.getElementById("btn-linkedin").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/mateus-cruz-2b5a18334/", "_blank");
});

document.getElementById("btn-email").addEventListener("click", () => {
  window.location.href = "mailto:mateusdacruzdasilva74@gmail.com";
});

// ===== COMETAS DIAGONAIS =====
function criarCometa() {
  const cometa = document.createElement("div");
  cometa.classList.add("cometa");

  // Posição inicial vertical aleatória
  const top = Math.random() * window.innerHeight / 2; // surge na metade superior
  cometa.style.top = top + "px";

  // Velocidade aleatória
  const duracao = 3 + Math.random() * 2; // 3 a 5 segundos

  // Animação diagonal: da direita para esquerda e descendo
  cometa.animate(
    [
      { transform: `translateX(0px) translateY(0px) rotate(45deg)`, opacity: 0.8 },
      { transform: `translateX(-${window.innerWidth + 100}px) translateY(${window.innerHeight / 2}px) rotate(45deg)`, opacity: 0 }
    ],
    { duration: duracao * 1000, easing: "linear" }
  );

  document.body.appendChild(cometa);

  // Remove após terminar a animação
  setTimeout(() => cometa.remove(), duracao * 1000);
}

// Cria cometas continuamente
setInterval(criarCometa, 1000);


