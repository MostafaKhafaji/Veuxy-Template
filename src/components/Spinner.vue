<template>
  <div class="spin"></div>
</template>

<style>
.spin {
  width: 70px;
  height: 70px;
  border-width: 4px;
  border-color: #6356f3;
  border-style: solid solid dotted dotted;
  border-radius: 50%;
  position: relative;
  margin: 70px auto;
  animation: rotate-right 2s linear infinite;
}
.spin::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-width: 4px;
  border-color: rgb(93, 59, 138);
  border-style: solid dotted;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: rotate-left 1s linear infinite;
}
@keyframes rotate-right {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
@keyframes rotate-left {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-1turn);
  }
}
</style>
