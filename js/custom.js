// Chargement de l'API youtube en asynchrone    
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// On récupère l'ID de la vidéo
var homeVideoId = $('#univers-player').data('video-id');

// Chargement de l'iframe Youtube (en fonction du data-video-id présent dans le code HTML)
function onYouTubeIframeAPIReady() {
    univers_player = new YT.Player('univers-player', {
        height: '225',
        width: '300',
        videoId: homeVideoId,
        playerVars: {
            'showinfo': 0,
            'modestbranding': 1,
            'iv_load_policy': 3,
            'autoplay': 0
        }
    });
}

// Affichage "full" du bandeau quicklinks en HP si pas de bloc "exposer"
function testQuickLinks() {
    if (!$('.expo-stand').length) {
        $('.quicklinks').addClass('view-full');
    }
}
// Affichage "full" du bloc Date header quand il n'y en a qu'une seule d'affichée
function testHeaderDates(){
    var diy_event = $('.header-top .diy-event-list > .diy-event');
    if (diy_event.length < 2 && diy_event.length > 0) {
        diy_event.addClass('view-full');
    };
}
// Déplacement HTML liés au fil d'ariane
function moveAriane() {
    $('.breadcrumb-nav').next().andSelf().wrapAll('<div class="bloc-ariane"></div>')
    if ($('#zone2 h1').length) {
        $('.bloc-ariane').insertAfter('#zone2 h1:eq(0)');
    };
}
$(window).load(function() {
    // Retrait de la classe no-js une fois la page chargée (style CSS dédiée à la classe no-js)
    $('body').removeClass('no-js');
    testQuickLinks();
    testHeaderDates();

    // Gestion du lancement de la vidéo Youtube au clic sur le bouton custom
    $('.univers-video .video-overlay').on('click', function() {
        if (univers_player.getPlayerState() != 1 && univers_player.getPlayerState() != 2) {
            univers_player.playVideo();
            $('.univers-video .video-overlay').fadeOut();
        }
    })

    // Page intérieure uniquement
    if ($('.body-corpo').length) {
        moveAriane();
        // Gestion de l'apparition des share-links: on toggle l'affichage de la liste des liens RS et l'affichage du texte "partager cette page"
        $(".bloc-ariane .share-rs").click(function() {
            $('.bloc-ariane .sr-list').toggleClass('show');
            $(".bloc-ariane .sr-title").toggle();
        });

        // Au click en dehors de la zone "social-share", on fait disparaitre les share-links
        $("body").click(function(e) {
            if ($(e.target).hasClass('social-share') || $(e.target).parents(".social-share").size()) {
                
            } else {
                $('.bloc-ariane .sr-list').removeClass('show');
                $(".bloc-ariane .sr-title").show();
            }
        });
    };

    // Fiche exposant
    if(!window.location.href.indexOf("Evenements") > -1) {
        if ($('.catalogue.exposant.fiche').length) {
            $('.catal-ex-item-buttons').insertAfter('.catal-ed-main-media');
            $('.catal-nav-ex.mod-catal').insertAfter('.edito');
        };
    };
})
