'use strict';

$('document').ready(function(){
  $('#hideShow').on('click',function(){
    $(this).siblings('ul').toggleClass('on');
  });

  $('ul').on('click','li', function(){
    $(this).fadeOut(400);
  });

  $('#addItem').on('click',function(){
    var li = document.createElement('li');
    li.innerHTML='added..';
    document.getElementsByTagName('ul')[0].appendChild(li);
  });
});

