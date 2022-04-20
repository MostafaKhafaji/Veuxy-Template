<template>
  <div class="container">
    <div class="content"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
  data() {
    return {
      show: "",
    };
  },
  methods: {
    slideDown() {
      this.show = "show";
    },
  },
};
</script>
<style></style>
