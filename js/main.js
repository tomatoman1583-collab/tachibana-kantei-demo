(function(){
  "use strict";

  // ---- before/after slider ----
  // index.html にのみ #baFrame / #baHandle が存在する。
  // main.js は全ページ共通で読み込むため、存在しないページで addEventListener が
  // null 参照エラーを起こし、後続（contact.htmlのフォーム処理）まで巻き込むのを防ぐガード。
  var frame = document.getElementById("baFrame");
  var handle = document.getElementById("baHandle");
  var dragging = false;

  function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

  function setPct(clientX){
    var rect = frame.getBoundingClientRect();
    var pct = ((clientX - rect.left) / rect.width) * 100;
    pct = clamp(pct, 0, 100);
    frame.style.setProperty("--pct", pct + "%");
    handle.setAttribute("aria-valuenow", Math.round(pct));
  }

  if (frame && handle) {
    handle.addEventListener("pointerdown", function(e){
      dragging = true;
      try { handle.setPointerCapture(e.pointerId); } catch(err) {}
      e.preventDefault();
    });
    handle.addEventListener("pointermove", function(e){
      if (!dragging) return;
      setPct(e.clientX);
    });
    ["pointerup","pointercancel"].forEach(function(evt){
      handle.addEventListener(evt, function(){ dragging = false; });
    });

    frame.addEventListener("pointerdown", function(e){
      if (e.target === handle || handle.contains(e.target)) return;
      setPct(e.clientX);
    });

    handle.addEventListener("keydown", function(e){
      var cur = parseFloat(handle.getAttribute("aria-valuenow"));
      if (isNaN(cur)) cur = 50;
      var step = e.shiftKey ? 10 : 4;
      if (e.key === "ArrowLeft"){ setPct(frame.getBoundingClientRect().left + (frame.getBoundingClientRect().width * clamp(cur-step,0,100) / 100)); e.preventDefault(); }
      if (e.key === "ArrowRight"){ setPct(frame.getBoundingClientRect().left + (frame.getBoundingClientRect().width * clamp(cur+step,0,100) / 100)); e.preventDefault(); }
      if (e.key === "Home"){ setPct(frame.getBoundingClientRect().left); e.preventDefault(); }
      if (e.key === "End"){ setPct(frame.getBoundingClientRect().left + frame.getBoundingClientRect().width); e.preventDefault(); }
    });
  }

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
