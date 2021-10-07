"use strict"

const $ = (selector) => document.querySelector(selector)

// Gets all images from index.html
const allImages = document.querySelectorAll(".rollover")

for (let i = 0; i < allImages.length; i++) {
	const image = allImages[i]

	// Gets the old url and the new url from the img tags
	const oldImgUrl = image.src
	const newImgUrl = image.src

	// Preloads imgs
	const newImg = new Image()

	// Add event listeners for mouseover
	image.addEventListener("mouseenter", () => {
		image.src = newImgUrl
		console.log(image)
	})

	// Add event listener for mouseout
	image.addEventListener("mouseout", () => {
		image.src = oldImgUrl
	})
}