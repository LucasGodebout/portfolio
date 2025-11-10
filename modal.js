// Configuration des pages modales
const modalPages = {
    'my-and-community-page': {
        dataName: 'My-and-community',
        class: 'MAC',
        logo: 'images/projets/Logo_MYco_noir.svg',
        title: 'My and Community',
        description: `My and Community est une entreprise de création de sites web sur mesure et responsive, des sites vitrines, sites de e-commerce, ou encore des applications mobiles, le tout administrable via un back office commun à tous ses clients. Dans mon cas, j'ai participé à la création d'une application sur mesure pour Campers Van Rouen, une entreprise de réparation et d'entretien de véhicules de loisir. L'application contient un système d'état des lieux permettant de voir les photos des réparations des différents dossiers en cours et de modifier certaines informations lorsque le fichier n'est pas clos. Grâce à cette application, Campers Van Rouen ne pourra plus se faire arnaquer par des clients qui  se plaignent d'une dégradation du véhicule après réparation alors qu'elle a été notifiée lors de l'état des lieux. De plus, les dossiers sont disponibles sur un back-office permettant de voir les dossiers depuis chez soi.`,
        project: 'PROJET RÉEL',
        logiciels: ['images/tech/HTML.svg', 'images/tech/CSS.svg', 'images/tech/PHP.svg', 'images/tech/JS.svg', 'images/tech/SQL.svg', 'images/tech/QT.svg'],
        backgroundColor: 'hsla(191, 62%, 61%, 1)',
        textColor: '#ffffff',
        dateFin: '2025-06-17',
    },
    'bds-win-angers-page': {
        dataName: 'Bureau-des-Sports-Angers',
        class: 'BDS',
        logo: 'images/projets/logo_BDS_WIN_ANGERS.svg',
        title: 'Bureau des Sports Angers',
        description: `Le Bureau des Sports de WIN Sport School Angers est une association étudiante créée par l'école de management et du sport d'Angers. Il a pour mission d’animer la vie sportive et de proposer diverses activités autour du sport à tous les étudiants, surtout ceux des Écoles Supérieur des Pays de la Loire. La but de ce projet était de réaliser un site possédant une page d'accueil, un calendrier des matchs ou des évènements à venir, les derniers résultats sportif et un espace étudiant avec un formulaire d'inscription/de connexion.`,
        project: 'PROJET NON RÉEL',
        logiciels: ['images/tech/HTML.svg', 'images/tech/CSS.svg', 'images/tech/PHP.svg', 'images/tech/JS.svg'],
        backgroundColor: 'hsla(234, 96%, 80%, 1.00)',
        textColor: '#ffffff',
        dateFin: '2025-03-28',
    },
    'dans-les-bras-d-antoine-page': {
        dataName: 'Dans-les-bras-d-Antoine',
        class: 'DLBA',
        logo: 'images/projets/Logo_Antoine.svg',
        title: 'Dans les bras d\'Antoine',
        description: `Dans les bras d'Antoine est une association qui lutte contre les cancers pédiatriques suite au décès d'Antoine à 15 ans. Elle a pour but de récolter des fonds pour la recherche contre ce type de cancer. Ce projet a été réalisé lors d'un cours nommé "Digital Sans Frontière" où chaque groupe doit créer un site internet et faire la communication au profit d'une association.`,
        project: 'PROJET RÉEL',
        logiciels: ['images/tech/WordPress.svg', 'images/tech/Figma.svg'],
        backgroundColor: 'hsla(24, 27%, 88%, 1)',
        textColor: '#ffffff',
        dateFin: '2025-03-07',
    },
    'imc-page':{
        dataName: 'IMC',
        class: 'IMC',
        logo: 'images/projets/Logo_IMC.svg',
        title: 'Calculateur d\'IMC',
        description: `Ce projet est un calculateur d'IMC (Indice de Masse Corporelle) développé en PHP. L'utilisateur peut entrer son poids et sa taille, et le programme calcule son IMC en utilisant la formule standard. En fonction de la valeur calculée, le programme affiche une catégorie de poids correspondante, allant de "Insuffisance pondérale" à "Obésité sévère". Tous les résultats sont enregistrés dans un fichier texte et affichés sur le site.`,
        project: 'PROJET NON RÉEL',
        logiciels: ['images/tech/HTML.svg', 'images/tech/CSS.svg', 'images/tech/PHP.svg'],
        backgroundColor: 'hsla(150, 50%, 70%, 1)',
        textColor: '#ffffff',
        dateFin: '2025-03-10',
    },
    'quizz-page':{
        dataName: 'Quizz',
        class: 'QUIZZ',
        logo: 'images/projets/Logo_Quizz.svg',
        title: 'Quizz',
        description: `Ce projet est un quizz interactif développé en JavaScript. Il présente une série de questions à choix multiples, permettant aux utilisateurs de tester leurs connaissances sur divers sujets. Le quizz suit les réponses de l'utilisateur, calcule le score final et affiche les résultats à la fin. Le design est simple et épuré, offrant une expérience utilisateur agréable.`,
        project: 'PROJET NON RÉEL',
        logiciels: ['images/tech/HTML.svg', 'images/tech/CSS.svg', 'images/tech/JS.svg'],
        backgroundColor: 'hsla(210, 100%, 71%, 1.00)',
        textColor: '#ffffff',
        dateFin: '2025-03-12',
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
const projectsFirstPage = document.getElementById('project-first-page');

// Nouveaux éléments pour la page email
const emailOverlay = document.getElementById('email-overlay');
const emailClose = document.getElementById('email-close');
const emailPage = document.getElementById('email-page');

// Fonction pour créer les articles des projets
function createProjectArticle() {
    if (projectsFirstPage) {
        projectsFirstPage.innerHTML = ''; // Vider le conteneur avant de le remplir
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
        const dateStr = pageConfig ? pageConfig.dateFin : null;

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

// Fonction pour afficher un toast
function showToast(message, isSuccess) {
    // Créer l'élément toast
    const toast = document.createElement('div');
    toast.className = `toast ${isSuccess ? 'toast-success' : 'toast-error'}`;
    toast.textContent = message;
    
    // Ajouter au body
    document.body.appendChild(toast);
    
    // Animation d'apparition
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
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

// Initialisation
document.addEventListener('DOMContentLoaded', function () {
    createProjectArticle();
});