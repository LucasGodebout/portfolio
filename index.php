    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--SEO-->
    <meta name="title" content="Lucas Godebout - Portfolio">
    <meta name="description" content="Découvrez et explorez le portfolio de Lucas Godebout, un développeur passionné.">
    <meta name="keywords" content="Lucas Godebout, portfolio, développeur, projets, web development, community projects">
    <meta name="author" content="Lucas Godebout">
    <meta name="robots" content="index, follow">
    <meta name="language" content="fr">
    <meta name="revisit-after" content="7 days">
    <!-- Référencement local -->
    <meta name="geo.region" content="FR-PDL">
    <meta name="geo.placename" content="Angers">
    <meta name="geo.position" content="47.6019095,-0.1608124">
    <meta name="ICBM" content="47.6019095,-0.1608124">
    <!-- Open Graph -->
    <meta property="og:title" content="Lucas Godebout - Portfolio">
    <meta property="og:description" content="Découvrez et explorez le portfolio de Lucas Godebout, un développeur passionné.">
    <meta property="og:image" content="images/og-image.png">
    <meta property="og:url" content="">
    <meta property="og:type" content="website">
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Lucas Godebout - Portfolio">
    <meta name="twitter:description" content="Découvrez et explorez le portfolio de Lucas Godebout, un développeur passionné.">
    <meta name="twitter:image" content="images/twitter-image.png">
    <meta name="twitter:site" content="@VotreTwitterHandle">

    <link rel="stylesheet" href="style.css">
    <script src="library/jquery-3.7.1.min.js"></script>
    <title>Lucas Godebout - Portfolio</title>
    <link rel="icon" type="image/x-png" href="images/lurk.png">
