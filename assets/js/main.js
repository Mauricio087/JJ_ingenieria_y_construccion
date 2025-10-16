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
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.64 9 11 5.16-1.36 9-5.45 9-11V7l-10-5z"/>
        </svg>`,
        title: "Construcción de Viviendas",
        description: "Construcción de casas unifamiliares y multifamiliares con los más altos estándares de calidad y diseño moderno.",
        whatsappMessage: "Hola, me interesa obtener información sobre construcción de viviendas. ¿Podrían ayudarme?"
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>`,
        title: "Proyectos Comerciales",
        description: "Desarrollo de espacios comerciales, oficinas y locales comerciales adaptados a las necesidades específicas de cada cliente.",
        whatsappMessage: "Hola, necesito información sobre proyectos comerciales. ¿Pueden asesorarme?"
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>`,
        title: "Remodelaciones",
        description: "Renovación y remodelación de espacios existentes, mejorando funcionalidad y estética con diseños contemporáneos.",
        whatsappMessage: "Hola, estoy interesado en servicios de remodelación. ¿Podrían darme más detalles?"
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>`,
        title: "Consultoría Técnica",
        description: "Asesoría especializada en ingeniería estructural, evaluación de proyectos y supervisión técnica de obras.",
        whatsappMessage: "Hola, necesito consultoría técnica para mi proyecto. ¿Pueden ayudarme?"
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>`,
        title: "Diseño Arquitectónico",
        description: "Creación de planos y diseños arquitectónicos personalizados que combinan funcionalidad, estética y eficiencia.",
        whatsappMessage: "Hola, me interesa el servicio de diseño arquitectónico. ¿Podrían brindarme información?"
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>`,
        title: "Gestión de Proyectos",
        description: "Administración integral de proyectos de construcción desde la planificación hasta la entrega final.",
        whatsappMessage: "Hola, necesito información sobre gestión de proyectos de construcción. ¿Pueden asesorarme?"
    }
];

// Datos de galería (imágenes numeradas)
const galleryData = [
    { id: 1, title: "Proyecto Residencial Moderno", category: "residencial" },
    { id: 2, title: "Edificio Comercial Centro", category: "comercial" },
    { id: 3, title: "Casa Familiar Contemporánea", category: "residencial" },
    { id: 4, title: "Oficinas Corporativas", category: "comercial" },
    { id: 5, title: "Remodelación Integral", category: "remodelacion" },
    { id: 6, title: "Complejo Habitacional", category: "residencial" },
    { id: 7, title: "Centro Comercial", category: "comercial" },
    { id: 8, title: "Villa Moderna", category: "residencial" },
    { id: 9, title: "Restauración Histórica", category: "remodelacion" },
    { id: 10, title: "Proyecto Industrial", category: "industrial" },
    { id: 11, title: "Casa de Campo", category: "residencial" },
    { id: 12, title: "Torre de Oficinas", category: "comercial" }
];

// ===================================
// VARIABLES GLOBALES
// ===================================

let gallerySwiper = null;
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
    renderGallery();
    
    // Inicializar funcionalidades
    initializeNavigation();
    initializeHero();
    initializeFloatingButtons();
    initializeModal();
    initializeScrollEffects();
    initializeGallerySwiper();
    
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

function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = servicesData.map(service => `
        <div class="service-card">
            <div class="service-card__icon">
                ${service.icon}
            </div>
            <h3 class="service-card__title">${service.title}</h3>
            <p class="service-card__description">${service.description}</p>
            <a href="https://wa.me/56912345678?text=${encodeURIComponent(service.whatsappMessage)}" 
               class="service-card__cta" 
               target="_blank" 
               rel="noopener noreferrer">
                Consultar por WhatsApp
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
            </a>
        </div>
    `).join('');
}

function renderGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = `
        <div class="swiper gallery-swiper">
            <div class="swiper-wrapper">
                ${galleryData.map(item => `
                    <div class="swiper-slide">
                        <div class="gallery-item" data-image-id="${item.id}">
                            <img src="./assets/img/galeria/proyecto-${item.id}.jpg" 
                                 alt="${item.title}" 
                                 class="gallery-item__image"
                                 loading="lazy">
                            <div class="gallery-item__overlay">
                                <h3 class="gallery-item__title">${item.title}</h3>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    `;
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
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
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
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
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
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    
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
// MODAL DE GALERÍA
// ===================================

function initializeModal() {
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');
    const modalBackdrop = document.querySelector('.modal__backdrop');
    
    // Abrir modal al hacer clic en imagen de galería
    document.addEventListener('click', (e) => {
        const galleryItem = e.target.closest('.gallery-item');
        if (galleryItem) {
            const imageId = galleryItem.dataset.imageId;
            const imageData = galleryData.find(item => item.id == imageId);
            
            if (imageData) {
                modalImage.src = `./assets/img/galeria/proyecto-${imageData.id}.jpg`;
                modalImage.alt = imageData.title;
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        }
    });
    
    // Cerrar modal
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
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
// SWIPER GALERÍA
// ===================================

function initializeGallerySwiper() {
    // Esperar a que Swiper esté disponible
    if (typeof Swiper === 'undefined') {
        console.warn('Swiper no está disponible. Asegúrate de incluir la librería.');
        return;
    }
    
    const swiperContainer = document.querySelector('.gallery-swiper');
    if (!swiperContainer) return;
    
    gallerySwiper = new Swiper('.gallery-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40,
            }
        }
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
    galleryData,
    createWhatsAppMessage,
    formatPhoneNumber,
    isValidEmail
};