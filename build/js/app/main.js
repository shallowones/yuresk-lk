"use strict";!function(e,t){window.storage={},window.storage.jBoxOpenEvent="jBoxOpenEvent",window.storage.jBoxCloseComplete="jBoxCloseComplete",e(function(){var n=function(e){return void 0!==e&&e.length};e(".js-select").selectmenu(),e(".js-count").on("click",function(t){t.preventDefault();var n=e(t.currentTarget),a=n.parent().find("input[readonly]"),o=parseInt(a.val());n.minus=function(){o>0&&a.val(o-1)},n.plus=function(){a.val(o+1)},n[n.data("action")]()}),e(".js-calendar").each(function(t,n){var a=e(n),o=a.parent().find(".calendar-icon"),s=a.datepicker({offset:2,onShow:function(e){e.$el.addClass("show")},onHide:function(e){e.$el.removeClass("show")}}).data("datepicker");o.on("click",function(e){e.preventDefault(),s.show()}),a.hasClass("show")&&s.show()}),e(".js-file").jfilestyle({buttonText:"Обзор",placeholder:"Файл не выбран"}),e(".js-file[disabled]").jfilestyle({disabled:!0});var a=e(".js-notice");a.find(".close").on("click",function(e){e.preventDefault(),a.slideUp()});var o=e(".js-tab"),s=e(".js-target");o.on("click",function(t){t.preventDefault();var n=e(t.currentTarget),a=e(n.data("target"));o.removeClass("active"),s.removeClass("show"),n.addClass("active"),a.addClass("show")}),e(".js-slider").swiper({nextButton:".swiper-button-next",prevButton:".swiper-button-prev",slidesPerView:"auto",loop:!0});e(".js-more").on("click",function(t){t.preventDefault();var n=t.currentTarget,a=e(n),o=n.innerText,s=n.dataset.text,i=e(n.dataset.target),r=a.hasClass("active");i.slideToggle(r),function(e){a.animate({opacity:0},400,function(){a.text(s).attr("data-text",o).animate({opacity:1},400),e?a.removeClass("active"):a.addClass("active")})}(r)}),new t("Modal",{attach:".js-popup",onOpen:function(){var t=this,a=this.source,o=this.content,s=e(a.data("target")),i=s.html();n(i)?(s.html(""),this.setContent(i),o.find("button[data-close]").on("click",function(e){e.preventDefault(),t.close()}),o.find("select").selectmenu()):this.close(),window.storage.jBoxActiveModal=this.wrapper,this.wrapper.trigger(window.jBoxOpenEvent)},onCloseComplete:function(){var t=this.source,n=this.content,a=e(t.data("target"));n.find("select").selectmenu("destroy");var o=n.html();n.html(""),a.append(o),window.storage.jBoxActiveModal=this.wrapper,this.wrapper.trigger(window.storage.jBoxCloseComplete)}})})}(jQuery,jBox);