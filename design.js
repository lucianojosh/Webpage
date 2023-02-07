const btns = document.querySelectorAll('.btn');
const cardContainer = document.querySelector('.card-container');
const container = document.querySelector('.container');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        this.parentElement.parentElement.remove();
        checkChildren();
    });
}

function checkChildren() {
    console.log(cardContainer.childElementCount);
    if (cardContainer.childElementCount === 0) {
        cardContainer.remove();
        let el = document.createElement('div');
        el.innerHTML = '<h1> Happy Valentines Day! </h1>';
        el.classList.add('surprise-div', 'flex-row', 'center');
        container.appendChild(el);
        container.style.backgroundColor = '#f592b3';
    } else {
        console.log('Has child nodes');
    };
}















particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  var $body      = $('body');
var $alert     = $('#alert');
var $app       = $('.app');
var $cancel    = $('.cancel');
var $open      = $('.leave');

$cancel.click(function(){
  $body.removeClass('faded');
  $alert.addClass('dismissed');
});

$open.click(function(){
  $body.removeClass('faded');
  $alert.addClass('dismissed');
  alert("Goodbye my friend.....")
}); 

$app.click(function(e){
  e.preventDefault();
  $body.addClass('faded');
  $alert.removeClass('dismissed');
});


$(document).ready(function(e) {

	$('.icon-right').on('click', function() {
		$('.music__info__wrapper').toggleClass('display');
	});

	$('.icon-right').on('click', function() {
		$('.right__panel').toggleClass('right__panel__menuOpen');
		$('.left__panel').toggleClass('left__panel__menuOpen');
	});

	$('.music__menu').on('click', function() {
		$('.music__info__wrapper').removeClass('display');
	});

	$('.icon-right').on('click', function() {
		$('.music__menu').addClass('menu_list_open');
	});

	$('.music__menu').on('click', function() {
		$('.right__panel').removeClass('right__panel__menuOpen');
		$('.left__panel').removeClass('left__panel__menuOpen');
		$('.music__menu').removeClass('menu_list_open');
	});

	var $sync1 = $(".cover"),
		$sync2 = $(".title, .hero__backgorund"),
		flag = false,
		duration = 300;

	$sync1
		.owlCarousel({
			loop: true,
			center: true,
			items: 1,
			nav: false,
			dots: false
		})
		.on('changed.owl.carousel', function(e) {
			if (!flag) {
				flag = true;
				$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});

	$sync2
		.owlCarousel({
			loop: true,
			items: 1,
			nav: false,
			dots: false,
			animateOut: 'slideOutDown',
			animateIn: 'slideInDown',
			mouseDrag: false,
			touchDrag: false,
			pullDrag: false
		})
		.on('click', '.owl-item', function() {
			$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		});

	owl = $('.owl-carousel').owlCarousel();
	$(".button__prev").click(function() {
		owl.trigger('prev.owl.carousel');
	});

	$(".button__next").click(function() {
		owl.trigger('next.owl.carousel');
	});

}); // End Ready