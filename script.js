
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.gallery img');
  images.forEach(img => {
      img.addEventListener('click', function() {
          const lightbox = document.createElement('div');
          lightbox.classList.add('lightbox');
          const img_full = document.createElement('img');
          img_full.src = this.src;
          lightbox.appendChild(img_full);
          document.body.appendChild(lightbox);
          lightbox.addEventListener('click', function() {
              document.body.removeChild(lightbox);
          });
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach(item => {
      item.addEventListener("click", function() {
          const imgSrc = this.getAttribute("src");

          const lightboxContainer = document.createElement("div");
          lightboxContainer.id = "lightbox-container";

          const lightboxContent = document.createElement("div");
          lightboxContent.id = "lightbox-content";

          const img = document.createElement("img");
          img.src = imgSrc;

          lightboxContent.appendChild(img);
          lightboxContainer.appendChild(lightboxContent);

          document.body.appendChild(lightboxContainer);

          lightboxContainer.addEventListener("click", function() {
              lightboxContainer.remove();
          });
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
    var slideIndex = 0;
    var slides = document.querySelectorAll('.slider img');
    var totalSlides = slides.length;

    function showSlide() {
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        slides[slideIndex].classList.add('active');
        var slideWidth = slides[0].clientWidth;
        document.querySelector('.slider').style.transform = 'translateX(' + (-slideIndex * slideWidth) + 'px)';
        updateDots();
    }

    function createDots() {
        var dotsContainer = document.querySelector('.slider-controls');
        for (var i = 0; i < totalSlides; i++) {
            var dot = document.createElement('div');
            dot.classList.add('dot');
            dotsContainer.appendChild(dot);
        }
        updateDots();
    }

    function updateDots() {
        var dots = document.querySelectorAll('.dot');
        dots.forEach(function(dot) {
            dot.classList.remove('active');
        });
        dots[slideIndex].classList.add('active');
    }

    document.querySelector('.slider-controls').addEventListener('click', function(event) {
        if (event.target.classList.contains('dot')) {
            slideIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
            showSlide();
        }
    });

    document.querySelector('.prev-btn').addEventListener('click', function() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide();
    });

    document.querySelector('.next-btn').addEventListener('click', function() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide();
    });

    var autoSlide = setInterval(function() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide();
    }, 5000);

    document.querySelector('.slider-container').addEventListener('mouseenter', function() {
        clearInterval(autoSlide);
    });

    document.querySelector('.slider-container').addEventListener('mouseleave', function() {
        autoSlide = setInterval(function() {
            slideIndex = (slideIndex + 1) % totalSlides;
            showSlide();
        }, 5000);
    });

    createDots();
    showSlide();
});


$(document).ready(function() {
  // Mostrar/ocultar submenús al hacer clic
  $('.menu-item').click(function() {
      $(this).find('.submenu').slideToggle();
  });
});



document.getElementById('toggle').addEventListener('change', function() {
  var navigation = document.querySelector('.navigation');
  if (this.checked) {
    navigation.style.display = 'block';
  } else {
    navigation.style.display = 'none';
  }
});

window.addEventListener('resize', function() {
  mpld3.draw_figure("fig_el47721980813878304743633455", {
      "width": window.innerWidth * 0.8, /* Ajusta el tamaño como desees */
      "height": window.innerHeight * 0.6
  });
});

$(document).ready(function() {
  // Manejar el evento de clic en la tarjeta
  $(".card").click(function() {
      // Alternar la clase "flipped" en la tarjeta clicada
      $(this).toggleClass("flipped");
  });
});



// Create a lightbox
(function() {
  var $lightbox = $("<div class='lightbox'></div>");
  var $img = $("<img>");
  var $caption = $("<p class='caption'></p>");

  // Add image and caption to lightbox

  $lightbox
    .append($img)
    .append($caption);

  // Add lighbox to document

  $('body').append($lightbox);

  $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();

    // Get image link and description
    var src = $(this).attr("data-image-hd");
    var cap = $(this).attr("alt");

    // Add data to lighbox

    $img.attr('src', src);
    $caption.text(cap);

    // Show lightbox

    $lightbox.fadeIn('fast');

    $lightbox.click(function() {
      $lightbox.fadeOut('fast');
    });
  });

}());


$(document).ready(function() {
  // Change image on selection
  $(".gallery-thumbnails img").click(function() {
      var image = $(this).attr("src");
      $(".gallery-thumbnails img").removeClass("selected");
      $(this).addClass("selected");
      $("#gallery-img").css("background-image", "url(" + image + ")");
      $("#gallery-link").attr("href", image);
      $("#count").text($(this).attr("id"));
  });

  // Get total number of images
  var gallerySize = $(".gallery-thumbnails img").length;
  $("#total").text(gallerySize);

  // Image display
  $("#imgDisplay").change(function() {
      var displayValue = $(this).val();
      $("#gallery-img").css("background-size", displayValue);
  });

  // Scroll
  $("#imgScroll").change(function() {
      var scrollValue = $(this).val() === "yes" ? "scroll" : "hidden";
      $("#gallery-box").css("overflow", scrollValue);
  });

  // Scale
  $("#imgScale").change(function() {
      var scaleValue = $(this).val() + "px";
      $("#gallery-img").css("background-size", scaleValue);
  });
});


document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
      card.classList.toggle('flipped');
  });
});

$(document).ready(function() {
  $(".toggle-info").click(function(e) {
      e.preventDefault();
      var card = $(this).closest(".card");
      card.toggleClass("flipped");
  });
});


