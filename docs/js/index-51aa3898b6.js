$(function(){Materialize.scrollFire([{selector:".waterfall",offset:200}]),setTocToggle(),setAsideToggle(),$(".tab").click(function(e){window.location.href=$(this).find("a").prop("href")}),$(".modal").modal()});var setTocToggle=function(){function e(e,o){var t=e.href?$(e.getAttribute("href")):$(e);$("html, body").animate({scrollTop:t.offset().top-a},400,o)}function o(){var o=$(".toc-panel nav"),s=($("footer.page-footer"),$(".post .card")),i=$("nav.navbar");if(0!==o.length){o.on("click","a",function(a){a.preventDefault(),a.stopPropagation(),t=!1;var s=$(this);o.find("a").removeClass("active"),e(this,function(){t=!0,s.addClass("active")})});var n=[].slice.call(o.find("li a")),l=function(){return n.map(function(e){return Math.floor($(e.getAttribute("href")).offset().top-a)})}(),r=o.offset(),f=o.outerHeight(),c=i.height(),d=function(){if(l){var e=s.height(),a=s.offset(),i=$("html").scrollTop()||$("body").scrollTop(),d=!1;if(i+c>=r.top&&(o.removeClass("absolute").addClass("fixed").css("top",c),d=!0),i+c+f>=a.top+e&&(o.removeClass("fixed").addClass("absolute").css({top:e-f}),d=!0),d||(r=o.offset(),o.removeClass("fixed").removeClass("absolute").css({top:"initial"})),t){for(var u,v=0,p=l.length-1;v<p;)u=v+p+1>>1,l[u]===i?v=p=u:l[u]<i?v=u:p=u-1;$(n).removeClass("active").eq(v).addClass("active")}}};$(window).resize(function(){f=o.outerHeight(),c=i.height(),d()}).scroll(function(){d()}),d()}}var t=!0,a=0;return o}(),setAsideToggle=function(){function e(){o.hasClass("open")?(o.removeClass("open"),i.fadeOut(400),t.removeClass("covered"),s.text("menu")):(o.addClass("open"),i.fadeIn(400),t.addClass("covered"),s.text("close"))}var o=$("aside.side-panel"),t=$("body"),a=$(".button-collapse"),s=$("i.material-icons",a),i=$('<div id="js-cover"></div>');return i.click(function(o){o.stopPropagation(),o.preventDefault(),e()}),i.appendTo(t),function(){a.click(e)}}();