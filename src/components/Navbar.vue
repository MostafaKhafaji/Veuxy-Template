<template>
  <nav>
    <div class="icons">
      <ul>
        <li>
          <span class="material-icons-outlined" id="menu-open"> menu </span>
        </li>
        <li class="hide"><span class="material-icons"> event </span></li>

        <li class="hide">
          <span class="material-icons"> chat_bubble_outline </span>
        </li>

        <li class="hide">
          <span class="material-icons-outlined"> email </span>
        </li>

        <li class="hide">
          <span class="material-icons-outlined"> task </span>
        </li>

        <li class="hide">
          <span class="material-icons-outlined"> grade </span>
        </li>
      </ul>
    </div>
    <div class="right-content">
      <div class="lang">
        <div @click="dropDown" class="holder">
          <img
            src="https://pixinvent.com/demo/vuexy-vuejs-laravel-admin-template/demo-1/images/flags/en.png"
            alt=""
          />
          <span>English</span>
          <ul class="sub">
            <li>
              <img
                src="https://pixinvent.com/demo/vuexy-vuejs-laravel-admin-template/demo-1/images/flags/en.png"
                alt=""
              />
              <span>English</span>
            </li>
            <li>
              <img
                src="https://pixinvent.com/demo/vuexy-vuejs-laravel-admin-template/demo-1/images/flags/fr.png"
                alt=""
              />
              <span>French</span>
            </li>
            <li>
              <img
                src="https://pixinvent.com/demo/vuexy-vuejs-laravel-admin-template/demo-1/images/flags/de.png"
                alt=""
              />
              <span>German</span>
            </li>
            <li>
              <img
                src="https://pixinvent.com/demo/vuexy-vuejs-laravel-admin-template/demo-1/images/flags/pt.png"
                alt=""
              />
              <span>Portuguese</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span class="material-icons-outlined hide"> dark_mode </span>
      </div>
      <div>
        <span class="material-icons-outlined"> search </span>
      </div>
      <div class="cart">
        <span @click="dropDown" class="material-icons-outlined">
          shopping_cart
        </span>
        <span class="num" v-show="cartItems.length">{{
          cartItems.length
        }}</span>
        <ul class="sub">
          <template v-for="item in cartItems" :key="item.id">
            <li>{{ item.name }}</li>
          </template>
        </ul>
      </div>
      <div>
        <span @click="dropDown" class="material-icons-outlined">
          notifications
        </span>
        <ul class="sub">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div class="photo">
        <div @click="dropDown" class="holder">
          <div class="name hide">
            <p>John Doe</p>
            <span>admin</span>
          </div>
          <div class="img">
            <img
              src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png"
              alt=""
            />
          </div>
          <ul class="sub">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["cartItems"],
  data() {
    return {};
  },
  methods: {
    dropDown(e) {
      console.log(e.target.parentElement);
      let allDropDowns = document.querySelectorAll("nav .right-content div");
      allDropDowns.forEach((element) => {
        if (!e.target.parentElement.classList.contains("show")) {
          element.classList.remove("show");
        }
      });
      e.target.parentElement.classList.toggle("show");
    },
  },
};
</script>

<style>
nav {
  position: fixed;
  top: 20px;
  left: 290px;
  right: 30px;
  height: 62px;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  border-radius: 5px;
  z-index: 999999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99 !important;
  background-color: white;
}

nav .icons ul {
  display: flex;
  align-items: center;
  padding: 0 20px;
  list-style: none;
}
nav .icons ul li {
  color: #807e7e;
  padding: 5px;
  cursor: pointer;
}
nav .right-content {
  display: flex;
  align-items: center;
  padding-right: 20px;
  color: #807e7e;
}
nav .right-content div {
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  position: relative;
  height: 50px;
}
nav .right-content .lang img {
  width: 22px;
  height: 14px;
  margin-right: 15px;
}
nav .right-content .lang span {
  font-size: 14px;
}
nav .right-content .name {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
nav .right-content .name p {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}
nav .right-content .name span {
  font-size: 12px;
  padding-top: 2px;
}
nav .right-content .img {
  height: 40px;
  width: 40px;
  overflow: hidden;
  border-radius: 50%;
}
nav .right-content .img img {
  width: 40px;
}

nav .right-content div ul.sub {
  position: absolute;
  top: 50px;
  list-style: none;
  right: 0;
  background-color: white;
  width: 150px;
  text-align: left;
  padding: 0;
  transform-origin: top;
  transition: all 0.3s ease-in-out;
  height: 0;
  transform: scaleY(0);
  border-radius: 5px;
}
nav .right-content div ul.sub li {
  opacity: 0;
}
nav .right-content div ul.sub li {
  padding: 10px 5px;
  transition: all 0.3s ease;
}
nav .right-content div ul.sub li:hover {
  background-color: #eeedfd;
  color: rgb(148, 148, 238);
}
nav .right-content div.show ul.sub {
  transform: scaleY(1);
  height: auto;
}
nav .right-content div.show ul.sub li {
  opacity: 1;
}
.icons #menu-open {
  display: none;
}
@media (max-width: 1199px) {
  nav {
    left: 10px;
  }
  .icons #menu-open {
    display: block;
  }
  .icons li.hide {
    display: none;
  }
  .right-content .hide {
    display: none;
  }
  .right-content .photo .hide {
    display: none;
  }
}
.holder {
  margin-right: 0px !important;
  z-index: 999 !important;
  width: 100%;
  height: 100%;
}
.cart {
  position: relative;
}
.cart .num {
  position: absolute;
  top: 0;
  right: -10px;
  background-color: #ea5455 !important;
  width: 20px;
  height: 20px;
  font-weight: bold;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
</style>
