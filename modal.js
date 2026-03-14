// Configuration des pages modales
const modalPages = {
    'my-and-community-page': {
        dataName: 'My-and-community',
        class: 'MAC',
        logo: 'images/projets/Logo_MYco_noir.svg',
        title: 'My and Community',
        description: `My and Community est une entreprise de création de sites web sur mesure et responsive, des sites vitrines, sites de e-commerce, ou encore des applications mobiles, le tout administrable via un back office commun à tous ses clients. Dans mon cas, j'ai participé à la création d'une application sur mesure pour Campers Van Rouen, une entreprise de réparation et d'entretien de véhicules de loisir. L'application contient un système d'état des lieux permettant de voir les photos des réparations des différents dossiers en cours et de modifier certaines informations lorsque le fichier n'est pas clos. Grâce à cette application, Campers Van Rouen ne pourra plus se faire arnaquer par des clients qui  se plaignent d'une dégradation du véhicule après réparation alors qu'elle a été notifiée lors de l'état des lieux. De plus, les dossiers sont disponibles sur un back-office permettant de voir les dossiers depuis chez soi.`,
        project: 'PROJET RÉEL',
        logiciels: ['images/tech/HTML.svg', 'images/tech/CSS.svg', 'images/tech/PHP.svg', 'images/tech/JS.svg', 'images/tech/SQL.svg', 'images/tech/QT.svg', 'images/tech/Figma.svg'],
        backgroundColor: 'hsla(191, 62%, 61%, 1)',
        textColor: '#ffffff',
        dateDebut: '2025-04-31',
        video: '',
        github: '',
    },
    'bds-win-angers-page': {
        dataName: 'Bureau-des-Sports-Angers',
        class: 'BDS',
        logo: 'images/projets/logo_BDS_WIN_ANGERS.svg',
        title: 'Bureau des Sports Angers',
        description: `Le Bureau des Sports de WIN Sport School Angers est une association étudiante créée par l'école de management et du sport d'Angers. Il a pour mission d’animer la vie sportive et de proposer diverses activités autour du sport à tous les étudiants, surtout ceux des Écoles Supérieur des Pays de la Loire. Le but de ce projet était de réaliser un site possédant une page d'accueil, un calendrier des matchs ou des évènements à venir, les derniers résultats sportif et un espace étudiant avec un formulaire d'inscription/de connexion sur Wordpress. Personnellement, j'ai préféré réaliser le site de A à Z en HTML, CSS, PHP et JavaScript afin d'avoir un contrôle total sur les fontionnalités du site, particulièrement sur la page du calendrier et les filtres des sports.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['images/tech/HTML.svg', 'images/tech/CSS.svg', 'images/tech/PHP.svg', 'images/tech/JS.svg', 'images/tech/Figma.svg'],
        backgroundColor: 'hsla(234, 96%, 80%, 1.00)',
        textColor: '#ffffff',
        dateDebut: '2025-03-18',
        video: '',
        github: 'https://github.com/LucasGodebout/BDS-WIN-ANGERS',
    },
    'dans-les-bras-d-antoine-page': {
        dataName: 'Dans-les-bras-d-Antoine',
        class: 'DLBA',
        logo: 'images/projets/Logo_Antoine.svg',
        title: 'Dans les bras d\'Antoine',
        description: `Dans les bras d'Antoine est une association qui lutte contre les cancers pédiatriques suite au décès d'Antoine à 15 ans. Elle a pour but de récolter des fonds pour la recherche contre ce type de cancer. Ce projet a été réalisé lors d'un cours nommé "Digital Sans Frontière" où chaque groupe doit créer un site internet et réaliser la communication au profit d'une association.`,
        project: 'PROJET RÉEL',
        logiciels: ['images/tech/WordPress.svg', 'images/tech/Figma.svg'],
        backgroundColor: 'rgb(245, 221, 204)',
        textColor: '#000',
        dateDebut: '2025-03-03',
        video: '',
        github: '',
    },
    'imc-page':{
        dataName: 'IMC',
        class: 'IMC',
        logo: 'images/projets/Logo_IMC.svg',
        title: 'Calculateur d\'IMC',
        description: `Ce projet est un calculateur d'IMC (Indice de Masse Corporelle) développé en PHP. L'utilisateur peut entrer son poids et sa taille, et le programme calcule son IMC en utilisant la formule standard. En fonction de la valeur calculée, le programme affiche une catégorie de poids correspondante, allant de "Insuffisance pondérale" à "Obésité sévère". Tous les résultats sont enregistrés dans un fichier texte et affichés sur le site.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['images/tech/HTML.svg', 'images/tech/CSS.svg', 'images/tech/PHP.svg'],
        backgroundColor: 'hsla(207, 50%, 70%, 1.00)',
        textColor: '#ffffff',
        dateDebut: '2025-01-21',
        video: '',
        github: 'https://github.com/LucasGodebout/IMC',
    },
    'quizz-page':{
        dataName: 'Quizz',
        class: 'QUIZZ',
        logo: 'images/projets/Logo_Quizz.svg',
        title: 'Quizz',
        description: `Ce projet est un quizz interactif développé en JavaScript. Il présente une série de questions à choix multiples, permettant aux utilisateurs de tester leurs connaissances sur divers sujets. Le quizz suit les réponses de l'utilisateur, calcule le score final et affiche les résultats à la fin. Le design est simple et épuré, offrant une expérience utilisateur agréable.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['images/tech/HTML.svg', 'images/tech/CSS.svg', 'images/tech/JS.svg'],
        backgroundColor: 'hsla(140, 43.7%, 72.2%, 1.00)',
        textColor: '#ffffff',
        dateDebut: '2025-01-10',
        video: 'https://github.com/LucasGodebout/Quizz',
    },
    'smart-drive-page':{
        dataName: 'Smart Drive',
        class: 'SD',
        logo: 'images/projets/logo_SD_rouge.svg',
        title: 'Smart Drive',
        description: `Smart Drive est un projet proposant un service de transport autonome, conçu pour des déplacements rapides, écologiques et confortables. Similaire aux taxis mais sans chauffeur, il cible une clientèle aisée de 20 à 60 ans en quête d'une expérience de voyage unique et innovante. Ce projet a été réalisé lors de mon premier partiel en groupe de 3. Je me suis donc occupé du site internet.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['images/tech/HTML.svg','images/tech/CSS.svg','images/tech/JS.svg','images/tech/GIT.svg'],
        backgroundColor: 'hsla(359, 72%, 37%, 1)',
        textColor:'#fff',
        dateDebut: '2024-12-16',
        video: '',
        github: 'https://github.com/LucasGodebout/Smart-Drive',
    },
    'lego-page':{
        dataName: 'Lego',
        class: 'LEGO',
        logo: 'images/projets/logo_lego.svg',
        title: 'Lego Store',
        description: `Ce projet est une réplique simplifiée d'un site de e-commerce pour la marque Lego fait sur WordPress. L'objectif était d'apprendre à utiliser WordPress en premier lieu, puis j'ai ajouté le plugin WooCommerce pour obtenir un site d'e-commerce fonctionnel. `,
        project: 'PROJET ÉCOLE',
        logiciels: ['images/tech/WordPress.svg','images/tech/Figma.svg'],
        backgroundColor: 'rgb(245, 233, 128)',
        textColor:'#000',
        dateDebut: '2024-10-10',
        video: '',
        github: '',
    },
    'undertale-page':{
        dataName: 'Undertale',
        class: 'UNDERTALE',
        logo: 'images/projets/logo_undertale.svg',
        title: 'Undertale',
        description: `Ce site est un projet web réalisé autour de l’univers du jeu Undertale créé par Toby Fox. Il s’agit d’un site vitrine dédié à l’exploration de l’histoire, des personnages emblématiques, des musiques et de l’esthétique unique du jeu, à travers un design immersif et une navigation simple. Ce projet a été réalisé dans le cadre d'un cours de développement web où l'objectif était de créer un site web statique en utilisant HTML et CSS. Le site devait posséder 3 pages distinctes : une page d'accueil, une autre page du style boutique, présentation et plus, et enfin une page contact.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['images/tech/HTML.svg','images/tech/CSS.svg','images/tech/JS.svg', 'images/tech/Figma.svg'],
        backgroundColor: 'hsla(199, 20%, 20%, 1.00)',
        textColor:'#fff',
        dateDebut: '2024-10-11',
        video: '',
        github: 'https://github.com/LucasGodebout/Undertale',
    },
    'Password-Generator-page':{
        dataName: 'Password Generator',
        class: 'PASSWORD-GENERATOR',
        logo: 'images/projets/logo_PG.svg',
        title: 'Password Generator',
        description: `Ce projet est un générateur de mots de passe sécurisé développé en JavaScript. Il permet aux utilisateurs de créer des mots de passe aléatoires en fonction de critères personnalisables tels que la longueur et les types de caractères (majuscules, minuscules, chiffres, symboles). Le générateur a été créé suite à un besoin personnel de créer des mots de passe sécurisés sans passer par des sites externes qui peuvent récupérer ces mots de passe.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['images/tech/HTML.svg','images/tech/CSS.svg','images/tech/JS.svg'],
        backgroundColor: 'lightseagreen',
        textColor:'#fff',
        dateDebut: '2025-09-20',
        video: '',
        github: 'https://github.com/LucasGodebout/Password-Generator',
    },
    'Cry-O-page':{
        dataName: 'Cry-O',
        class: 'CRY-O',
        logo: 'images/projets/logo_Cry-O.svg',
        title: 'Cry-O',
        description: `Cry-O est un jeu vidéo créer lors d'une Game Jam organisée par MyDigitalSchool. Le thème de cette Game Jam était "La température". Avec mon équipe nous avons décidé de créer un jeu dans le même style que Doodle Jump où le joueur doit grimper le plus vite afin d'échapper à la lave qui monte au fur et à mesure de la progression du joueur.`,
        project: 'PROJET ÉCOLE',
        logiciels: ['images/tech/Unity.svg','images/tech/C-sharp.svg'],
        backgroundColor: 'hsla(199, 20%, 20%, 1.00)',
        textColor:'#fff',
        dateDebut: '2026-06-02',
        video: 'https://youtu.be/PMUlRrVcGAQ?si=HHhwOvRIAOkRkPku',
        github: 'https://github.com/LucasGodebout/Cry-O',
    },
};

