// Birthday Surprise Website - Main JavaScript
// =====================================================================
// FUNZIONI DI NAVIGAZIONE, ANIMAZIONI E EFFETTI INTERATTIVI
// 
// Struttura dei link:
// - Landing page (index.html) → pages/surprise.html
// - Surprise page (pages/surprise.html) → pages/{photos,music,letter,gift}.html
// - Tutte le pagine interne → Back button ritorna a pages/surprise.html
// - Landing page "No" button → mostra alert
// 
// Tutte le transizioni usano fadeOutAndNavigate() per transizioni fluide
// =====================================================================

console.log('🎉 Birthday Surprise Website Loaded');

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Aggiunge animazione fade-in a un elemento
 */
function fadeInPage() {
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        body.style.opacity = '1';
    }, 50);
}

/**
 * Aggiunge animazione fade-out prima di navigare
 */
function fadeOutAndNavigate(url) {
    const body = document.body;
    body.style.transition = 'opacity 0.5s ease-out';
    body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

// ============================================
// PAGE LOAD ANIMATIONS
// ============================================

// Fade-in all'caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    fadeInPage();
    initializePageSpecificFeatures();
});

// ============================================
// BUTTON INTERACTIONS
// ============================================

/**
 * Gestisce click su link con navigazione fade
 */
function setupNavigationLinks() {
    const navLinks = document.querySelectorAll('a[href*=".html"]');
    navLinks.forEach(link => {
        if (!link.classList.contains('back-btn')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.href;
                fadeOutAndNavigate(href);
            });
        }
    });
}

/**
 * Setup per pulsante "No, thanks" - mostra alert
 */
function setupNoThanksButton() {
    const noBtn = document.querySelector('.btn-no');
    if (noBtn) {
        noBtn.addEventListener('click', function() {
            alert('Oh no! Maybe next time? 💔');
        });
    }
}

/**
 * Setup per pulsanti Back
 */
function setupBackButtons() {
    const backBtns = document.querySelectorAll('.back-btn');
    backBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            fadeOutAndNavigate(this.href);
        });
    });
}

// ============================================
// HOVER EFFECTS
// ============================================

/**
 * Aggiunge effetti hover alle icone
 */
function setupIconCardHovers() {
    const iconCards = document.querySelectorAll('.icon-card');
    iconCards.forEach((card, index) => {
        // Effetto hover con classe
        card.addEventListener('mouseenter', function() {
            this.classList.add('is-hovered');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('is-hovered');
        });
        
        // Effetto click con feedback visivo
        card.addEventListener('click', function(e) {
            const wrapper = this.querySelector('.icon-wrapper');
            if (wrapper) {
                wrapper.style.animation = 'none';
                setTimeout(() => {
                    wrapper.style.animation = '';
                }, 10);
            }
        });
    });
}

/**
 * Aggiunge effetti hover ai pulsanti
 */
function setupButtonHovers() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

/**
 * Aggiunge effetti hover alle Polaroid
 */
