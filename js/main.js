(function(){
  "use strict";

  // ---- contact form mock submit ----
  // contact.html にのみ #contactForm / #formSuccess が存在する。同じ理由でガードする。
  var form = document.getElementById("contactForm");
  var success = document.getElementById("formSuccess");
  if (form && success) {
    form.addEventListener("submit", function(e){
      e.preventDefault();
      if (!form.checkValidity()){
        form.reportValidity();
        return;
      }
      form.hidden = true;
      success.hidden = false;
    });

    // ブラウザの「戻る」でbfcacheから復元された場合、送信完了表示のまま固定されないようにする。
    // SPA版がページ離脱時に行っていたフォームのリセット処理（f.reset(); f.hidden=false; s.hidden=true;）
    // を、実ページ遷移向けに同じ3行のまま pageshow イベントへ移設したもの。
    window.addEventListener("pageshow", function(e){
      if (e.persisted && form.hidden) {
        form.reset();
        form.hidden = false;
        success.hidden = true;
      }
    });
  }

})();
