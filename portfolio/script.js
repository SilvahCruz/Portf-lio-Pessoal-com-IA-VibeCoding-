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
