$(function(){
  // 文字色を変える
  $('#change-color').on('click', function(){
    $('#target').css('color', 'red');
  });
  $('#change-text').on('click', function(){
    $('#target').html('Hello');
  });
  $('#fade-out').on('click', function(){
    //$('#target').fadeout();
    $('#target').fadeOut();
  });
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
});