// Éléments DOM
const modalOverlay = document.getElementById('modal-overlay');
const modalPage = document.getElementById('modal-page');
const modalLogo = document.getElementById('modal-logo');
const modalTitle = document.getElementById('modal-title');
const modalProject = document.getElementById('modal-project');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.getElementById('modal-close');
const modalSoftware = document.getElementById('modal-software');
const modalVideo = document.getElementById('modal-video');
const projectsFirstPage = document.getElementById('project-first-page');
const projectSecondPage = document.getElementById('project-second-page');
const modalGithub = document.getElementById('modal-github');

// Nouveaux éléments pour la page email
const emailOverlay = document.getElementById('email-overlay');
const emailClose = document.getElementById('email-close');
const emailPage = document.getElementById('email-page');

// Élements de la page des Mentions Légales
const legalOverlay = document.getElementById('legal-overlay');
const legalClose = document.getElementById('legal-close');
const legalPage = document.getElementById('legal-page');

// Éléments pour changer de page
const changePageLeft = document.getElementById('change-page-left');
const changePageRight = document.getElementById('change-page-right');

// Fonction pour créer les articles des projets
function createProjectArticle() {
    if (projectsFirstPage) {
        projectsFirstPage.innerHTML = '';
        Object.entries(modalPages).forEach(([pageId, pageConfig]) => {
            const article = document.createElement('article');
            article.dataset.channelName = pageConfig.dataName;
            article.dataset.channelShow = pageId;
            article.className = 'project ' + pageConfig.class;
            const articleImage = document.createElement('img');
            articleImage.src = pageConfig.logo;
            articleImage.alt = `Logo de ${pageConfig.dataName}`;
            article.appendChild(articleImage);
            projectsFirstPage.appendChild(article);
        });
        do {
            const emptyArticle = document.createElement('article');
            emptyArticle.className = 'project';
            projectsFirstPage.appendChild(emptyArticle);
        } while (projectsFirstPage.childElementCount < 15);
        sortProjectsByEndDate();
    }
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

// Fonction pour ouvrir une page modale
function openModalPage(pageId) {
    const pageConfig = modalPages[pageId];

    if (!pageConfig) {
        console.error(`Page ${pageId} non trouvée`);
        return;
    }

    // Mettre à jour le contenu
    modalTitle.textContent = pageConfig.title;
    modalLogo.src = pageConfig.logo;
    modalProject.textContent = pageConfig.project;
    modalDescription.textContent = pageConfig.description;
    modalVideo.src = pageConfig.video;
    if (modalGithub) {
        modalGithub.setAttribute('href', pageConfig.github ? pageConfig.github : '#');
    }

    // Appliquer les styles spécifiques
    modalPage.style.background = pageConfig.backgroundColor;
    modalPage.id = pageId;
    modalPage.style.color = pageConfig.textColor;

    // Afficher la modale
    modalOverlay.style.display = 'flex';

    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';

    // Remplir la liste des logiciels
    if (modalSoftware) {
        modalSoftware.innerHTML = ''; // Vider le contenu précédent
        if (pageConfig.logiciels && pageConfig.logiciels.length > 0) {
            const softwareTitle = document.createElement('h2');
            softwareTitle.className = 'modal-container-title';
            softwareTitle.textContent = 'Logiciels utilisés :';
            modalSoftware.appendChild(softwareTitle);
            const listItems = document.createElement('div');
            listItems.className = 'modal-software-list';
            pageConfig.logiciels.forEach(logo => {
                const listItem = document.createElement('div');
                listItem.className = 'modal-software-item';
                const img = document.createElement('img');
                img.src = logo;
                img.alt = 'Logo logiciel';
                listItem.appendChild(img);
                listItems.appendChild(listItem);
            });
            modalSoftware.appendChild(listItems);
        }
    }

    // Ajouter la class "reel" ou "noreel" si le projet est réel ou non
    modalProject.classList.remove('reel', 'noreel', 'undetermined');
    if (pageConfig.project === 'PROJET RÉEL') {
        modalProject.classList.add('reel');
    } else if (pageConfig.project === 'PROJET ÉCOLE') {
        modalProject.classList.add('noreel');
    } else if (pageConfig.project === 'BÉNÉVOLAT') {
        modalProject.classList.add('benevole');
    }
}

// Fonction pour fermer la page modale de projet
function closeModalPage() {
    console.log('Fermeture de la modale de projet');
    // Ajouter la classe pour l'animation de fermeture
    modalPage.classList.add('closing');

    // Attendre la fin de l'animation avant de cacher la modale
    setTimeout(() => {
        if (modalOverlay) {
            modalOverlay.style.display = 'none';
        }
        document.body.style.overflow = 'auto';
        // Retirer la classe d'animation
        if (modalPage) {
            modalPage.classList.remove('closing');
        }
    }, 300); // Durée de l'animation
}


// Écouteurs d'événements
document.addEventListener('DOMContentLoaded', function () {
    // Gestionnaire pour les clics sur les projets et l'icône email
    document.addEventListener('click', function (e) {
        const targetElement = e.target.closest('[data-channel-show]');
        if (targetElement) {
            const pageId = targetElement.getAttribute('data-channel-show');
            openModalPage(pageId);
        }
    });

    document.addEventListener('mouseover', function (e) {
        const targetElement = e.target.closest('[data-channel-show]');
        if (targetElement) {
            const pageId = targetElement.getAttribute('data-channel-show');
            const bubble = document.createElement('div');
            bubble.className = 'project-bubble';
            bubble.textContent = modalPages[pageId].title;
            targetElement.appendChild(bubble);
            targetElement.addEventListener('mouseleave', function() {
                bubble.remove();
            });
        }
    });

    // Fermer la modale de projet en cliquant sur le bouton de fermeture
    if (modalClose) {
        modalClose.addEventListener('click', closeModalPage);
    }

    // Fermer la modale de projet en cliquant à l'extérieur
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === modalOverlay) {
                closeModalPage();
            }
        });
    }

    // Fermer la modale de projet avec la touche Échap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
            closeModalPage();
        }
    });
});

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

