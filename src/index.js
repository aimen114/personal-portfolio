function showCardContent() {
  let contentToHide = document.querySelector(".contentToHide");
  contentToHide.classList.toggle("hide");
  let imgShadow = document.querySelector(".img-part");
  let project_title = document.querySelector(".project-title");
  if (contentToHide.classList.contains("hide")) {
    imgShadow.classList.add("img-grad-hidden");
    imgShadow.classList.remove("img-grad-shown");
  } else {
    imgShadow.classList.add("img-grad-shown");
    imgShadow.classList.remove("img-grad-hidden");
    project_title.classList.remove("move-down");
  }
}

let showBtn = document.querySelector("#p-card-btn");
showBtn.addEventListener("click", showCardContent);
