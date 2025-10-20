// Création du background
const background = {
    videoSrc: '/video/bg.mp4',
    videoElement: null,

    createVideoElement() {
        const video = document.createElement('video');
        video.src = this.videoSrc;
        video.autoplay = true;
        video.loop = true;
        video.muted = true; 
        video.playsInline = true;
        video.volume = 0.5;
        video.style.position = 'fixed';
        video.style.top = '0';
        video.style.left = '0';
        video.style.width = '100vw';
        video.style.height = '100vh';
        video.style.objectFit = 'cover';
        video.style.zIndex = '-1';
        video.style.pointerEvents = 'none';
        return video;
    },

    playBackground() {
        if (!this.videoElement) {
            this.videoElement = this.createVideoElement();
            document.body.appendChild(this.videoElement);
            this.videoElement.play().catch(error => {
                console.error('La lecture automatique de la vidéo a été bloquée :', error);
            });
        }
    }
};

// Fonctions d'animation regroupées dans un seul objet
const animations = {
    animationLogo() {
        const logo = document.getElementById('logo');
        if (logo) {
            logo.style.position = 'absolute';
            logo.style.top = '-45%';
            logo.style.left = '3%';
            logo.style.transform = 'translateY(-50%)';
            logo.style.transition = 'top 0.8s cubic-bezier(0.4,0,0.2,1), opacity 0.6s';
            logo.style.opacity = '0';
            void logo.offsetWidth; 
            setTimeout(() => {
                logo.style.opacity = '1';
                logo.style.top = '10%';
            }, 100);
        }
    },

    // Fonction pour animer le contenu principal lors de l'affichage des éléments
    animationMainContent() {
        const mainContent = document.getElementById('projects-container');
        if (mainContent) {
            mainContent.style.position = 'absolute';
        mainContent.style.top = '100%';
        mainContent.style.left = '50%';
        mainContent.style.opacity = '0';
        mainContent.style.width = '90rem';
        mainContent.style.height = '100%';
        mainContent.style.display = 'flex';
        mainContent.style.flexDirection = 'column';
        mainContent.style.justifyContent = 'center';
        mainContent.style.alignItems = 'center';
        void mainContent.offsetWidth;
        setTimeout(() => {
            mainContent.style.transition = 'top 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            mainContent.style.top = '0';
            mainContent.style.left = '50%';
            mainContent.style.transform = 'translate(-50%, 0)';
            mainContent.style.opacity = '1';
        }, 100);
    }
},

    // Fonction pour animer les icônes lors de l'affichage des éléments
    animationIcons() {
        const icons = document.getElementById('icons');
        if (icons) {
            icons.style.position = 'fixed';
            icons.style.bottom = '-100%';
            icons.style.left = '50%';
            icons.style.transform = 'translateX(-50%)';
            icons.style.opacity = '0';
            void icons.offsetWidth;
            setTimeout(() => {
                icons.style.opacity = '1';
                icons.style.bottom = '20px';
                icons.style.transition = 'opacity 0.6s, bottom 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)';
            }, 100);
        }
    },

    // Fonction pour animer le menu
    animationMenu() {
        const menu = document.getElementById('menu');
        if (menu) {
            menu.style.position = 'fixed';
            menu.style.top = '0';
            menu.style.right = '0';
            menu.style.opacity = '0';
            void menu.offsetWidth;
            setTimeout(() => {
                menu.style.opacity = '1';
                menu.style.transition = 'opacity 1.5s';
            }, 100);
        }
    }
};

// Gestionnaire du loader
const loaderManager = {
    audio: null,
    loader: null,
    mainContent: null,
    minDisplayTime: 6000,
    startTime: null,

    init() {
        this.loader = document.getElementById('loader');
        this.mainContent = document.getElementById('main-content');
        this.audio = document.getElementById('loader-audio');

        if (!this.audio) {
            this.audio = document.createElement('audio');
            this.audio.id = 'loader-audio';
            this.audio.src = '/music/loader.mp3';
            this.audio.loop = true;
            this.audio.autoplay = true;
            this.audio.volume = 1;
            document.body.appendChild(this.audio);
        }

        if (this.mainContent) {
            this.mainContent.style.display = 'none';
        }
        if (this.loader) {
            this.loader.style.opacity = 1;
        }

        this.startTime = Date.now();
        window.addEventListener('load', () => this.tryHideLoader());
    },

    // Réduire l'audio lorsque le loader disparaît
    fadeOutAudio(duration = 600, callback) {
        if (!this.audio) return;
        const step = 50;
        const volumeStep = this.audio.volume / (duration / step);
        const fade = () => {
            if (this.audio.volume > volumeStep) {
                this.audio.volume = Math.max(0, this.audio.volume - volumeStep);
                setTimeout(fade, step);
            } else {
                this.audio.volume = 0;
                this.audio.pause();
                if (callback) callback();
            }
        };
        fade();
    },

    // Fonction pour masquer le loader
    fadeOutLoader(callback) {
        if (!this.loader) return;
        const duration = 600;
        this.loader.style.transition = `opacity ${duration}ms`;
        this.loader.style.opacity = 0;
        setTimeout(() => {
            this.loader.style.display = 'none';
            if (callback) callback();
        }, duration);
    },

    // Fonction pour masquer le loader après un temps minimum
    tryHideLoader() {
        const elapsed = Date.now() - this.startTime;
        if (elapsed >= this.minDisplayTime) {
            this.fadeOutLoader(() => {
                if (this.mainContent) {
                    this.mainContent.style.display = 'flex';
                    background.playBackground();
                    animations.animationLogo();
                    animations.animationIcons();
                    animations.animationMenu();
                    animations.animationMainContent();
                }
            });
            this.fadeOutAudio();
        } else {
            setTimeout(() => this.tryHideLoader(), this.minDisplayTime - elapsed);
        }
    }
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    loaderManager.init();
});