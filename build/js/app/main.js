"use strict";!function(e){e(function(){e(".js-select").selectmenu(),e(".js-count").on("click",function(t){t.preventDefault();var n=e(t.currentTarget),a=n.parent().find("input[readonly]"),s=parseInt(a.val());n.minus=function(){s>0&&a.val(s-1)},n.plus=function(){a.val(s+1)},n[n.data("action")]()}),e(".js-calendar").each(function(t,n){var a=e(n),s=a.parent().find(".calendar-icon"),o=a.datepicker({offset:2,onShow:function(e){e.$el.addClass("show")},onHide:function(e){e.$el.removeClass("show")}}).data("datepicker");s.on("click",function(e){e.preventDefault(),o.show()}),a.hasClass("show")&&o.show()}),e(".js-file").jfilestyle({buttonText:"Обзор",placeholder:"Файл не выбран"}),e(".js-file[disabled]").jfilestyle({disabled:!0});var t=e(".js-notice");t.find(".close").on("click",function(e){e.preventDefault(),t.slideUp()});var n=e(".js-tab"),a=e(".js-target");n.on("click",function(t){t.preventDefault();var s=e(t.currentTarget),o=e(s.data("target"));n.removeClass("active"),a.removeClass("show"),s.addClass("active"),o.addClass("show")}),e(".js-slider").swiper({nextButton:".swiper-button-next",prevButton:".swiper-button-prev",slidesPerView:"auto",loop:!0})})}(jQuery);