<template>
  <div class="pro">
    <router-link :to="{ name: 'SingleProduct', params: { id: product.id } }">
      <div class="product">
        <div class="img"><img :src="product.img" alt="" /></div>
        <div class="details">
          <div class="rate">
            <span
              :class="{ active: product.rating >= 1 }"
              class="material-icons-outlined star"
            >
              star
            </span>
            <span
              :class="{ active: product.rating >= 2 }"
              class="material-icons-outlined star"
            >
              star
            </span>
            <span
              :class="{ active: product.rating >= 3 }"
              class="material-icons-outlined star"
            >
              star
            </span>
            <span
              :class="{ active: product.rating >= 4 }"
              class="material-icons-outlined star"
            >
              star
            </span>
            <span
              :class="{ active: product.rating >= 5 }"
              class="material-icons-outlined star"
            >
              star
            </span>
          </div>
          <div class="price">
            <span style="font-size: 13px; font-weight: 600"
              >${{ product.price }}</span
            >
          </div>
        </div>
        <div class="name">
          <p>{{ snippetName }}</p>
          <p>{{ snippetDescription }}</p>
        </div>
      </div>
    </router-link>
    <div class="buttons">
      <div class="whishlist">
        <button @click="added = !added">
          <span :class="{ active: added }" class="material-icons-outlined">
            favorite
          </span>
          <span>Whishlist</span>
        </button>
      </div>
      <div class="cart">
        <button @click="addtoCart(product)">
          <span
            ><span class="material-icons-outlined"> shopping_cart </span>
            <span v-if="addedToCart">View In Cart</span>
            <span v-else>Add to Cart</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      added: false,
      addedToCart: false,
    };
  },
  computed: {
    snippetName() {
      if (this.product.name.length > 30) {
        return this.product.name.substring(0, 30) + "...";
      } else {
        return this.product.name;
      }
    },
    snippetDescription() {
      if (this.product.discription.length > 35) {
        return this.product.discription.substring(0, 35) + "...";
      } else {
        return this.product.discription;
      }
    },
  },
  methods: {
    addtoCart(products) {
      this.addedToCart = true;
      this.$emit("addToCart", products);
    },
  },
};
</script>

<style scoped>
.star {
  color: rgb(138, 138, 138);
}
.pro a {
  text-decoration: none;
}
.rate span.active {
  color: orange;
}
.product {
  background-color: white;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.pro {
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
}
.pro:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 25px 0 rgb(34 41 47 / 25%);
}
.img img {
  width: 100%;
  height: auto;
}
.details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.details span {
  font-size: 15px;
  color: #6e6b7b;
}
.name p {
  /* display: block;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis; */
  /* max-height: 15px; */
  font-size: 12px;
  color: #6e6b7b;
}
.name p:first-child {
  font-weight: 600;
}
.name p:nth-child(2) {
  font-size: 11px;
}
.buttons {
  display: flex;
}
.buttons button {
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  width: 100%;
  justify-content: center;
}
.buttons .whishlist,
.buttons .cart {
  display: flex;
  align-items: center;
  min-height: 40px;
  width: 100%;
  gap: 0;
}
.buttons .whishlist button {
  background-color: #f6f6f6;
  border-bottom-left-radius: 5px;
  border: 1px solid #f6f6f6;
}
.buttons .cart button {
  background-color: #7367f0;
  color: white;
}
.buttons button span {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
}
.buttons button span:first-child {
  font-size: 12px;
  margin-right: 5px;
}
span.active {
  color: red;
}
</style>
