import './dependency/glider.min.js';
function pageHome() {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
    new Glider(document.querySelector('.glider-feed'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
            prev: '.glider-prev-feed',
            next: '.glider-next-feed'
        }
    });
}

if (info.page === "home") {
    pageHome();
}
if (info.page === "gallery") {

    new Glider(document.querySelector('.glider-video'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });

    new Glider(document.querySelector('.glider-photo'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
    
}
    