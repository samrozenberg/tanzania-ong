// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require slick

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

$(document).ready(function () {
  console.log("Hello");
  $('.slick-carousel').slick({
    dots: false,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1
  });
});

Rails.start()
Turbolinks.start()
ActiveStorage.start()
