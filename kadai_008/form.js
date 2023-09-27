$(function (){
  // class属性の「.btn」がクリックされたら機能する
  $('.btn').on('click', function() {
    // クリックしたら「クリックしました！」と表示させる
    $('.text-box').val('クリックしました！')
  });
});
