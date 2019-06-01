   var product_btns_buy = document.querySelectorAll(".product-btn-buy");
   var popup_basket_add = document.querySelector(".popup-basket-add");
   var popup_btns_cancel = document.querySelectorAll(".btn-popup-close");
   var popup_btn_continue = document.querySelector(".btn-popup-continue");


   for (var i = 0; i < product_btns_buy.length; i++) {
       product_btns_buy[i].addEventListener("click", function (event) {
           event.preventDefault();
           popup_basket_add.classList.add("popup_show");
       });
   };


   for (var i = 0; i < popup_btns_cancel.length; i++) {
      popup_btns_cancel[i].addEventListener("click", function (event) {
           event.preventDefault();
           if (popup_basket_add.classList.contains("popup_show")) {
               popup_basket_add.classList.remove("popup_show");
           }
       });
   };


   popup_btn_continue.addEventListener("click", function (event) {
       event.preventDefault();
       popup_basket_add.classList.remove("popup_show");
   });


   window.addEventListener("keydown", function (event) {
       if (event.keyCode == 27) {
           if (popup_basket_add.classList.contains("popup_show")) {
               popup_basket_add.classList.remove("popup_show");
           }
           if (contact_form.classList.contains("contact_popup_show")) {
               contact_form.classList.remove("contact_popup_show");
           }
       }
   });