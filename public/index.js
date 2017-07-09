$(function(){
  var b1 = document.getElementById('multi-btn');
  b1.addEventListener('click', function(){
    $.get('/multi', function (data) {
      $('#game').html(data);
    });
  });
  var b2 = document.getElementById('single-btn');
  b2.addEventListener('click', function(){
    $.get('/single', function (data) {
      $('#game').html(data);
    });
  });
});
