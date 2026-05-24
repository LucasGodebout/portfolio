// Configuration du background vidéo
const background = {
    videoSrc: './assets/images/bg.mp4',
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

// Configuration des pages projets (Tooltips & Modales)
const modalPages = {
    'my-and-community-page': {
        dataName: 'My-and-community',
        class: 'MAC',
        logo: './assets/images/projets/Logo_MYco_noir.svg',
        title: 'My and Community',
        description: `My and Community est une entreprise de création de sites web sur mesure et responsive, des sites vitrines, sites de e-commerce, ou encore des applications mobiles, le tout administrable via un back office commun à tous ses clients. Lors de mon stage de 44 jours entre Avril et Juin, j'ai participé au développement d'une application sur mesure, réalisé en XML et C++ via l'IDE QT Creator, pour Campers Van Rouen, une entreprise de réparation et d'entretien de véhicules de loisir. L'application contient un système d'état des lieux permettant de voir les photos des réparations des différents dossiers en cours et de modifier certaines informations lorsque le fichier n'est pas clos. Grâce à cette application, Campers Van Rouen ne pourra plus se faire arnaquer par des clients qui  se plaignent d'une dégradation du véhicule après réparation alors qu'elle a été notifiée lors de l'état des lieux. De plus, les dossiers sont disponibles sur un back-office permettant de voir les dossiers depuis chez soi.`,
        project: 'PROJET ENTREPRISE',
        logiciels: ['./assets/images/tech/HTML.svg', './assets/images/tech/CSS.svg', './assets/images/tech/PHP.svg', './assets/images/tech/JS.svg', './assets/images/tech/SQL.svg', './assets/images/tech/QT.svg', './assets/images/tech/Figma.svg'],
        backgroundColor: 'hsla(191, 62%, 61%, 1)',
        textColor: '#ffffff',
        dateDebut: '2025-04-31',
        video: 'https://youtu.be/vPpgDbADsN0',
        github: '',
        site: '',
    },
    'bds-win-angers-page': {
        dataName: 'Bureau-des-Sports-Angers',
        class: 'BDS',
        logo: './assets/images/projets/logo_BDS_WIN_ANGERS.svg',
        title: 'Bureau des Sports Angers',
        description: `Le Bureau des Sports de WIN Sport School Angers est une association étudiante visant à dynamiser la vie sportive et à proposer des activités aux étudiants, notamment au sein des Écoles Supérieures des Pays de la Loire. Ce projet a été réalisé lors de mon partiel de fin de 1ère année et j'ai du réaliser l'entièreté du projet, c'est à dire le marketing de l'entreprise, la maquette du site, l'intégration de cette maquette, ainsi que la communication sur les réseaux sociaux. Pour ce qui est du site, l'objectif était de le faire grâce à WordPress, mais j'ai préféré le développer en HTML, CSS, JavaScript et PHP pour montrer mes capacités de développement web. Lors du développement je me suis occupé de la page d'accueil qui fait office de résumé de l'association et des pages présentes sur le site web, une page de calendrier afin de voir les futurs événements avec un système de filtre en fonction des sports, une page résultat pour voir les résultats des différentes compétiions avec le même système de filtre, une page galerie pour voir les photos des événements passés, une page de contact et enfin un espace membre avec un système de connexion. Ce projet m'a permis de montrer les résultats de mon apprentissage en développement web et dans les autres compétences enseignées à My Digital School, mais aussi de me confronter à un projet complet en autonomie, ce qui m'a permis de développer mes compétences en gestion de projet et en organisation.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['./assets/images/tech/HTML.svg', './assets/images/tech/CSS.svg', './assets/images/tech/PHP.svg', './assets/images/tech/JS.svg', './assets/images/tech/Figma.svg'],
        backgroundColor: 'hsla(234, 96%, 80%, 1.00)',
        textColor: '#ffffff',
        dateDebut: '2025-03-18',
        video: '',
        github: 'https://github.com/LucasGodebout/BDS-WIN-ANGERS',
        site: 'https://lucas-godebout.mds-angers.yt/bds-win-angers/',
    },
    'dans-les-bras-d-antoine-page': {
        dataName: 'Dans-les-bras-d-Antoine',
        class: 'DLBA',
        logo: './assets/images/projets/Logo_Antoine.svg',
        title: 'Dans les bras d\'Antoine',
        description: `Dans les bras d'Antoine est une association qui lutte contre les cancers pédiatriques suite au décès d'Antoine à 15 ans. Elle a pour but de récolter des fonds pour la recherche contre ce type de cancer. Ce projet a été réalisé lors d'un cours nommé "Digital Sans Frontière" où chaque groupe doit créer un site internet et réaliser la communication au profit d'une association. Lors de ce projet, j'ai pu travailler en équipe de 3 personnes avec une personne chargé de la maquette du site et une autre chargée de la communication de l'association. J'ai pour ma part réalisé le développement du site internet sur WordPress. Le site contient une page d'accueil présentant l'association et leur but, une page expliquant l'histoire de l'association, une page d'information sur les actualités concernant le cancer pédiatrique, une page pour devenir bénévole, une page de contact et enfin une page de dons avec un système de paiement en ligne sur le site Helloasso. Travailler sur ce projet était très intéressant car c'était la première fois qu'on travaillait avec un client réel, ce qui nous a permis de nous confronter à des demandes et des besoins réels, mais aussi de faire quelque chose d'utile pour une bonne cause, ce qui était très gratifiant. De plus, travailler en équipe sur un projet complet m'a permis de développer mes compétences en communication, en gestion de projet et en travail d'équipe, ce qui est très important dans le monde professionnel.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['./assets/images/tech/WordPress.svg', './assets/images/tech/Figma.svg'],
        backgroundColor: 'rgb(41, 131, 18)',
        textColor: '#ffffff',
        dateDebut: '2025-03-03',
        video: '',
        github: '',
        site: 'https://lucas-godebout.mds-angers.yt/Test/',
    },
    'imc-page':{
        dataName: 'IMC',
        class: 'IMC',
        logo: './assets/images/projets/Logo_IMC.svg',
        title: 'Calculateur d\'IMC',
        description: `Ce projet est un calculateur d'IMC (Indice de Masse Corporelle) développé en PHP. L'utilisateur peut entrer son poids et sa taille, et le programme calcule son IMC en utilisant la formule standard. En fonction de la valeur calculée, le programme affiche une catégorie de poids correspondante, allant de "Insuffisance pondérale" à "Obésité sévère". Tous les résultats sont enregistrés dans un fichier texte et affichés sur le site. Ce projet de fin de matière sur l'environnement PHP m'a permis d'apprendre et de mettre en pratique les bases du développement web en PHP, ainsi que de comprendre comment gérer les données utilisateur et les stocker de manière simple.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['./assets/images/tech/HTML.svg', './assets/images/tech/CSS.svg', './assets/images/tech/PHP.svg'],
        backgroundColor: 'hsla(207, 50%, 70%, 1.00)',
        textColor: '#ffffff',
        dateDebut: '2025-01-21',
        video: '',
        github: 'https://github.com/LucasGodebout/IMC',
        site: 'https://lucas-godebout.mds-angers.yt/imc/',
    },
    'quizz-page':{
        dataName: 'Quizz',
        class: 'QUIZZ',
        logo: './assets/images/projets/Logo_Quizz.svg',
        title: 'Quizz',
        description: `Ce projet est un quizz interactif développé en JavaScript. Il présente une série de questions à choix multiples, permettant aux utilisateurs de tester leurs connaissances sur divers sujets. Le quizz suit les réponses de l'utilisateur, calcule le score final et affiche les résultats à la fin. Le design est simple et épuré, offrant une expérience utilisateur agréable. Ce projet de fin de module sur le développement web en JavaScript m'a permis d'apprendre à manipuler le DOM, à gérer les événements utilisateur et à structurer une application web de manière efficace.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['./assets/images/tech/HTML.svg', './assets/images/tech/CSS.svg', './assets/images/tech/JS.svg'],
        backgroundColor: 'hsla(140, 43.7%, 72.2%, 1.00)',
        textColor: '#ffffff',
        dateDebut: '2025-01-10',
        video: '',
        github: 'https://github.com/LucasGodebout/Quizz',
        site: 'https://lucas-godebout.mds-angers.yt/quizz/',
    },
    'smart-drive-page':{
        dataName: 'Smart Drive',
        class: 'SD',
        logo: './assets/images/projets/logo_SD_rouge.svg',
        title: 'Smart Drive',
        description: `Smart Drive est un projet proposant un service de transport autonome, conçu pour des déplacements rapides, écologiques et confortables. Similaire aux taxis mais sans chauffeur, il cible une clientèle aisée de 20 à 60 ans en quête d'une expérience de voyage unique et innovante. Ce projet a été réalisé lors de mon premier partiel en groupe de 3 personnes, où nous devions créer une entreprise fictive et réaliser le marketing, la maquette du site internet, l'intégration et la communication. J'ai principalement travaillé sur le développement du site web en HTML, CSS et JavaScript, en intégrant les nombreuses pages du sites et quelque fonctionnalité comme le responsive ou encore un menu burger. Ce projet m'a permis de mettre en pratique mes compétences en développement web tout en développant ma créativité et ma capacité à travailler en équipe sur un projet complet.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['./assets/images/tech/HTML.svg','./assets/images/tech/CSS.svg','./assets/images/tech/JS.svg','./assets/images/tech/GIT.svg'],
        backgroundColor: 'hsla(359, 72%, 37%, 1)',
        textColor:'#fff',
        dateDebut: '2024-12-16',
        video: '',
        github: 'https://github.com/LucasGodebout/Smart-Drive',
        site: 'https://lucas-godebout.mds-angers.yt/SmartDrive/',
    },
    'lego-page':{
        dataName: 'Lego',
        class: 'LEGO',
        logo: './assets/images/projets/logo_lego.svg',
        title: 'Lego Store',
        description: `Ce projet est une réplique simplifiée d'un site de e-commerce pour la marque Lego fait sur WordPress. L'objectif était d'apprendre à utiliser WordPress en premier lieu notamment avec le plugin Elementor, puis j'ai ajouté le plugin WooCommerce pour obtenir un site d'e-commerce fonctionnel. Ce projet m'a permis de découvrir les possibilités offertes par WordPress et de comprendre comment créer un site web complet en utilisant des plugins, tout en développant mes compétences en design et en gestion de contenu. Le site contient une page d'accueil présentant la marque et les différentes catégories de produits, une page boutique avec les différents produits proposés à la vente, des pages de détails produits, une page de panier et enfin un espace membre avec un système de connexion. Bien que ce projet soit moins technique que les autres, il m'a permis d'apprendre à utiliser un CMS et à créer un site web fonctionnel sans avoir à coder toutes les fonctionnalités moi-même`,
        project: 'PROJET ÉCOLE',
        logiciels: ['./assets/images/tech/WordPress.svg','./assets/images/tech/Figma.svg'],
        backgroundColor: 'rgb(235, 108, 108)',
        textColor:'#fff',
        dateDebut: '2024-10-10',
        video: '',
        github: '',
        site: 'https://lucas-godebout.mds-angers.yt/lego/',
    },
    'undertale-page':{
        dataName: 'Undertale',
        class: 'UNDERTALE',
        logo: './assets/images/projets/logo_undertale.svg',
        title: 'Undertale',
        description: `Ce site est un projet web réalisé autour de l’univers du jeu Undertale créé par Toby Fox. Il s’agit d’un site vitrine dédié à l’exploration de l’histoire, des personnages emblématiques, des musiques et de l’esthétique unique du jeu, à travers un design immersif et une navigation simple. Ce projet a été réalisé dans le cadre d'un cours de développement web où l'objectif était de créer un site web statique en utilisant HTML et CSS. Le site devait posséder 3 pages distinctes : une page d'accueil, une autre page du style boutique, présentation et plus, et enfin une page contact.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['./assets/images/tech/HTML.svg','./assets/images/tech/CSS.svg','./assets/images/tech/JS.svg', './assets/images/tech/Figma.svg'],
        backgroundColor: 'hsla(199, 20%, 20%, 1.00)',
        textColor:'#fff',
        dateDebut: '2024-10-11',
        video: '',
        github: 'https://github.com/LucasGodebout/Undertale',
        site: 'https://lucas-godebout.mds-angers.yt/undertale/',
    },
    'Password-Generator-page':{
        dataName: 'Password Generator',
        class: 'PASSWORD-GENERATOR',
        logo: './assets/images/projets/logo_PG.svg',
        title: 'Password Generator',
        description: `Ce projet est un générateur de mots de passe sécurisé développé en JavaScript. Il permet aux utilisateurs de créer des mots de passe aléatoires en fonction de critères personnalisables tels que la longueur et les types de caractères (majuscules, minuscules, chiffres, symboles). Le générateur a été créé suite à un besoin personnel de créer des mots de passe sécurisés sans passer par des sites externes qui peuvent récupérer ces mots de passe ainsi que pour apprendre à développer en JavaScript.`,
        project: 'PROJET PERSONNEL',
        logiciels: ['./assets/images/tech/HTML.svg','./assets/images/tech/CSS.svg','./assets/images/tech/JS.svg'],
        backgroundColor: 'lightseagreen',
        textColor:'#fff',
        dateDebut: '2025-09-20',
        video: '',
        github: 'https://github.com/LucasGodebout/Password-Generator',
        site: 'https://lucas-godebout.mds-angers.yt/password-generator/',
    },
    'Cry-O-page':{
        dataName: 'Cry-O',
        class: 'CRY-O',
        logo: './assets/images/projets/logo_Cry-o.svg',
        title: 'Cry-O',
        description: `Cry-O est un jeu de plateforme 2D développé avec Unity et C# lors d’une Game Jam organisée par My Digital School. En équipes pluridisciplinaires (développement, design, marketing), nous devions concevoir un jeu en une semaine autour du thème « la température ». Nous avons créé un jeu inspiré de Doodle Jump, dans lequel le joueur doit progresser vers le haut tout en échappant à une montée de lave. J’ai contribué principalement à la programmation et au game design. J’ai notamment développé la caméra dynamique, le décor infini, ainsi que la création et la génération aléatoire des plateformes avec leur physique. J’ai également implémenté les limites du niveau, la montée progressive de la lave, ainsi que les différentes scènes du jeu (menus, fin), les animations et le sound design. Ce projet, première expérience complète en développement de jeu vidéo, m’a permis de renforcer mes compétences techniques ainsi que mon travail en équipe et ma gestion de projet.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['./assets/images/tech/Unity.svg','./assets/images/tech/C-sharp.svg'],
        backgroundColor: 'hsla(199, 20%, 20%, 1.00)',
        textColor:'#fff',
        dateDebut: '2026-06-02',
        video: 'https://youtu.be/PMUlRrVcGAQ?si=gkznRwTvHJsSx6iG',
        github: 'https://github.com/LucasGodebout/Cry-O',
        site: 'https://sarahgadrasgmailcom.itch.io/cry-o',
    },
    'Omeega-page':{
        dataName: 'Omeega',
        class: 'OMEEGA',
        logo: './assets/images/projets/Omeega.png',
        title: 'Omeega',
        description: `Omeega est un streamer sur Twitch qui joue principalement à Minecraft. Je fais partie de son équipe en tant que dérusher depuis août 2023, c'est-à-dire que je m'occupe de faire des clips de certains moments de streams pour les garder et réaliser une vidéo best-of sur YouTube. Mais depuis 2025, je m'occupe aussi à 90 % de la chaîne YouTube des rediffusions de ses lives. Je m'occupe de faire la programmation des vidéos, les titres, les descriptions, les playlists sur youtube studio et, tout récemment, les miniatures grâce à Blockbench, Blender et Photoshop. J'aime beaucoup cet aspect un peu plus créatif que le développement et je suis très content de pouvoir faire ça pour lui, d'autant plus que c'est un projet bénévole et que je le fais par passion pour le contenu qu'il crée.`,
        project: 'BÉNÉVOLAT',
        logiciels: ['./assets/images/tech/YouTube-Studio.svg','./assets/images/tech/Premiere.svg','./assets/images/tech/Photoshop.svg', './assets/images/tech/Blender.svg', './assets/images/tech/Discord.svg', './assets/images/tech/Notion.svg','./assets/images/tech/Blockbench.png'],
        backgroundColor: 'lightseagreen',
        backgroundImage: 'url("./assets/images/projets/Omeega-background.gif")',
        textColor:'#fff',
        dateDebut: '2023-08-14',
        video: 'https://youtu.be/OyyNqhiwiAc?si=TIAa3BMcbe_qeVXT',
        github: '',
        site: 'https://www.youtube.com/channel/UCYLvbF3lISufIU_HC_uwDDg',
    }
};

const modalOverlay = document.getElementById('modal-overlay');
const modalPage = document.getElementById('modal-page');
const modalLogo = document.getElementById('modal-logo');
const modalTitle = document.getElementById('modal-title');
const modalProject = document.getElementById('modal-project');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.getElementById('modal-close');
const modalSoftware = document.getElementById('modal-software');
const projectsFirstPage = document.getElementById('project-first-page');
const modalGithub = document.getElementById('modal-github');
const modalSite = document.getElementById('modal-site');
const modalVideo = document.getElementById('modal-video');

const emailOverlay = document.getElementById('email-overlay');
const emailClose = document.getElementById('email-close');
const emailPage = document.getElementById('email-page');

// Élements de la page des Mentions Légales
const legalOverlay = document.getElementById('legal-overlay');
const legalClose = document.getElementById('legal-close');
const legalPage = document.getElementById('legal-page');

const cvOverlay = document.getElementById('cv-overlay');
const cvPage = document.getElementById('cv-page');
const cvClose = document.getElementById('cv-close');

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

    animationMainContent() {
        const mainContent = document.getElementById('projects-container');
        if (mainContent) {
            mainContent.style.top = '100%';
            mainContent.style.left = '50%';
            mainContent.style.opacity = '0';
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
                icons.style.transition = 'opacity 0.6s, bottom 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)';
                icons.style.bottom = '0';
            }, 100);
        }
    },

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
    },

    animatePageArrows() {
        const leftArrow = document.getElementById('change-page-left');
        const rightArrow = document.getElementById('change-page-right');
        const animArrow = (el, pos, start, end) => {
            if (!el) return;
            el.style.position = 'fixed';
            el.style.top = '50%';
            el.style[pos] = start;
            el.style.transform = 'translateY(-50%)';
            el.style.opacity = '0';
            void el.offsetWidth;
            setTimeout(() => {
                el.style.opacity = '1';
                el.style[pos] = end;
                el.style.transition = `opacity 0.6s, ${pos} 0.8s cubic-bezier(0.4,0,0.2,1)`;
            }, 100);
        };
        animArrow(leftArrow, 'left', '-50px', '20px');
        animArrow(rightArrow, 'right', '-50px', '20px');
    }
};

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

        if (this.mainContent) this.mainContent.style.display = 'none';
        if (this.loader) this.loader.style.opacity = 1;

        this.startTime = Date.now();
        window.addEventListener('load', () => this.tryHideLoader());
    },

    fadeOutAudio(duration = 600) {
        if (!this.audio) return;
        const step = 50;
        const volStep = this.audio.volume / (duration / step);
        const fade = () => {
            if (this.audio.volume > volStep) {
                this.audio.volume -= volStep;
                setTimeout(fade, step);
            } else {
                this.audio.volume = 0;
                this.audio.pause();
            }
        };
        fade();
    },

    fadeOutLoader(callback) {
        if (!this.loader) return;
        this.loader.style.transition = `opacity 600ms`;
        this.loader.style.opacity = 0;
        setTimeout(() => {
            this.loader.style.display = 'none';
            if (callback) callback();
        }, 600);
    },

    tryHideLoader() {
        const elapsed = Date.now() - this.startTime;
        const remaining = Math.max(0, this.minDisplayTime - elapsed);
        
        setTimeout(() => {
            this.fadeOutLoader(() => {
                if (this.mainContent) {
                    this.mainContent.style.display = 'flex';
                    background.playBackground();
                    animations.animationLogo();
                    animations.animationIcons();
                    animations.animationMenu();
                    animations.animationMainContent();
                    animations.animatePageArrows();
                    createProjectArticles(); // Création des projets après loader
                }
            });
            this.fadeOutAudio();
        }, remaining);
    }
};

