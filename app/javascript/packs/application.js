// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require slick

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

$(document).on('turbolinks:load', function () {
  console.log("Hello");
  $('.slick-carousel').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<img class="slick-prev" src="/assets/arrow-left.png">',
    nextArrow: '<img class="slick-next" src="/assets/arrow-right.png">',
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1
  });
});

Rails.start()
Turbolinks.start()
ActiveStorage.start()
