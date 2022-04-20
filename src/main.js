import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
window.addEventListener("load", function () {
  let sliderDownMenu = this.document.querySelectorAll(".has-sub");
  sliderDownMenu.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("show");
      e.currentTarget.classList.toggle("active");
    });
  });

  // let x = this.document.querySelectorAll("nav .right-content div");
  // x.forEach((element) => {
  //   element.addEventListener("click", (e) => {
  //     x.forEach((element) => {
  //       if (!e.currentTarget.classList.contains("show")) {
  //         element.classList.remove("show");
  //       }
  //     });
  //     e.currentTarget.classList.toggle("show");
  //   });
  // });

  let openMenu = this.document.querySelector("#menu-open");
  let aside = this.document.querySelector("aside");
  let closeMenu = this.document.querySelector("#close");

  openMenu.addEventListener("click", () => {
    aside.classList.toggle("open");
  });
  closeMenu.addEventListener("click", () => {
    aside.classList.remove("open");
  });
});
