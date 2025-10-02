
        // Slider de servicios
        const servicesWrapper = document.querySelector('.services-wrapper');
        const nextBtn = document.querySelector('.next-btn');
        const dots = document.querySelectorAll('.dot');
        let currentSlide = 0;
        const totalSlides = 5; // Actualizado a 5 slides

        function updateSlider() {
            const slideWidth = document.querySelector('.service-card').offsetWidth + 32; // 32 es el gap
            servicesWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
            
            // Actualizar dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
            });
        });

        // Auto slide cada 5 segundos
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }, 5000);

        // Función para animar el contador
        function animateCounter(element, start, end, duration, decimals = 0) {
            let current = start;
            const range = end - start;
            const increment = range / (duration / 16); // 16ms es aproximadamente 60fps
            const suffix = element.dataset.suffix || '';

            function update() {
                current += increment;
                if ((increment >= 0 && current >= end) || (increment < 0 && current <= end)) {
                    current = end;
                    element.textContent = end.toFixed(decimals) + suffix;
                    return;
                }
                element.textContent = current.toFixed(decimals) + suffix;
                requestAnimationFrame(update);
            }

            update();
        }

        // Función para verificar si un elemento está visible en la ventana
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Iniciar animación cuando los elementos sean visibles
        function handleScroll() {
            const counters = document.querySelectorAll('.stat-number:not(.counted)');
            counters.forEach(counter => {
                if (isElementInViewport(counter)) {
                    const target = parseFloat(counter.dataset.target);
                    const decimals = parseInt(counter.dataset.decimals || 0);
                    counter.classList.add('counted');
                    animateCounter(counter, 0, target, 2000, decimals);
                }
            });
        }

        // Escuchar el evento scroll
        window.addEventListener('scroll', handleScroll);
        // Verificar al cargar la página
        handleScroll();

        // Sistema de traducción
        const translations = {
            es: {
                // Navegación
                "login": "Iniciar sesión",
                "register": "Registrarse",
                "about": "Nosotros",
                "services": "Servicios",
                "testimonials": "Testimonios",
                "contact": "Contacto",

                // Hero
                "hero-title-start": "Impulsamos",
                "hero-title-middle": "agricultura eficiente",
                "hero-title-and": "y",
                "hero-title-end": "colaborativa",
                "hero-desc": "Plataforma que conecta a agricultores y agrónomos, promoviendo la gestión de recursos y la asesoría técnica para lograr prácticas más rentables y responsables.",
                "discover": "Descubre EcoTrack",
                "users-trust": "+1,000 usuarios ya confían en nosotros",

                // About
                "who-we-are": "¿Quiénes somos?",
                "about-desc": "En Agromind desarrollamos soluciones digitales para el sector agrícola. Nuestro producto, EcoTrack, ayuda a agricultores y agrónomos a registrar, monitorear y analizar sus cultivos en tiempo real, mejorando la productividad y la trazabilidad con un enfoque sostenible y colaborativo.",
                "value-1-title": "Innovación",
                "value-1-desc": "Usamos datos y tecnología para optimizar decisiones en el campo.",
                "value-2-title": "Sostenibilidad",
                "value-2-desc": "Impulsamos buenas prácticas agrícolas que cuidan el agua, el suelo y el ecosistema.",
                "value-3-title": "Colaboración",
                "value-3-desc": "Unimos productores y expertos para compartir conocimiento y soluciones.",
                "value-4-title": "Transparencia",
                "value-4-desc": "Facilitamos el seguimiento claro de cada etapa del proceso productivo.",

                // Services
                "section-title": "Servicios",
                "services-desc": "Te ayudamos a optimizar tus cultivos, gestionar mejor los recursos y mantener la trazabilidad de tus procesos agrícolas, todo desde una plataforma fácil de usar",
                "service-1-title": "Registro y trazabilidad",
                "service-1-desc": "Registra y sigue cada etapa de la producción.",
                "service-2-title": "Monitoreo en tiempo real",
                "service-2-desc": "Supervisa el estado de tus cultivos y recursos desde cualquier lugar.",
                "service-3-title": "Reportes y métricas",
                "service-3-desc": "Obtén informes claros sobre productividad y sostenibilidad",
                "service-4-title": "Control climático",
                "service-4-desc": "Monitorea las condiciones ambientales y recibe alertas de cambios importantes.",
                "service-5-title": "Asesoría experta",
                "service-5-desc": "Conecta con agrónomos especializados para optimizar tus cultivos.",

                // Testimonials
                "testimonials-title": "Lo que dicen nuestros usuarios",
                "testimonials-desc": "Experiencias reales de trabajadores y clientes que confían en Agromind",
                "read-testimonials": "Lee los testimonios",

                // Stats
                "stats-1": "Agricultores y Agrónomos registrados",
                "stats-2": "Actividades agrícolas registradas",
                "stats-3": "Calificación promedio",
                "stats-4": "Usuarios satisfechos",
                "know-more": "Conoce nuestro impacto",

                // Contact
                "join-us": "Únete a nosotros",
                "start-today": "Comienza hoy mismo con Agromind",
                "contact-desc": "Si buscas optimizar tu trabajo en el campo o asesorar con datos precisos, nuestro equipo está aquí para acompañarte.",
                "benefit-1": "Registro gratuito y sencillo",
                "benefit-2": "Asesoría personalizada",
                "benefit-3": "Soporte al cliente disponible",
                "register-now": "Registrarse ahora",
                "learn-more": "Conocer más",

                // Footer
                "footer-desc": "Conectamos a agricultores y agrónomos a través de soluciones digitales para el campo contribuyendo, optimizando la trazabilidad, la productividad y la asesoría técnica en el campo.",
                "platform": "Plataforma",
                "company": "Empresa",
                "legal": "Legal",
                "copyright": "© 2025 Agromind Todos los derechos reservados.",
                "made-with": "Hecho con ❤️ por estudiantes de la UPC",

                // Pricing

                "job-farmer": "Agricultor",
                "job-agronomist": "Agrónoma",
                "job-producer": "Productor",
                "job-specialist": "Especialista Agrícola",

                "price-period": "/mes",

                "plan-1-feature-1": "Registro básico de cultivos",
                "plan-1-feature-2": "Hasta 3 parcelas y 1 organización",
                "plan-1-feature-3": "Reportes básicos",
                "plan-1-feature-4": "Soporte por email",

                "plan-2-feature-1": "Todo lo de AgroStart",
                "plan-2-feature-2": "Hasta 20 parcelas y 3 organizaciones",
                "plan-2-feature-3": "Monitoreo en tiempo real",
                "plan-2-feature-4": "Alertas automáticas",
                "plan-2-feature-5": "Soporte prioritario",

                "plan-3-feature-1": "Funcionalidades ilimitadas (parcelas y organizaciones sin restricción)",
                "plan-3-feature-2": "Todo lo de AgroSmart",
                "plan-3-feature-3": "Asesoría experta",
                "plan-3-feature-4": "Análisis avanzados",
                "plan-3-feature-5": "Alertas Climáticas en tiempo real",
                "plan-3-feature-6": "Soporte 24/7",

            },
            en: {
                // Navigation
                "login": "Log in",
                "register": "Sign up",
                "about": "About",
                "services": "Services",
                "testimonials": "Testimonials",
                "contact": "Contact",

                // Hero
                "hero-title-start": "We promote",
                "hero-title-middle": "efficient agriculture",
                "hero-title-and": "and",
                "hero-title-end": "collaboration",
                "hero-desc": "Platform that connects farmers and agronomists, promoting resource management and technical advice to achieve more profitable and responsible practices.",
                "discover": "Discover EcoTrack",
                "users-trust": "+1,000 users already trust us",

                // About
                "who-we-are": "Who we are?",
                "about-desc": "At Agromind we develop digital solutions for the agricultural sector. Our product, EcoTrack, helps farmers and agronomists record, monitor and analyze their crops in real time, improving productivity and traceability with a sustainable and collaborative approach.",
                "value-1-title": "Innovation",
                "value-1-desc": "We use data and technology to optimize field decisions.",
                "value-2-title": "Sustainability",
                "value-2-desc": "We promote good agricultural practices that care for water, soil and the ecosystem.",
                "value-3-title": "Collaboration",
                "value-3-desc": "We unite producers and experts to share knowledge and solutions.",
                "value-4-title": "Transparency",
                "value-4-desc": "We facilitate clear tracking of each stage of the production process.",

                // Services
                "services-title": "Services",
                "services-desc": "We help you optimize your crops, better manage resources and maintain traceability of your agricultural processes, all from an easy-to-use platform",
                "service-1-title": "Registration and Traceability",
                "service-1-desc": "Register and track each stage of production.",
                "service-2-title": "Real-time Monitoring",
                "service-2-desc": "Monitor the status of your crops and resources from anywhere.",
                "service-3-title": "Reports and Metrics",
                "service-3-desc": "Get clear reports on productivity and sustainability",
                "service-4-title": "Climate Control",
                "service-4-desc": "Monitor environmental conditions and receive alerts of important changes.",
                "service-5-title": "Expert Advice",
                "service-5-desc": "Connect with specialized agronomists to optimize your crops.",

                // Testimonials
                "testimonials-title": "What our users say",
                "testimonials-desc": "Real experiences from workers and clients who trust Agromind",
                "read-testimonials": "Read testimonials",

                // Stats
                "stats-1": "Registered Farmers and Agronomists",
                "stats-2": "Registered Agricultural Activities",
                "stats-3": "Average Rating",
                "stats-4": "Satisfied Users",
                "know-more": "Learn about our impact",

                // Contact
                "join-us": "Join us",
                "start-today": "Start today with Agromind",
                "contact-desc": "If you're looking to optimize your fieldwork or advise with precise data, our team is here to support you.",
                "benefit-1": "Free and easy registration",
                "benefit-2": "Personalized advice",
                "benefit-3": "Available customer support",
                "register-now": "Register now",
                "learn-more": "Learn more",

                // Footer
                "footer-desc": "We connect farmers and agronomists through digital solutions for the field, contributing, optimizing traceability, productivity and technical advice in the field.",
                "platform": "Platform",
                "company": "Company",
                "legal": "Legal",
                "copyright": "© 2025 Agromind All rights reserved.",
                "made-with": "Made with ❤️ by UPC students",

                "job-farmer": "Farmer",
                "job-agronomist": "Agronomist",
                "job-producer": "Producer",
                "job-specialist": "Agricultural Specialist",

                "price-period": "/month",

                "plan-1-feature-1": "Basic crop registration",
                "plan-1-feature-2": "Up to 3 plots and 1 organization",
                "plan-1-feature-3": "Basic reports",
                "plan-1-feature-4": "Email support",

                "plan-2-feature-1": "Everything from AgroStart",
                "plan-2-feature-2": "Up to 20 plots and 3 organizations",
                // Pricing
                "pricing-title": "Choose the perfect plan for you",
                "pricing-desc": "Flexible plans designed for farmers and agronomists of all sizes",
                "plans": "Plans",
                "most-popular": "Most Popular",

                "plan-1-title": "AgroStart",
                "plan-1-desc": "Ideal for small farmers looking to digitize their basic records",

                "plan-2-title": "AgroSmart",
                "plan-2-desc": "Perfect for medium farmers with multiple crops and analysis needs",

                "plan-3-title": "AgroExpert",
                "plan-3-desc": "Complete solution for large producers and agricultural cooperatives",

                "contact-sales": "Contact sales",

                "plan-2-feature-3": "Real-time monitoring",
                "plan-2-feature-4": "Automatic alerts",
                "plan-2-feature-5": "Priority support",

                "plan-3-feature-1": "Unlimited features (plots and organizations without restriction)",
                "plan-3-feature-2": "Everything from AgroSmart",
                "plan-3-feature-3": "Expert advice",
                "plan-3-feature-4": "Advanced analytics",
                "plan-3-feature-5": "Real-time weather alerts",
                "plan-3-feature-6": "24/7 support",

            }
        };

        let currentLanguage = 'es';

        const languageBtn = document.querySelector('.btn-language');
        const currentLangSpan = document.querySelector('.current-lang');
        const altLangSpan = document.querySelector('.alt-lang');

        function toggleLanguage() {
            currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
            const nextLanguage = currentLanguage === 'es' ? 'en' : 'es';
            
            // Actualizar el botón de idioma
            currentLangSpan.textContent = currentLanguage.toUpperCase();
            altLangSpan.textContent = nextLanguage.toUpperCase();

            // Actualizar todos los elementos traducibles
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[currentLanguage][key]) {
                    element.textContent = translations[currentLanguage][key];
                }
            });

            // Actualizar el atributo lang del HTML
            document.documentElement.lang = currentLanguage;
        }

        languageBtn.addEventListener('click', toggleLanguage);

        // Form validation
        const contactForm = document.getElementById('contact-form');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            if (!nombre || !email || !mensaje) {
                alert('Por favor completa todos los campos');
                return;
            }
            
            if (!email.includes('@')) {
                alert('Por favor ingresa un email válido');
                return;
            }
            
            // Aquí normalmente enviarías el formulario a un servidor
            console.log('Formulario enviado:', { nombre, email, mensaje });
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        });

document.addEventListener('DOMContentLoaded', function() {
    // Get all navbar links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section id from the href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
