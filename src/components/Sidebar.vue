<template>
  <aside>
    <div class="aside-header">
      <ul>
        <li>
          <img
            src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg"
            alt=""
          />
          <span><h2 style="display: inline">Veuxy</h2> </span>
        </li>
        <a href=""></a>
        <li><span class="material-icons hide"> radio_button_checked </span></li>
        <li id="close"><span class="material-icons-outlined"> close </span></li>
      </ul>
    </div>

    <ul class="main">
      <li class="has-sub">
        <a href="#">
          <span class="material-icons-round"> home </span>
          <span>Dashboard</span>
          <span class="material-icons-round arrow"> navigate_next </span></a
        >

        <ul class="sub">
          <router-link :to="{ name: 'Ecommerce' }">
            <li>
              <span class="material-icons-round"> radio_button_unchecked </span>
              <span>eCommerce</span>
            </li>
          </router-link>
          <router-link :to="{ name: 'Analytics' }">
            <li>
              <span class="material-icons-round"> radio_button_unchecked </span>
              <span>Analytics</span>
            </li>
          </router-link>
        </ul>
      </li>
      <li class="slicer"><span> APPS &amp; PAGES</span></li>
      <li class="item">
        <span class="material-icons-round"> email </span><span>Email</span>
      </li>
      <li class="item">
        <span class="material-icons-round"> chat </span> <span>Chat</span>
      </li>
      <li class="item">
        <span class="material-icons-round"> task </span> <span>Todo</span>
      </li>
      <li class="item">
        <span class="material-icons-round"> event </span> <span>Calendar </span>
      </li>

      <!-- item -->
      <li class="has-sub">
        <a href="#">
          <span class="material-icons-round"> description </span>
          <span>Invoice</span>
          <span class="material-icons-round arrow"> navigate_next </span>
        </a>

        <ul class="sub">
          <router-link :to="{ name: 'Ecommerce' }">
            <li>
              <span class="material-icons-round"> radio_button_unchecked </span>
              <span>eCommerce</span>
            </li>
          </router-link>
          <router-link :to="{ name: 'Analytics' }">
            <li>
              <span class="material-icons-round"> radio_button_unchecked </span>
              <span>Analytics</span>
            </li>
          </router-link>
        </ul>
      </li>
      <!-- item -->
      <li class="has-sub">
        <a href="#">
          <span class="material-icons-round"> shopping_cart </span>
          <span>eCommerce</span>
          <span class="material-icons-round arrow"> navigate_next </span></a
        >

        <ul class="sub">
          <router-link :to="{ name: 'Ecommerce' }">
            <li>
              <span class="material-icons-round"> radio_button_unchecked </span>
              <span>eCommerce</span>
            </li>
          </router-link>
          <router-link :to="{ name: 'Analytics' }">
            <li>
              <span class="material-icons-round"> radio_button_unchecked </span>
              <span>Analytics</span>
            </li>
          </router-link>
        </ul>
      </li>
      <li class="slicer"><span> APPS &amp; PAGES</span></li>
      <li class="item">
        <span class="material-icons-round"> email </span><span>Email</span>
      </li>
      <li class="item">
        <span class="material-icons-round"> chat </span> <span>Chat</span>
      </li>
      <li class="item">
        <span class="material-icons-round"> task </span> <span>Todo</span>
      </li>
      <li class="item">
        <span class="material-icons-round"> event </span> <span>Calendar </span>
      </li>
      <li class="slicer"><span> APPS &amp; PAGES</span></li>
      <li class="item">
        <span class="material-icons-round"> email </span><span>Email</span>
      </li>
      <li class="item">
        <span class="material-icons-round"> chat </span> <span>Chat</span>
      </li>
      <li class="item">
        <span class="material-icons-round"> task </span> <span>Todo</span>
      </li>
      <li class="item">
        <span class="material-icons-round"> event </span> <span>Calendar </span>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
}
aside {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: scroll;
  transition: all 0.5s ease-in-out;
  width: 260px;
}
aside::-webkit-scrollbar,
aside::-webkit-scrollbar-thumb {
  width: 5px;
  border-radius: 13px;
  background-clip: padding-box;
  opacity: 0;
}

aside::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0 10px;
}
aside {
  color: white;
}
aside:hover {
  color: rgba(0, 0, 0, 0.3);
}
aside .aside-header ul {
  padding: 10px 15px;
  color: #7367f0;
  display: flex;
  justify-content: space-between;
}
aside .aside-header ul > li {
  display: flex;
  align-items: center;
  justify-content: center;
}
aside .aside-header ul li img {
  width: 36px;
  height: 24px;
  margin-right: 15px;
}
aside .aside-header ul li span h2 {
  font-weight: 600;
  font-size: 1.3rem;
}
aside .aside-header ul li span {
  font-size: 20px;
}
aside ul.main {
  display: flex;
  flex-direction: column;
  padding: 10px 15px 10px 20px;
  color: #625f6e;
}

aside ul.main li.item {
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}
aside ul.main li.item:hover,
aside ul.main li.has-sub a:hover {
  margin-left: 5px;
}

aside ul.main li span {
  padding: 10px;
}
aside ul.main li.slicer {
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 20px;
}

aside ul.sub span.material-icons-round {
  font-size: 15px;
}
aside ul.sub {
  transform: scaleY(0);
  transform-origin: top;
  transition: all 0.2s ease-in-out;
  height: 0;
}
aside ul.sub a {
  opacity: 0;
  transition: all 0.5 ease-in-out;
}
aside ul.main li.has-sub a {
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  width: 90%;
  border-radius: 10px;
}
aside ul.main li.has-sub a {
  color: #625f6e;
  position: relative;
}
aside ul.main li.active > a {
  background-color: #f5f5f5;
}
aside ul.main li.has-sub.show .sub {
  transform: scaleY(1);
  display: block;
  height: 60px;
  margin-bottom: 20px;
}
aside ul.main li.has-sub.show .sub a {
  opacity: 1;
}
aside ul.main li.has-sub span.arrow {
  transition: all 0.3s ease-in-out;
}
aside ul.main li.has-sub.show span.arrow {
  transform: rotate(90deg);
}

.has-sub a span:nth-child(3) {
  position: absolute;
  right: 0;
}
aside #close {
  display: none;
}
a.router-link-active {
  background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7));
}
a.router-link-active span {
  color: white;
}
@media (max-width: 1199px) {
  aside {
    left: -100%;
    z-index: 999;
    background-color: white;
  }
  .aside-header ul li span.hide {
    display: none;
  }
  aside #close {
    display: block;
  }
}

aside.open {
  left: 0;
}
</style>
