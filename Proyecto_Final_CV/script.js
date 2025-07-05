// Variables globales
let isTyping = false;

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Función principal de inicialización
function initializeApp() {
    loadSavedTheme();
    initializeAnimations();
    initializeScrollEffects();
    initializeTypingEffect();
    initializeSkillBars();
    initializeContactLinks();
    initializeKonamiCode();
}

// Cargar tema guardado
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelector('.theme-toggle i').className = 'fas fa-sun';
    }
}

// Barra de progreso de scroll
function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

// Event listener para scroll
window.addEventListener('scroll', function() {
    updateProgressBar();
    parallaxEffect();
});

// Función para descargar PDF
function downloadPDF() {
    const element = document.getElementById('cv-container');
    const opt = {
        margin: 0.5,
        filename: 'Guillermo_Jair_Montiel_Juarez_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            allowTaint: true
        },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Ocultar elementos que no queremos en el PDF
    const elementsToHide = [
        '.download-btn',
        '.theme-toggle',
        '.floating-icons',
        '.progress-bar'
    ];

    elementsToHide.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) element.style.display = 'none';
    });

    // Mostrar mensaje de generación
    showNotification('Generando PDF...', 'info');

    html2pdf().set(opt).from(element).save().then(() => {
        // Restaurar elementos después de generar el PDF
        elementsToHide.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                if (selector === '.floating-icons') {
                    element.style.display = 'flex';
                } else {
                    element.style.display = 'block';
                }
            }
        });
        showNotification('PDF descargado exitosamente!', 'success');
    }).catch(error => {
        console.error('Error generando PDF:', error);
        showNotification('Error al generar PDF', 'error');
        // Restaurar elementos en caso de error
        elementsToHide.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                if (selector === '.floating-icons') {
                    element.style.display = 'flex';
                } else {
                    element.style.display = 'block';
                }
            }
        });
    });
}

// Navegación suave
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Toggle tema oscuro/claro
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const icon = document.querySelector('.theme-toggle i');
    
    if (document.body.classList.contains('dark-theme')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
        showNotification('Tema oscuro activado', 'info');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
        showNotification('Tema claro activado', 'info');
    }
}

// Inicializar animaciones
function initializeAnimations() {
    // Animación de entrada para las secciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Efectos de scroll
function initializeScrollEffects() {
    let ticking = false;
    
    function updateOnScroll() {
        updateProgressBar();
        parallaxEffect();
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
}

// Efecto parallax
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}

// Efecto de escritura para el nombre y título
function initializeTypingEffect() {
    setTimeout(() => {
        const nameElement = document.getElementById('name');
        const titleElement = document.getElementById('title');
        
        if (nameElement && titleElement) {
            typeWriter(nameElement, 'Guillermo Jair Montiel Juárez', 100);
            setTimeout(() => {
                typeWriter(titleElement, 'Data Engineer & Software Developer', 80);
            }, 2500);
        }
    }, 1000);
}

// Función de máquina de escribir
function typeWriter(element, text, speed = 100) {
    if (isTyping) return;
    
    isTyping = true;
    element.innerHTML = '';
    element.classList.add('typing');
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.classList.remove('typing');
            isTyping = false;
        }
    }
    type();
}

// Inicializar barras de habilidades
function initializeSkillBars() {
    setTimeout(() => {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const skillLevel = bar.style.getPropertyValue('--skill-level');
                bar.style.width = skillLevel || '0%';
            }, index * 200);
        });
    }, 1500);
}

// Inicializar enlaces de contacto
function initializeContactLinks() {
    const contactItems = document.querySelectorAll('.contact-info li');
    
    contactItems.forEach(item => {
        const text = item.textContent.trim();
        
        if (text.includes('@')) {
            // Email
            const email = text.replace(/.*\s/, '');
            item.innerHTML = `<i class="fas fa-envelope"></i> <a href="mailto:${email}">${email}</a>`;
        } else if (text.includes('+')) {
            // Teléfono
            const phone = text.replace(/.*\s/, '');
            item.innerHTML = `<i class="fas fa-phone"></i> <a href="tel:${phone}">${phone}</a>`;
        } else if (text.includes('linkedin')) {
            // LinkedIn
            const linkedin = text.replace(/.*\s/, '');
            item.innerHTML = `<i class="fab fa-linkedin"></i> <a href="https://${linkedin}" target="_blank">${linkedin}</a>`;
        } else if (text.includes('github')) {
            // GitHub
            const github = text.replace(/.*\s/, '');
            item.innerHTML = `<i class="fab fa-github"></i> <a href="https://${github}" target="_blank">${github}</a>`;
        }
    });
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    // Remover notificación existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos para la notificación
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '15px 25px',
        borderRadius: '25px',
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: '1002',
        opacity: '0',
        transition: 'all 0.3s ease'
    });
    
    // Colores según el tipo
    const colors = {
        info: '#3498db',
        success: '#27ae60',
        error: '#e74c3c',
        warning: '#f39c12'
    };
    
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(10px)';
    }, 10);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Contador animado para números
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '%';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '%';
        }
    }
    updateCounter();
}