window.onload = function() {
  var videoFrames = document.querySelectorAll('iframe');
  videoFrames.forEach(function(frame) {
      frame.style.height = (frame.offsetWidth * 9 / 16) + 'px'; // Mantener relación de aspecto 16:9
  });
};

$(document).ready(function() {
    var zindex = 10;

    $("div.card").click(function(e) {
        e.preventDefault();

        var isShowing = false;

        // Verificar si la tarjeta está mostrándose
        if ($(this).hasClass("show")) {
            isShowing = true;
        }

        // Ocultar la tarjeta mostrada y el contenedor si se está mostrando
        if ($("div.cards").hasClass("showing")) {
            $("div.card.show")
                .removeClass("show");

            if (isShowing) {
                $("div.cards")
                    .removeClass("showing");
            } else {
                // Mostrar la tarjeta clicada
                $(this)
                    .css({zIndex: zindex})
                    .addClass("show");
            }

            zindex++;
        } else {
            // Mostrar el contenedor y la tarjeta clicada
            $("div.cards")
                .addClass("showing");
            $(this)
                .css({zIndex: zindex})
                .addClass("show");

            zindex++;
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.red');
  
    // Función para abrir/cerrar el menú lateral al hacer clic en el botón de alternar
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open'); // Alternar clase 'open' en el menú lateral
    });
  
    // Cerrar el menú lateral al hacer clic en un enlace dentro del menú (en dispositivos móviles)
    const menuLinks = document.querySelectorAll('.red a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        sidebar.classList.remove('open'); // Remover clase 'open' al hacer clic en un enlace
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle'); // Selector del botón de toggle del menú
    const navbarCollapse = document.querySelector('.navbar-collapse'); // Selector del contenedor del menú desplegable

    // Evento click en el botón de toggle del menú
    menuToggle.addEventListener('click', function() {
        // Alternar la clase 'open' en el botón de toggle del menú
        this.classList.toggle('open');
        
        // Alternar la clase 'open' en el contenedor del menú desplegable
        navbarCollapse.classList.toggle('open');
    });

    // Cerrar el menú al hacer clic fuera del área del menú en dispositivos móviles
    document.addEventListener('click', function(event) {
        // Verificar si se hizo clic fuera del botón de toggle del menú y del menú desplegable
        if (!navbarCollapse.contains(event.target) && !menuToggle.contains(event.target)) {
            // Remover la clase 'open' del botón de toggle del menú y del menú desplegable
            menuToggle.classList.remove('open');
            navbarCollapse.classList.remove('open');
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.navigation');

  menuToggle.addEventListener('click', function() {
      navigation.style.display = navigation.style.display === 'block' ? 'none' : 'block';
  });

  // Cerrar el menú al hacer clic en un enlace dentro del menú
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(link => {
      link.addEventListener('click', function() {
          navigation.style.display = 'none';
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.navigation');

  menuToggle.addEventListener('click', function() {
      navigation.classList.toggle('open');
  });
});





$(document).ready(function() {
    // Función para abrir o cerrar el menú principal
    $('.menu-toggle').click(function() {
        $('.menu').slideToggle();
    });
  
    // Función para abrir o cerrar los submenús al hacer clic en los elementos principales del menú
    $('.submenu > a').click(function(e) {
        e.preventDefault(); // Evitar que el enlace se siga al hacer clic
  
        var submenu = $(this).next('ul');
        var isSubmenuOpen = submenu.is(':visible');
  
        // Cerrar todos los submenús excepto el submenú actual
        $('.submenu > ul').not(submenu).slideUp();
  
        // Abrir o cerrar el submenú actual dependiendo de su estado actual
        if (!isSubmenuOpen) {
            submenu.slideDown();
        } else {
            submenu.slideUp();
        }
    });
  
    // Restaurar el menú y submenús al cambiar el tamaño de la ventana
    $(window).resize(function() {
        var windowWidth = $(window).width();
  
        if (windowWidth > 768) {
            // Restaurar el menú y submenús para pantallas grandes
            $('.menu ul').css('display', 'flex');
            $('.submenu > ul').css('display', 'block');
        } else {
            // Ocultar el menú y submenús para pantallas pequeñas
            $('.menu ul').css('display', 'none');
            $('.submenu > ul').css('display', 'none');
        }
    });
  
 
    $('.open').click(function(){
        $(this).css('display', 'none');
        $('.close').css('display', 'block');
        $('.menu').css('transform', 'translateY(125px) translateX(0)');
    });
  

    $('.close').click(function(){
        $(this).css('display', 'none');
        $('.open').css('display', 'block');
        $('.menu').css('transform', 'translateY(125px) translateX(-100%)');
    });
  });
  $(document).ready(function() {
    
    $('.fa-bars').click(function() {
        $('.menu').slideToggle();
    });
  });
  



//slider   fauna
document.addEventListener('DOMContentLoaded', function() {
    let currentFaunaIndex = 0;
    const faunaSlides = document.querySelectorAll('.slides-fauna .slide-fauna');
    const totalFaunaSlides = faunaSlides.length;

    function updateFaunaSliderPosition() {
        document.querySelector('.slides-fauna').style.transform = `translateX(-${currentFaunaIndex * 100}%)`;
    }

    function moveToNextFaunaSlide() {
        currentFaunaIndex = (currentFaunaIndex + 1) % totalFaunaSlides;
        updateFaunaSliderPosition();
    }

    function moveToPrevFaunaSlide() {
        currentFaunaIndex = (currentFaunaIndex - 1 + totalFaunaSlides) % totalFaunaSlides;
        updateFaunaSliderPosition();
    }

    document.querySelector('.next').addEventListener('click', moveToNextFaunaSlide);
    document.querySelector('.prev').addEventListener('click', moveToPrevFaunaSlide);
});