// Création dynamique des projets dans la grille
function createProjectArticles() {
    if (!projectsFirstPage) return;
    projectsFirstPage.innerHTML = '';

    Object.entries(modalPages).forEach(([pageId, config]) => {
        const article = document.createElement('article');
        article.dataset.channelShow = pageId;
        article.className = `project ${config.class}`;
        
        const img = document.createElement('img');
        img.src = config.logo;
        img.alt = `Logo de ${config.title}`;
        
        article.appendChild(img);
        projectsFirstPage.appendChild(article);

        // Event: Ouvrir la modale au clic
        article.addEventListener('click', () => openModalPage(pageId));
    });

    // Remplissage avec des cases vides pour la grille (15 total)
    while (projectsFirstPage.childElementCount < 15) {
        const empty = document.createElement('article');
        empty.className = 'project';
        projectsFirstPage.appendChild(empty);
    }
    sortProjectsByEndDate();
}

// Fonction pour trier par date de fin les projets
function sortProjectsByEndDate() {
    if (!projectsFirstPage) return;
    const articles = Array.from(projectsFirstPage.querySelectorAll('article'));

    // Séparer les articles ayant une date valide et les autres
    const withDates = [];
    const withoutDates = [];
    articles.forEach(article => {
        const pageId = article.dataset.channelShow;
        const pageConfig = pageId ? modalPages[pageId] : null;
        const dateStr = pageConfig ? pageConfig.dateDebut : null;
        if (!dateStr) {
            withoutDates.push(article);
            return;
        }
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) {
            withoutDates.push(article);
            return;
        }
        withDates.push({ article, date });
    });
    // Trier du plus récent (date la plus grande) au plus ancien
    withDates.sort((a, b) => b.date - a.date);

    // Réordonner les éléments dans le DOM : d'abord les projets avec date triés, puis les autres
    withDates.forEach(item => projectsFirstPage.appendChild(item.article));
    withoutDates.forEach(article => projectsFirstPage.appendChild(article));
}

