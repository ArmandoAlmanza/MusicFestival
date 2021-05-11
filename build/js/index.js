
document.addEventListener("DOMContentLoaded", () => {
    createGallery();
});

const createGallery = () => {
    const gallery = document.querySelector(".image-gallery");

    for (let i = 1; i <= 12; i++) {
        const image = document.createElement("img");
        image.src = `build/img/thumb/${i}.webp`;
        image.dataset.imageId = i;

        image.onclick = showImage;

        const lista = document.createElement("li");
        lista.appendChild(image);

        gallery.appendChild(lista);
    }
};


const showImage = (e) => {
    const id = parseInt(e.target.dataset.imageId);

    const image = document.createElement("img");
    image.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement("div");
    overlay.appendChild(image);
    overlay.classList.add("overlay");

    overlay.onclick = () => {
        overlay.remove();
        body.classList.remove("static");
    };

    const btnClose = document.createElement("p");
    btnClose.textContent = "✗";
    btnClose.classList.add("btn-close");

    btnClose.onclick = () => {
        overlay.remove();
        body.classList.remove("static");
    };

    overlay.appendChild(btnClose);

    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("static");
};
document.addEventListener("DOMContentLoaded", () => {
    scrollNav();
    navblock();
});

const navblock = () => {
    const navbar = document.querySelector(".header");
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            navbar.classList.remove("block");
        } else {
            navbar.classList.add("block");
        }
    });
    // Elemento a observar
    observer.observe(document.querySelector(".about-festival"));
};

const scrollNav = () => {
    const links = document.querySelectorAll(".navbar a");
    links.forEach(function (link) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const section = document.querySelector(
                e.target.attributes.href.value
            );
            section.scrollIntoView({
                behavior: "smooth",
            });
        });
    });
};