</head>
<body>
    <section id="loader">
        <div id="loader-white-bg">
            <div id="loader-logo-container">
                <img class="logo" src="images/hi.png" alt="Lucas Godebout Logo">
            </div>
            <div id="loader-text">
                <p class="loader-title">Lucas Godebout</p>
                <p class="loader-subtitle">Portfolio</p>
            </div>
        </div>
    </section>
    <main id="main-content">
        <div id="front-page">
            <a id="logo" onclick="openCVPage()">
                <img class="logo" src="images/lurk.png" alt="Lucas Godebout Logo">               
            </a>
            <div id="menu-icons"> <!-- modifier en <nav> plus tard -->
                <div id="menu"> <!-- Modifier en ul plus tard -->
                    <div class="menu-item focus" id="menu-first-page"></div>
                    <div class="menu-item" id="menu-second-page"></div>
                    <div class="menu-item" id="menu-third-page"></div>
                    <div class="menu-item" id="menu-fourth-page"></div>
                    <div class="menu-item" id="menu-fifth-page"></div>
                    <div class="menu-item" id="menu-sixth-page"></div>
                </div> 
                <div id="icons"> <!-- Modifier en ul plus tard -->
                    <a class="icon" onclick="openEmailPage()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ff9500" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    </a>
                    <a class="icon" id="icon-github" href="https://github.com/LucasGodebout" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#00ff1e" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                    </a>
                    <a class="icon" id="icon-linkedin" href="https://www.linkedin.com/in/lucasgodebout" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0091ff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                    </a>
                    <a class="icon" onclick="openMentionsPage()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#74C0FC" d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.9 536.6 69.6 524.5C62.3 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 232C306.7 232 296 242.7 296 256L296 368C296 381.3 306.7 392 320 392C333.3 392 344 381.3 344 368L344 256C344 242.7 333.3 232 320 232zM346.7 448C347.3 438.1 342.4 428.7 333.9 423.5C325.4 418.4 314.7 418.4 306.2 423.5C297.7 428.7 292.8 438.1 293.4 448C292.8 457.9 297.7 467.3 306.2 472.5C314.7 477.6 325.4 477.6 333.9 472.5C342.4 467.3 347.3 457.9 346.7 448z"/></svg>
                    </a>
                </div>
            </div>
            <a id="change-page-right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ff9500" d="M64 64C28.7 64 0 92.7 0 128l0 256c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM48 128c0-8.8 7.2-16 16-16l384 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 384c-8.8 0-16-7.2-16-16L48 128zM192.1 160c-6.2 .1-12.1 .9-17.6 2.4c-5.5 .9-10.6 .9-15 .9s-9.5-.1-14-.9c-5.5-1.5-11.4-2.3-17.6-2.4C113.4 160 .1 224 .1 224s113.3 63.9 113.3 63.9c6.2-.1 12.1-.9 17.6-2.4c5.5-.9 10.6-.9 15-.9s9.5 .1 14 .9c5.5 1.5 11.4 2.3 17.6 2.4C400 .1 .1 .1 .1 .1S113.4 .1 .1 .1s113.3 .1 .1 .1z"/></svg>
            </a>
        </div>
        <div id="projects-container">
            <div id="projects">
                <div id="project-first-page">
                    <article data-name-channel="My-and-community" data-channel-show="my-and-community-page" class="project MAC">
                        <img src="images/projets/Logo_MYco_noir.svg" alt="My and Community">
                    </article>
                    <article data-name-channel="Bureau-des-Sports-Angers" data-channel-show="bds-win-angers-page" class="project BDS">
                        <img src="images/projets/logo_BDS_WIN_ANGERS.svg" alt="Bureau des Sports Angers">
                    </article>
                    <article class="project"></article>
                    <article class="project"></article>
                    <article class="project"></article>
                    <article class="project"></article>
                    <article class="project"></article>
                    <article class="project"></article>
                    <article class="project"></article>
                    <article class="project"></article>
                    <article class="project"></article>
                    <article class="project"></article>
                    <article class="project"></article>
                    <article class="project"></article>
                    <article class="project"></article>
                </div>
            </div>
        </div>
        <!-- Système de pages modales -->
        <div class="modal-overlay" id="modal-overlay">
            <div class="modal-page" id="modal-page">
                <button class="modal-close" id="modal-close">&times;</button>
                <div class="modal-content" id="modal-content">
                    <img class="modal-logo" id="modal-logo" src="" alt="Project Logo">
                    <h1 class="modal-title" id="modal-title"></h1>
                    <h2 class="modal-project" id="modal-project"></h2>
                    <div class="modal-description-container" id="modal-description-container">
                        <h1 class="modal-container-title" id="modal-container-title">Description</h1>
                        <p class="modal-description" id="modal-description"></p>
                    </div>
                    <div class="modal-software-container" id="modal-software-container">
                        <div class="modal-software" id="modal-software">
                        </div>
                        <div class="modal-project-content" id="modal-project-content">
                            <h2 class="modal-content-title" id="modal-content-title">Contenu du projet</h2>
                            <video class="modal-content-video" id="modal-content-video" src=""></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Système de page Email -->
        <div class="email-overlay" id="email-overlay">
            <div class="email-page" id="email-page">
                <div class="email-header">
                    <img class="email-icon" src="images/icons/emailW.svg" alt="Email Icon" class="email-logo">
                    <h1 class="email-title">Contactez-moi</h1>
                    <button class="modal-close" id="email-close">&times;</button>
                </div>
                <div class="email-content" id="email-content">
                    <div class="email-online">
                        <img class="email-online-icon" src="images/hi.png" alt="En ligne">
                        <div class="email-name">
                            <p>Lucas</p>
                            <p class="email-fullname">Lucas Godebout</p>
                        </div>
                    </div>
                    <form class="email-form" id="email-form" method="POST" action="javascript:void(0);">
                        <label for="name" class="email-label">Nom:</label>
                        <input class="email-input" type="text" id="name" name="name" required>
                        <label for="email" class="email-label">Email:</label>
                        <input class="email-input" type="email" id="email" name="email" required>
                        <label for="message" class="email-label">Message:</label>
                        <textarea class="email-textarea" id="message" name="message" required></textarea>
                        <button class="email-submit" type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
    <script src="loader.js"></script>
    <script src="modal.js"></script>
</body>
</html>