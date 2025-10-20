/**
 * JJ Ingeniería y Construcción SPA - JavaScript Principal
 * Funcionalidades: Hero, Servicios, Equipo, Galería, Contacto, Floating Buttons
 */

// ===================================
// DATOS DINÁMICOS
// ===================================

// Datos del equipo
const teamData = [
    {
        name: "Juan José Pérez",
        role: "Director General",
        description: "Ingeniero Civil con más de 15 años de experiencia en proyectos de construcción e infraestructura."
    },
    {
        name: "María González",
        role: "Jefa de Proyectos",
        description: "Arquitecta especializada en diseño y gestión de proyectos residenciales y comerciales."
    },
    {
        name: "Carlos Rodríguez",
        role: "Ingeniero de Obras",
        description: "Ingeniero Civil con expertise en supervisión de obras y control de calidad."
    }
];

// Datos de servicios
const servicesData = [
    {
        image: "./assets/img/galeria/construccion-viviendas.jpeg",
        title: "Construcción de Viviendas",
        description: "Construcción de casas unifamiliares y multifamiliares con los más altos estándares de calidad y diseño moderno.",
        whatsappMessage: "Hola, me interesa obtener información sobre construcción de viviendas. ¿Podrían ayudarme?"
    },
    {
        image: "./assets/img/galeria/proyectos comerciales.jpeg",
        title: "Proyectos Comerciales",
        description: "Desarrollo de espacios comerciales, oficinas y locales comerciales adaptados a las necesidades específicas de cada cliente.",
        whatsappMessage: "Hola, necesito información sobre proyectos comerciales. ¿Pueden asesorarme?"
    },
    {
        image: "./assets/img/galeria/remodelaciones.jpeg",
        title: "Remodelaciones",
        description: "Renovación y remodelación de espacios existentes, mejorando funcionalidad y estética con diseños contemporáneos.",
        whatsappMessage: "Hola, estoy interesado en servicios de remodelación. ¿Podrían darme más detalles?"
    },
    {
        image: "./assets/img/galeria/consultoria tecnicas.jpeg",
        title: "Consultoría Técnica",
        description: "Asesoramiento especializado en proyectos de construcción, análisis de viabilidad y optimización de recursos.",
        whatsappMessage: "Hola, necesito consultoría técnica para mi proyecto. ¿Pueden ayudarme?"
    }
];

// ===================================
// VARIABLES GLOBALES
// ===================================

let isScrolling = false;

// ===================================
// INICIALIZACIÓN
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Renderizar contenido dinámico
    renderTeamMembers();
    renderServices();
    
    // Inicializar funcionalidades
    initServicesCarousel();
    initializeNavigation();
    initializeHero();
    initializeFloatingButtons();
    initializeScrollEffects();
    
    console.log('JJ Ingeniería y Construcción SPA - Aplicación inicializada correctamente');
}

// ===================================
// RENDERIZADO DINÁMICO
// ===================================

function renderTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) return;
    
    teamGrid.innerHTML = teamData.map(member => `
        <div class="team-member">
            <h3 class="team-member__name">${member.name}</h3>
            <p class="team-member__role">${member.role}</p>
            <p class="team-member__description">${member.description}</p>
        </div>
    `).join('');
}

