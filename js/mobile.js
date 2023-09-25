
        var iconMobileHeader = document.querySelector('.icon-mobile-header');
        var backdropMobile = document.querySelector('.backdrop-mobile');
        var closeIconMobile = document.querySelector('.close-icon-mobile');
        iconMobileHeader.addEventListener('click', function () {
          backdropMobile.classList.remove('is-hidden-mobile');
        });
        closeIconMobile.addEventListener('click', function () {
          backdropMobile.classList.add('is-hidden');
        });