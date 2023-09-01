const buttons = document.querySelectorAll(".dropdown-menu__button");

buttons.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("dropdown-menu__button_active");
  });
});

buttons.forEach((el) => {
  el.addEventListener("click", (el) => {
    const menu = el.currentTarget.dataset.path;
    const dropDownMenu = document.querySelectorAll(".dropdown-menu__list");

    if (
    document
        .querySelector(`[data-target=${menu}`)
        .classList.contains("dropdown-menu__list_active")
    ) {
    document
        .querySelector(`[data-target=${menu}`)
        .classList.remove("dropdown-menu__list_active");
    } else {
    document
        .querySelector(`[data-target=${menu}`)
        .classList.add("dropdown-menu__list_active");
    }
  });
});

const swiperContacts = new Swiper (".group-sales__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
});
