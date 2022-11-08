//mixitup


var mixer = mixitup('.grid-portfolio-container');




//humburger
function openMenu(){
  document.getElementById('navbar').style.height = '100%';
}

function closeMenu(){
  document.getElementById('navbar').style.height = '0%';
}
//smothscroll

$(function(){
  $('.menu-items a').on('click', function(){
    $('html,body').animate({
      scrolltop: $($.attr(this, 'href')).offest().Top
    }, 1000);
  })
})
