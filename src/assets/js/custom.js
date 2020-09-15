
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
});

$('.home-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.arrival-slider').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

