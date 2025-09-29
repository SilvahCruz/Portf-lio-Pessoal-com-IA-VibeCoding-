// Navegação entre seções
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Adiciona evento de clique a cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove a classe active de todos os links
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Adiciona a classe active ao link clicado
            this.classList.add('active');
            
            // Obtém o ID da seção alvo
            const targetId = this.getAttribute('href').substring(1);
            
            // Remove a classe active de todas as seções
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => section.classList.remove('active'));
            
            // Adiciona a classe active à seção alvo
            document.getElementById(targetId).classList.add('active');
            
            // Scroll suave para o topo da seção
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Adiciona efeito de digitação ao texto de introdução
    const introText = "Criando espaços que inspiram e transformam vidas";
    const introElement = document.querySelector('.home-text p');
    
    if (introElement) {
        typeWriter(introElement, introText, 0);
    }
    
    // Adiciona animação de entrada para os cards de projeto
    const projectCards = document.querySelectorAll('.project-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Adiciona funcionalidade ao formulário de contato
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simula o envio do formulário
            const formData = new FormData(this);
            const name = formData.get('name') || 'Usuário';
            
            // Exibe mensagem de sucesso
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`);
            
            // Limpa o formulário
            this.reset();
        });
    }
    
    // Adiciona efeito de parallax ao fundo
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.profile-image, .section-header');
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});

// Função para efeito de máquina de escrever
function typeWriter(element, text, i) {
    if (i < text.length) {
        element.innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(element, text, i + 1);
        }, 100);
    }
}

// Adiciona ano atual ao footer (se houver)
const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer');
if (footer) {
    footer.innerHTML += ` &copy; ${currentYear} Kaio Fernando. Todos os direitos reservados.`;
}

// Adiciona tooltips aos ícones de habilidades
const skillItems = document.querySelectorAll('.skills-list li');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.color = 'var(--primary-color)';
        this.style.transform = 'translateX(5px)';
        this.style.transition = 'color 0.3s ease, transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.color = '';
        this.style.transform = '';
    });
});

// Adiciona animação de loading para imagens
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
});