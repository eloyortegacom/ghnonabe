/*cabecera scroll*/

jQuery(document).ready(function() {

   jQuery(window).on("scroll", function() {    
      if (jQuery(window).scrollTop() > 500) {              
        jQuery("#cabecera").removeClass("cab-scroll-arriba");
       jQuery("#cabecera").addClass("cab-scroll-abajo");

       jQuery(".navbar-toggle").removeClass("cab-scroll-arriba");
       jQuery(".navbar-toggle").addClass("cab-scroll-abajo");
    }
    else {       
       jQuery("#cabecera").removeClass("cab-scroll-abajo");       
       jQuery("#cabecera").addClass("cab-scroll-arriba");      

       jQuery(".navbar-toggle").removeClass("cab-scroll-abajo");       
       jQuery(".navbar-toggle").addClass("cab-scroll-arriba");      
    }
 });
});
/*fin*/
jQuery(document).ready(function(){
     jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                jQuery('#subir-arriba').fadeIn();
            } else {
                jQuery('#subir-arriba').fadeOut();
            }
        });
        // scroll body to 0px on click error tooltip not a function
      /*  jQuery('#subir-arriba').click(function () {
            jQuery('#subir-arriba').tooltip();
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });      
        jQuery('#subir-arriba').tooltip();*/
});

/*smootscroll de csstricks*/
// Select all links with hashes
jQuery('a.smoothScroll[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var jQuerytarget = jQuery(target);
          jQuerytarget.focus();
          if (jQuerytarget.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            jQuerytarget.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            jQuerytarget.focus(); // Set focus again
          };
        });
      }
    }
  });

/*FIN smootscroll de csstricks*/

  /*Menú OffCanvas*/
jQuery(document).ready(function () {
  
  var contador = 1;
    jQuery('[data-toggle="offcanvas"]').click(function () {
      jQuery('#offcanvas-eo-menu').toggleClass('si');    
     if (contador==1){     
      jQuery('.navbar-toggle').addClass('abierto');
      jQuery('.bt-menu').addClass('fa-times');
      jQuery('.bt-menu').removeClass('fa-bars');
      contador=0;
    } else {
     if (contador==0){     
      jQuery('.navbar-toggle').removeClass('abierto');
      jQuery('.bt-menu').addClass('fa-bars');
      jQuery('.bt-menu').removeClass('fa-times');
      contador=1;
    }
  }
  });
});

  //mostrar y ocultar submenus
    //unbind es para evitar que el código se ejecute varias veces cuando el menú se abra varias veces
    //al final con sacar esta función de dentro de la anterior ha bastado :)
  jQuery('.padre').click(function () {
        jQuery(this).children('.sub-menu').slideToggle();    

  });