document.addEventListener('DOMContentLoaded', function () {
    const emailForm = document.getElementById('email-form');
    
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Désactiver le bouton pendant l'envoi
            const submitButton = emailForm.querySelector('.email-submit');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Envoi...';
            
            // Récupérer les données du formulaire
            const formData = new FormData(emailForm);
            
            // Envoyer la requête AJAX
            fetch('PHPMailer/contact.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur réseau');
                }
                return response.json();
            })
            .then(data => {
                // Réactiver le bouton
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                
                // Si succès
                if (data.success) {
                    // Réinitialiser le formulaire
                    emailForm.reset();
                    
                    // Afficher le toast de succès
                    showToast('Message envoyé avec succès !', true);
                    
                    // Fermer le formulaire après un court délai
                    setTimeout(() => {
                        closeEmailPage();
                    }, 500);
                } else {
                    // Afficher le toast d'erreur
                    showToast(data.message || 'Une erreur est survenue.', false);
                }
            })
            .catch(error => {
                // Réactiver le bouton
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                
                // Afficher une erreur
                showToast('Une erreur est survenue. Veuillez réessayer.', false);
                console.error('Erreur:', error);
            });
            
            return false;
        });
    }
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

// Initialisation
document.addEventListener('DOMContentLoaded', function () {
    createProjectArticle();
});