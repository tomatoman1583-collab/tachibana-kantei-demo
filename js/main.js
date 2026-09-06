(function(){
  "use strict";

  // ---- mobile nav (hamburger) ----
  // 979px以下でのみ意味を持つ。980px以上では CSS が .nav-toggle を display:none にするため、
  // ボタンは見えず Tab 順にも出てこない。ナビは従来どおり横並びのまま。
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (toggle && nav) {
    // CSS 側の @media (max-width:979.98px) と表裏になる条件。小数幅でも隙間ができない
    var desktop = window.matchMedia("(min-width: 979.99px)");

    var isOpen = function(){ return toggle.getAttribute("aria-expanded") === "true"; };
    var setOpen = function(open){
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    // <button> なので Enter / Space はブラウザが click に変換する。追加のキー処理は不要。
    toggle.addEventListener("click", function(){ setOpen(!isOpen()); });

    // Escで閉じ、フォーカスをボタンへ戻す（開いたメニューは display:none になるため、
    // 戻さないとフォーカスが body へ落ちる）。閉じているときは何もせず、
    // 他の要素のEsc操作（フォーム等）を邪魔しない。
    document.addEventListener("keydown", function(e){
      if (e.key !== "Escape" && e.key !== "Esc") return;
      if (!isOpen()) return;
      setOpen(false);
      toggle.focus();
    });

    // メニューの外をクリックしたら閉じる。ボタン自身のクリックは上のトグルが処理済みなので除外する。
    document.addEventListener("click", function(e){
      if (!isOpen()) return;
      if (toggle.contains(e.target) || nav.contains(e.target)) return;
      setOpen(false);
    });

    // 開いたまま980px以上へ広げたときに、aria-expanded="true" と .is-open を持ち越さない。
    var syncDesktop = function(){ if (desktop.matches) setOpen(false); };
    if (desktop.addEventListener) { desktop.addEventListener("change", syncDesktop); }
    else if (desktop.addListener) { desktop.addListener(syncDesktop); }

    // ここまで到達＝ハンバーガーが実際に開閉できる状態。head内インラインが仕掛けた
    // 2秒タイマーは .navjs が付いていなければ .nojsnav（折り返し表示へ戻すフォールバック）
    // を付けるので、ここで名乗ることでタイマーは何もしないまま終わる。このファイルが
    // 読めなかった場合・途中で例外が出た場合は名乗れず、フォールバックが働いて
    // 6本のリンクが到達不能になることがない。
    document.documentElement.classList.add("navjs");
    // 回線が遅く2秒を超えると、タイマーが先に発火したあとにこのファイルが遅れて届く。
    // その状態を放置すると折り返しナビとハンバーガーが同時に出るので、フォールバックを
    // 取り消してハンバーガー方式へ戻す。付いていなければ no-op。
    document.documentElement.classList.remove("nojsnav");
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