// Easter egg: Konami code
function initializeKonamiCode() {
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateDeveloperMode();
        }
    });
}

// Activar modo desarrollador
function activateDeveloperMode() {
    const originalBg = document.body.style.background;
    document.body.style.background = 'linear-gradient(135deg, #00ff00 0%, #0066cc 100%)';
    
    showNotification('¡Modo desarrollador activado! 🚀', 'success');
    
    // Efecto de partículas
    createParticles();
    
    // Restaurar después de 5 segundos
    setTimeout(() => {
        document.body.style.background = document.body.classList.contains('dark-theme') 
            ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        
        removeParticles();
    }, 5000);
}

// Crear partículas para el easter egg
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.id = 'particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;
    
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createParticle(particleContainer), i * 100);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: #fff;
        border-radius: 50%;
        animation: particle-fall 3s linear forwards;
        left: ${Math.random() * 100}%;
        opacity: 0.8;
    `;
    
    container.appendChild(particle);
    
    // Remover partícula después de la animación
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 3000);
}

function removeParticles() {
    const particleContainer = document.getElementById('particles');
    if (particleContainer) {
        particleContainer.remove();
    }
}

// Agregar CSS para la animación de partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes particle-fall {
        to {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Función para compartir CV
function shareCV() {
    if (navigator.share) {
        navigator.share({
            title: 'CV - Guillermo Jair Montiel Juárez',
            text: 'Conoce mi experiencia como Data Engineer y Software Developer',
            url: window.location.href
        }).then(() => {
            showNotification('CV compartido exitosamente!', 'success');
        }).catch((error) => {
            console.log('Error sharing:', error);
            fallbackShare();
        });
    } else {
        fallbackShare();
    }
}

// Fallback para compartir
function fallbackShare() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showNotification('Enlace copiado al portapapeles!', 'success');
    }).catch(() => {
        showNotification('No se pudo copiar el enlace', 'error');
    });
}

// Función para imprimir CV
function printCV() {
    // Ocultar elementos que no queremos imprimir
    const elementsToHide = document.querySelectorAll('.download-btn, .theme-toggle, .floating-icons, .progress-bar');
    elementsToHide.forEach(el => el.style.display = 'none');
    
    window.print();
    
    // Restaurar elementos después de imprimir
    setTimeout(() => {
        elementsToHide.forEach(el => {
            if (el.classList.contains('floating-icons')) {
                el.style.display = 'flex';
            } else {
                el.style.display = 'block';
            }
        });
    }, 1000);
}

// Detectar modo de impresión
window.addEventListener('beforeprint', function() {
    document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('print-mode');
});

// Manejo de errores global
window.addEventListener('error', function(e) {
    console.error('Error capturado:', e.error);
    showNotification('Ha ocurrido un error inesperado', 'error');
});

// Performance optimization: lazy loading para imágenes
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Función de debug (solo en desarrollo)
function debugInfo() {
    console.log('CV Web App Debug Info:');
    console.log('- Theme:', localStorage.getItem('theme') || 'light');
    console.log('- Viewport:', window.innerWidth + 'x' + window.innerHeight);
    console.log('- User Agent:', navigator.userAgent);
    console.log('- Scroll Position:', window.pageYOffset);
}

// Shortcuts de teclado
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + D para descargar PDF
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        downloadPDF();
    }
    
    // Ctrl/Cmd + T para toggle theme
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        toggleTheme();
    }
    
    // F1 para debug info
    if (e.key === 'F1') {
        e.preventDefault();
        debugInfo();
    }
});