// Gestion des Tooltips (Bulles au survol)
document.addEventListener('mouseover', function (e) {
    const target = e.target.closest('[data-channel-show]');
    if (target && !document.querySelector('.project-bubble')) {
        const pageId = target.getAttribute('data-channel-show');
        const bubble = document.createElement('div');
        bubble.className = 'project-bubble';
        bubble.textContent = modalPages[pageId].title;
        target.appendChild(bubble);

        const bubbleRect = bubble.getBoundingClientRect();
        const containerRect = projectsFirstPage.getBoundingClientRect();

        // Correction de direction si la bulle dépasse en bas
        if (bubbleRect.bottom > containerRect.bottom) {
            bubble.style.top = '-60px';
            bubble.setAttribute('data-direction', 'down');
        }

        target.addEventListener('mouseleave', () => bubble.remove(), { once: true });
    }
});

function openModalPage(pageId) {
    const config = modalPages[pageId];
    if (!config) return;

    modalTitle.textContent = config.title;
    modalLogo.src = config.logo;
    modalProject.textContent = config.project;
    modalDescription.textContent = config.description;

    // Gestion des liens (Afficher/Cacher)
    const setupLink = (el, url) => {
        if (url && url.trim() !== '') {
            el.style.display = 'block';
            el.href = url;
        } else {
            el.style.display = 'none';
        }
    };
    setupLink(modalGithub, config.github);
    setupLink(modalSite, config.site);
    setupLink(modalVideo, config.video);

    // Style de fond
    if (config.backgroundImage) {
        modalPage.style.backgroundImage = config.backgroundImage;
        modalPage.style.backgroundSize = 'cover';
    } else {
        modalPage.style.backgroundImage = 'none';
        modalPage.style.backgroundColor = config.backgroundColor;
    }
    modalPage.style.color = config.textColor;

    modalProject.classList.remove('entreprise', 'ecole', 'benevolat', 'personnel');
    if (config.project === 'PROJET ENTREPRISE') {
        modalProject.classList.add('entreprise');
    } else if (config.project === 'PROJET ÉCOLE') {
        modalProject.classList.add('ecole');
    } else if (config.project === 'BÉNÉVOLAT') {
        modalProject.classList.add('benevolat');
    } else if (config.project === 'PROJET PERSONNEL') {
        modalProject.classList.add('personnel');
    }

    // Logiciels
    if (modalSoftware) {
        modalSoftware.innerHTML = '<h2 class="modal-container-title">Logiciels utilisés :</h2>';
        const list = document.createElement('div');
        list.className = 'modal-software-list';
        config.logiciels.forEach(src => {
            const item = document.createElement('div');
            item.className = 'modal-software-item';
            const img = document.createElement('img');
            img.src = src;
            list.appendChild(item).appendChild(img);
        });
        modalSoftware.appendChild(list);
    }

    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
            closeModalPage();
        }
    });
}

