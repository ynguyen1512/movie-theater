window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-main__item");
  const nextBtn = document.querySelector("slider-next");
  const prevBtn = document.querySelector("slider-prev");
  const dotItems = document.querySelectorAll(".slider-dot__item");
  const sliderLength = sliderItems.length;
  const sliderItemWidth = sliderItems[0].offsetWidth;
  let position = 0;
  let index = 0;

  nextBtn.addEventListener("click", () => {
    handleChangeSlide(1);
  })

  prevBtn.addEventListener("click", () => {
    handleChangeSlide(-1);
  })
});

[...dotItems].forEach((item) =>
        item.addEventListener("click", function(e)  {
        e.target.classList.add("active");
        const slideIndex = parseInt(e.target.dataset.index);
        index = sliderIndex;
        positionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;
    })
);

function handleChangeSlide(direction) {
    if (direction === 1) {
      if (index >= sliderLength - 1) {
        index = sliderLength - 1;
        return;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index++;
    } else if (direction === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index--;
    }
    [...dotItems].forEach((el) => el.classList.remove("active"));
    dotItems[index].classList.add("active");
  }
});