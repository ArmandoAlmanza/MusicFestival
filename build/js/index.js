document.addEventListener("DOMContentLoaded", () => {
	createGallery();
 });
 const createGallery = () => {
	const gallery = document.querySelector(".image-gallery");
 
	for (let i = 1; i <= 12; i++) {
	   const image = document.createElement("img");
	   image.src = `build/img/thumb/${i}.webp`;
 
	   const lista = document.createElement("li");
	   lista.appendChild(image);
 
	   gallery.appendChild(lista);
	}
 };
 