function closeModalPage() {
    modalPage.classList.add('closing');
    setTimeout(() => {
        modalOverlay.style.display = 'none';
        modalPage.classList.remove('closing');
        document.body.style.overflow = 'auto';
    }, 400);
}

function openEmailPage() {
    console.log('Ouverture de la page email');
    // Afficher la page email
    emailOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Fermer la page email en cliquant sur le bouton de fermeture
    if (emailClose) {
        emailClose.addEventListener('click', closeEmailPage);
    }

    // Fermer la page email en cliquant à l'extérieur
    if (emailOverlay) {
        emailOverlay.addEventListener('click', function(e) {
            if (e.target === emailPage) {
                closeEmailPage();
            }
        });
    }
    
    // Fermer la page email avec la touche Échap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && emailOverlay.style.display === 'flex') {
            closeEmailPage();
        }
    });
}

// Fonction pour fermer la page email
function closeEmailPage() {
    // Ajouter la classe pour l'animation de fermeture
    const emailPage = document.getElementById('email-page');
    emailPage.classList.add('closing');

    // Attendre la fin de l'animation avant de cacher la modale
    setTimeout(() => {
        emailOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Retirer la classe d'animation
        emailPage.classList.remove('closing');
    }, 300); // Durée de l'animation
}

$(document).ready(function() {
    $('#email-form').on('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page

        // Récupération des données du formulaire
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            company: $('#company').val(),
            message: $('#message').val()
        };

        // Envoi via AJAX
        $.ajax({
            type: 'POST',
            url: './contact-gateway.php', // Chemin vers ton fichier PHP
            data: formData,
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    alert(response.message);
                    $('#email-form')[0].reset();
                } else {
                    alert('Erreur : ' + response.message);
                }
            },
            error: function() {
                alert('Une erreur technique est survenue lors de l\'envoi.');
            }
        });
    });
});

