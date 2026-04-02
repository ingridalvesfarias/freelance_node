/**
 * CONFIGURAÇÕES DO CYPHER-STORE
 */
const USER_CONFIG = {
    whatsappNumber: "5585992981132", 
    email: "ingridkookfarias@gmail.com",
    github: "https://github.com/ingridalvesfarias",
    linkedin: "https://www.linkedin.com/in/ingridalvesfarias/",
    portfolio: "https://portfolio-ingrid-farias.vercel.app/", 
    gymAiDemo: "https://projeto-fitness-two.vercel.app/"
};

/**
 * FUNÇÕES DE NAVEGAÇÃO
 */
function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * GERENCIADOR DE LINKS
 */
function openLink(type) {
    switch (type) {
        case 'github': window.open(USER_CONFIG.github, '_blank'); break;
        case 'linkedin': window.open(USER_CONFIG.linkedin, '_blank'); break;
        case 'portfolio': window.open(USER_CONFIG.portfolio, '_blank'); break;
        case 'gymAi': window.open(USER_CONFIG.gymAiDemo, '_blank'); break;
        case 'email': window.location.href = `mailto:${USER_CONFIG.email}`; break;
        default: console.warn("Protocolo não encontrado.");
    }
}

/**
 * INTEGRAÇÃO WHATSAPP
 */
function contactWhatsApp(servico) {
    const text = `[CYPHER-STORE] Olá Ingrid! Gostaria de solicitar um orçamento para o serviço: ${servico}. Aguardando conexão...`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${USER_CONFIG.whatsappNumber}?text=${encodedText}`;
    window.open(url, '_blank');
}

// Log de Inicialização
console.log("%c NODE_STATUS: OPERATIONAL ", "color: #39ff14; background: #000; font-weight: bold;");