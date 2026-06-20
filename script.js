$(function(){
  $('.sidenav').sidenav();
  $('.scrollspy').scrollSpy({scrollOffset:70});
  $('#year').text(new Date().getFullYear());

  $(document).on('mousemove', function(e){
    $('.cursor-glow').css({left:e.clientX, top:e.clientY});
  });

  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        $(entry.target).addClass('visible');
      }
    });
  }, {threshold:0.12});

  $('.reveal').each(function(){ observer.observe(this); });
});