function openLegalPage() {
    console.log('Ouverture de la page Mentions Légales');
    // Afficher la page Mnentions Légales
    legalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Fermer la page Mentions Légales en cliquant sur le bouton de fermeture
    if (legalClose) {
        legalClose.addEventListener('click', closeLegalPage);
    }

    // Fermer la page Mentions Légales en cliquant à l'extérieur
    if (legalOverlay) {
        legalOverlay.addEventListener('click', function(e) {
            if (e.target === legalPage) {
                closeLegalPage();
            }
        });
    }
    
    // Fermer la page Mentions Légales avec la touche Échap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && legalOverlay.style.display === 'flex') {
            closeLegalPage();
        }
    });
}

// Fonction pour fermer la page Mentins Légales
function closeLegalPage() {
    // Ajouter la classe pour l'animation de fermeture
    const legalPage = document.getElementById('legal-page');
    legalPage.classList.add('closing');

    // Attendre la fin de l'animation avant de cacher la modale
    setTimeout(() => {
        legalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Retirer la classe d'animation
        legalPage.classList.remove('closing');
    }, 300); // Durée de l'animation
}

// Fonction pour ouvrir la modale du CV (Mentions Légales)
function openCVPage() {
    console.log('Ouverture de la page CV');

    if (!cvOverlay || !cvPage) return;

    cvOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    if (background.videoElement && !cvPage.querySelector('.bg-video-modal')) {
        const clonedVideo = background.videoElement.cloneNode(true);
        clonedVideo.classList.add('bg-video-modal');
        clonedVideo.muted = true;
        clonedVideo.play().catch(error => console.log("Lecture du clone CV bloquée :", error));        
        cvPage.insertBefore(clonedVideo, cvPage.firstChild);
    }

    if (cvClose) {
        cvClose.addEventListener('click', closeCVPage);
    }

    cvOverlay.addEventListener('click', function(e) {
        if (e.target === cvOverlay) {
            closeCVPage();
        }
    });
    
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && cvOverlay.style.display === 'flex') {
            closeCVPage();
        }
    });
}

function closeCVPage() {
    
    if (!cvOverlay || !cvPage) return;

    cvPage.classList.add('closing');

    setTimeout(() => {
        const modalVideo = cvPage.querySelector('.bg-video-modal');
        if (modalVideo) {
            modalVideo.remove();
        }   
        cvOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        cvPage.classList.remove('closing');
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    loaderManager.init();
    
    if (modalClose) modalClose.addEventListener('click', closeModalPage);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModalPage();
        });
    }
});