function setupPolaroidHovers() {
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach((polaroid) => {
        // Effetto tilt 3D al movimento mouse (solo se non scoperta)
        polaroid.addEventListener('mousemove', function(e) {
            if (this.classList.contains('revealed')) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(1.08)
                perspective(1000px)
            `;
        });
        
        polaroid.addEventListener('mouseleave', function() {
            const rotation = this.style.getPropertyValue('--rotation') || '0deg';
            this.style.transform = `rotate(${rotation})`;
        });
    });
}

// ============================================
// PAGE SPECIFIC INITIALIZATION
// ============================================

/**
 * Inizializza le features specifiche della pagina
 */
function initializePageSpecificFeatures() {
    // Setup buttons
    setupNoThanksButton();
    setupBackButtons();
    setupNavigationLinks();
    
    // Setup hover effects
    setupButtonHovers();
    setupIconCardHovers();
    setupPolaroidHovers();
    
    // Setup page-specific features
    setupMusicPageFeatures();
    setupLetterPageFeatures();
    setupPhotosPageFeatures();
}

// ============================================
// PHOTOS PAGE FEATURES
// ============================================

/**
 * Features specifiche per la pagina Photos con Polaroid
 */
function setupPhotosPageFeatures() {
    const polaroids = document.querySelectorAll('.polaroid');
    if (polaroids.length > 0) {
        polaroids.forEach((polaroid, index) => {
            // Anima l'apparizione delle polaroid
            polaroid.style.opacity = '0';
            setTimeout(() => {
                polaroid.style.opacity = '1';
                polaroid.style.transition = 'opacity 0.5s ease-in';
            }, index * 80);
            
            // Aggiungi click handler alla copertina
            const cover = polaroid.querySelector('.photo-cover');
            if (cover) {
                cover.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    polaroid.classList.add('revealed');
                });
            }
        });
    }
}

// ============================================
// MUSIC PAGE FEATURES
// ============================================

/**
 * Features specifiche per la pagina Music
 */
function setupMusicPageFeatures() {
    const musicContainer = document.querySelector('.music-container');
    if (musicContainer) {
        // Aggiunge effetto al caricamento del video
        const iframe = document.querySelector('.video-wrapper iframe');
        if (iframe) {
            iframe.style.opacity = '0';
            iframe.style.transition = 'opacity 0.8s ease-in';
            setTimeout(() => {
                iframe.style.opacity = '1';
            }, 300);
        }
    }
}

// ============================================
// LETTER PAGE FEATURES
// ============================================

/**
 * Features specifiche per la pagina Letter
 */
function setupLetterPageFeatures() {
    const letterPaper = document.querySelector('.letter-paper');
    if (letterPaper) {
        // Effetto hover sulla lettera
        letterPaper.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 25px 70px rgba(0, 0, 0, 0.25)';
        });
        
        letterPaper.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(0, 0, 0, 0.05)';
        });
        
        letterPaper.style.transition = 'all 0.3s ease';
    }
}

// ============================================
// ANIMATIONS UTILITIES
// ============================================

/**
 * Crea un effetto di shake (vibrazione)
 */
function shakeElement(element) {
    element.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

/**
 * Crea un effetto di pulse (pulsazione)
 */
function pulseElement(element) {
    element.style.animation = 'pulse 0.6s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 600);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

/**
 * Aggiungi scorciatoie da tastiera
 */
document.addEventListener('keydown', function(e) {
    // ESC per tornare indietro
    if (e.key === 'Escape') {
        const backBtn = document.querySelector('.back-btn');
        if (backBtn) {
            backBtn.click();
        }
    }
});

// ============================================
// SMOOTH SCROLL
// ============================================

/**
 * Smooth scroll per link interni
 */
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// ANIMATIONS CSS (Aggiunte dinamicamente)
// ============================================

// Injetta animazioni CSS se non presenti
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    
    /* Transizioni ottimizzate solo su elementi specifici per evitare lag */
    body {
        transition: opacity 0.5s ease;
    }
    
    /* Transizioni rapide su hover effects */
    button, .btn, .icon-card, .polaroid, .letter-paper {
        transition-property: transform, box-shadow, background-color, opacity;
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    /* Transizioni per la navigazione */
    a[href*=".html"] {
        transition: opacity 0.5s ease;
    }
    
    .is-hovered {
        transform: translateY(-15px) !important;
    }
`;
document.head.appendChild(style);

// ============================================
// CONFETTI - CORIANDOLI ANIMATI
// ============================================

const confettiColors = ['color-pink', 'color-red', 'color-blue', 'color-purple', 'color-cyan', 'color-green', 'color-yellow', 'color-orange'];

function createConfetti() {
    // Crea il contenitore dei coriandoli se non esiste
    if (!document.getElementById('confetti-container')) {
        const container = document.createElement('div');
        container.id = 'confetti-container';
        document.body.appendChild(container);
    }
}

function generateConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = `confetti ${confettiColors[Math.floor(Math.random() * confettiColors.length)]}`;
        
        // Posizione casuale
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        
        // Durata casuale tra 3 e 5 secondi
        const duration = 3 + Math.random() * 2;
        confetti.style.animationDuration = duration + 's';
        
        // Ritardo casuale
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        // Rotazione casuale
        confetti.style.transform = `rotateZ(${Math.random() * 360}deg)`;
        
        container.appendChild(confetti);
        
        // Rimuovi il coriandolo dopo che l'animazione è finita
        setTimeout(() => {
            confetti.remove();
        }, (duration + 0.5) * 1000);
    }
}

// Genera coriandoli ogni 2-3 secondi
createConfetti();
const confettiInterval = setInterval(generateConfetti, 2500);

// Pulisci l'intervallo quando la pagina cambia
window.addEventListener('beforeunload', () => {
    clearInterval(confettiInterval);
});

console.log('✨ All interactive features initialized!');
