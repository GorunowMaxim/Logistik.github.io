const dropDownRow = document.querySelectorAll(".aside__row");
const dropDownBlock = document.querySelectorAll(".aside__block");
const dropDownHeadline = document.querySelectorAll(".sub-block__headline");
const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tabs-content');

tabs.forEach((el) => {
    el.addEventListener('click', () => {
        tabs.forEach((el) => {
            el.classList.remove('tab_active');
        });
        el.classList.add('tab_active');
    });
});

tabs.forEach((el) => {
    el.addEventListener('click', (el) => {
        const tab = el.currentTarget.dataset.path;
        tabsContent.forEach((el) => {
            el.classList.remove('tabs-content_active');
        });
        document.querySelector(`[data-target = ${tab}`).classList.add('tabs-content_active');
    });
});



dropDownRow.forEach((el) => {
  el.addEventListener("click", (el) => {
    const element = el.currentTarget.dataset.path;
    if (
      document
        .querySelector(`[data-target = ${element}`)
        .classList.contains("aside__block_active")
    ) {
      document
        .querySelector(`[data-target = ${element}`)
        .classList.remove("aside__block_active");
    } else {
      document
        .querySelector(`[data-target = ${element}`)
        .classList.add("aside__block_active");
    }
  });
});

dropDownHeadline.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('sub-block__headline_active');
    });
});

dropDownHeadline.forEach((el) => {
  el.addEventListener("click", (el) => {
    
    const headline = el.currentTarget.dataset.path;
    if (
      document
        .querySelector(`[data-target = ${headline}`)
        .classList.contains("sub-block__drop-down_active")
    ) {
      document
        .querySelector(`[data-target = ${headline}`)
        .classList.remove("sub-block__drop-down_active");
    } else {
      document
        .querySelector(`[data-target = ${headline}`)
        .classList.add("sub-block__drop-down_active");
    }
  });
});
