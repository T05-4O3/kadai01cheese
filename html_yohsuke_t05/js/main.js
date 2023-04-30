$(function() {
  $('.header-list__item>a').click(function() {
    $('#navigation').removeAttr('checked').prop('checked', false).change();
  });
});

$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSes9DyVu1SosmtZc6Aw0L2WGiPcWQZX4lCz0ljqE-p9zBqMGg/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          var newWindow = window.open("", "popup", "width=400,height=200,left="+((window.innerWidth-400)/2)+",top="+((window.innerHeight-200)/2));
          var newWindowDocument = newWindow.document;
          var style = newWindowDocument.createElement('style');
          style.innerHTML = 'body { font-size: 1.4rem; } @media(max-width: 640px) { body { font-size: 2.8rem text-align: center; } }';
          newWindowDocument.head.appendChild(style);
          var message = "現在フォームが起動しません。LINEよりお問い合わせをお願いします。<br><a href='https://lin.ee/gnTNtbv6' target='_blank'>公式LINE登録</a>";
          newWindowDocument.write(message);
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});