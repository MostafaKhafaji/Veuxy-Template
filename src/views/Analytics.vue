<template>
  <div class="container">
    <div class="content">
      <h1>Analytic</h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    dropDown(e) {
      let allOpenMenus = document.querySelectorAll(".drop_menu");
      allOpenMenus.forEach((element) => {
        if (!e.target.nextSibling.classList.contains("display")) {
          element.classList.remove("display");
        }
      });
      e.target.nextSibling.classList.toggle("display");
    },
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  left: 260px;
  top: 0;
  right: 0;
  height: 100%;
  overflow-y: scroll;
  background-color: #f8f8f8;
  transition: all 0.3s ease;
}
.content {
  position: absolute;
  top: 100px;
  left: 30px;
  right: 30px;
  color: #6e6b7b;
}
</style>
