// Configuration des pages modales
const modalPages = {
    'my-and-community-page': {
        logo: 'images/projets/Logo_MYco_noir.svg',
        title: 'My and Community',
        description: `My and Community est une entreprise de création de sites web sur mesure et responsive, des sites vitrines, sites de e-commerce, ou encore des applications mobiles, le tout administrable via un back office commun à tous ses clients. Dans mon cas, j'ai participé à la création d'une application sur mesure pour Campers Van Rouen, une entreprise de réparation et d'entretien de véhicules de loisir. L'application contient un système d'état des lieux permettant de voir les photos des réparations des différents dossiers en cours et de modifier certaines informations lorsque le fichier n'est pas clos. Grâce à cette application, Campers Van Rouen ne pourra plus se faire arnaquer par des clients qui  se plaignent d'une dégradation du véhicule après réparation alors qu'elle a été notifiée lors de l'état des lieux. De plus, les dossiers sont disponibles sur un back-office permettant de voir les dossiers depuis chez soi.`,
        project: 'PROJET RÉEL',
        logiciels: ['images/tech/HTML.svg', 'images/tech/CSS.svg', 'images/tech/PHP.svg', 'images/tech/JS.svg', 'images/tech/SQL.svg', 'images/tech/QT.svg'],
        backgroundColor: 'hsla(191, 62%, 61%, 1)',
        textColor: '#ffffff',
    },
    'bds-win-angers-page': {
        logo: 'images/projets/logo_BDS_WIN_ANGERS.svg',
        title: 'Bureau des Sports Angers',
        description: `Le Bureau des Sports de WIN Sport School Angers est une association étudiante créée par l'école de management et du sport d'Angers. Il a pour mission d’animer la vie sportive et de proposer diverses activités autour du sport à tous les étudiants, surtout ceux des Écoles Supérieur des Pays de la Loire. La but de ce projet était de réaliser un site possédant une page d'accueil, un calendrier des matchs ou des évènements à venir, les derniers résultats sportif et un espace étudiant avec un formulaire d'inscription/de connexion.`,
        project: 'PROJET NON RÉEL',
        logiciels: ['images/tech/HTML.svg', 'images/tech/CSS.svg', 'images/tech/PHP.svg', 'images/tech/JS.svg'],
        backgroundColor: 'hsla(234, 96%, 80%, 1.00)',
        textColor: '#ffffff',
    },
    // Ajoutez d'autres pages ici avec leurs configurations
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

// Nouveaux éléments pour la page email
const emailOverlay = document.getElementById('email-overlay');
const emailClose = document.getElementById('email-close');
const emailPage = document.getElementById('email-page');

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

    // Appliquer les styles spécifiques
    modalPage.style.background = pageConfig.backgroundColor;
    modalPage.id = pageId;

    // Afficher la modale
    modalOverlay.style.display = 'flex';

    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';

    // Remplir la liste des logiciels
    if (modalSoftware) {
        modalSoftware.innerHTML = ''; // Vider le contenu précédent
        if (pageConfig.logiciels && pageConfig.logiciels.length > 0) {
            const softwareTitle = document.createElement('h1');
            softwareTitle.className = 'modal-container-title';
            softwareTitle.textContent = 'Logiciel utilisé :';
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
    } else if (pageConfig.project === 'PROJET NON RÉEL') {
        modalProject.classList.add('noreel');
    } else {
        modalProject.classList.add('undetermined');
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