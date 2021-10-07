"use strict";

const $ = (selector) => document.querySelector(selector);

// get all images from the index.html document
const allImages = document.querySelectorAll(".rollover");

for (let i = 0; i < allImages.length; i++) {
  const image = allImages[i];

  //get the old url and the new url from the img tag
  const oldImgUrl = image.src;
  const newImgUrl = image.id;

  //preload image
  const newImg = new Image();

  newImg.src = newImgUrl;

  //add event listeners mouseover and mousput
    image.addEventListener("mouseenter", () => {
        image.src = newImg.src;
        console.log(image)
    });

    image.addEventListener("mouseout", () => {
        image.src = oldImgUrl;
    });
}