// Función para renderizar servicios como carrusel
function renderServices() {
    const servicesContainer = document.getElementById('services-container');
    if (!servicesContainer) return;

    servicesContainer.innerHTML = `
        <div class="services-carousel">
            <div class="services-carousel__container">
                <div class="services-carousel__track" id="services-track">
                    ${servicesData.map((service, index) => `
                        <div class="service-card" data-index="${index}">
                            <h3 class="service-card__title">${service.title}</h3>
                            <div class="service-card__content">
                                <div class="service-card__text">
                                    <p class="service-card__description">${service.description}</p>
                                </div>
                                <div class="service-card__image">
                                    <img src="${service.image}" alt="${service.title}" loading="lazy">
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="services-carousel__controls">
                <button class="services-carousel__btn services-carousel__btn--prev" id="services-prev">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                </button>
                <div class="services-carousel__indicators" id="services-indicators">
                    ${servicesData.map((_, index) => `
                        <button class="services-carousel__indicator ${index === 0 ? 'active' : ''}" 
                                data-index="${index}"></button>
                    `).join('')}
                </div>
                <button class="services-carousel__btn services-carousel__btn--next" id="services-next">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                    </svg>
                </button>
            </div>
        </div>
    `;

    // Inicializar carrusel
    initServicesCarousel();
}

// Función para inicializar el carrusel de servicios
function initServicesCarousel() {
    const track = document.getElementById('services-track');
    const prevBtn = document.getElementById('services-prev');
    const nextBtn = document.getElementById('services-next');
    const indicators = document.querySelectorAll('.services-carousel__indicator');
    
    // Validar que todos los elementos existan
    if (!track || !prevBtn || !nextBtn || indicators.length === 0) {
        console.error('Elementos del carrusel no encontrados');
        return;
    }
    
    let currentIndex = 0;
    const totalSlides = servicesData.length;

    function updateCarousel() {
        const translateX = -currentIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        // Actualizar indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Inicializar carrusel
    updateCarousel();

    // Auto-play (opcional)
    setInterval(nextSlide, 5000);
}

// ===================================
// NAVEGACIÓN
// ===================================

function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    const header = document.querySelector('.header');
    
    // Toggle del menú móvil
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }
    
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });
    
    // Efecto de scroll en el header
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    });
    
    // Smooth scroll con compensación por header fijo
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#' || !href.startsWith('#')) return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const headerEl = document.querySelector('.header');
            const headerHeight = headerEl ? headerEl.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

// ===================================
// HERO SECTION
// ===================================

function initializeHero() {
    const scrollDownBtn = document.querySelector('.hero__scroll-link');
    
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.getElementById('quienes-somos');
            if (targetSection) {
                const headerEl = document.querySelector('.header');
                const headerHeight = headerEl ? headerEl.offsetHeight : 0;
                const top = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top, behavior: 'smooth' });
            } else {
                window.location.hash = '#quienes-somos';
            }
        });
    }
    
    // Animación de las formas de fondo
    createHeroBackgroundShapes();
}

function createHeroBackgroundShapes() {
    const heroBg = document.querySelector('.hero__bg');
    if (!heroBg) return;
    
    // Crear formas decorativas
    for (let i = 1; i <= 3; i++) {
        const shape = document.createElement('div');
        shape.className = `hero__bg-shape hero__bg-shape--${i}`;
        heroBg.appendChild(shape);
    }
}

// ===================================
// BOTONES FLOTANTES
// ===================================

function initializeFloatingButtons() {
    const scrollTopBtn = document.getElementById('scroll-top') || document.getElementById('scroll-top-btn');
    const whatsappBtn = document.querySelector('.floating-btn--whatsapp') || document.getElementById('whatsapp-btn');
    
    // Mostrar/ocultar botón de scroll to top
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Funcionalidad del botón scroll to top
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Configurar mensaje de WhatsApp general
    if (whatsappBtn) {
        const generalMessage = "Hola, me interesa conocer más sobre los servicios de JJ Ingeniería y Construcción. ¿Podrían brindarme información?";
        whatsappBtn.href = `https://wa.me/56912345678?text=${encodeURIComponent(generalMessage)}`;
    }
}

// ===================================
// EFECTOS DE SCROLL
// ===================================

function initializeScrollEffects() {
    // Intersection Observer para animaciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animateElements = document.querySelectorAll('.service-card, .about__card, .team-member, .contact__item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// UTILIDADES
// ===================================

// Función para formatear números de teléfono
function formatPhoneNumber(phone) {
    return phone.replace(/\D/g, '');
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para crear mensaje de WhatsApp personalizado
function createWhatsAppMessage(service, clientName = '') {
    const baseMessage = `Hola, soy ${clientName ? clientName + ' y ' : ''}me interesa obtener información sobre ${service}. ¿Podrían ayudarme?`;
    return encodeURIComponent(baseMessage);
}

// Función para lazy loading de imágenes
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ===================================
// MANEJO DE ERRORES
// ===================================

window.addEventListener('error', function(e) {
    console.error('Error en la aplicación:', e.error);
});

// ===================================
// PERFORMANCE
// ===================================

// Debounce para eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce a eventos de scroll costosos
const debouncedScrollHandler = debounce(() => {
    // Aquí se pueden agregar handlers de scroll costosos
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// ===================================
// EXPORTAR FUNCIONES PARA USO GLOBAL
// ===================================

window.JJIngenieria = {
    teamData,
    servicesData,
    createWhatsAppMessage,
    formatPhoneNumber,
    isValidEmail
};