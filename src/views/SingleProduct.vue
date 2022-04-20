<template>
  <div class="container">
    <div class="content">
      <div class="header">
        <div class="left">
          <div class="name"><h2>Product Details</h2></div>
          <div class="breadcrumps">
            <ul>
              <li><span class="material-icons-round"> home </span></li>
              <li>
                <span class="material-icons-round"> chevron_right </span>
                <span>ECommerce</span>
              </li>
              <li>
                <span class="material-icons-round"> chevron_right </span>
                <span>Shop</span>
              </li>
              <li>
                <span class="material-icons-round"> chevron_right </span>
                <span>Product Details</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <button>
            <span class="material-icons-outlined"> settings </span>
          </button>
        </div>
      </div>
      <div class="product">
        <div class="img">
          <img :src="product.img" alt="" />
        </div>
        <div class="details">
          <div class="name">
            <h4>{{ product.name }}</h4>
          </div>
          <div class="barnd"><span>by</span> {{ product.brand }}</div>
          <div class="price">
            <p>{{ product.price }} <span>|</span></p>
            <ul class="star">
              <li>
                <span
                  :class="{ active: product.rate >= 1 }"
                  class="material-icons-outlined"
                >
                  star
                </span>
              </li>
              <li>
                <span
                  :class="{ active: product.rate >= 2 }"
                  class="material-icons-outlined"
                >
                  star
                </span>
              </li>
              <li>
                <span
                  :class="{ active: product.rate >= 3 }"
                  class="material-icons-outlined"
                >
                  star
                </span>
              </li>
              <li>
                <span
                  :class="{ active: product.rate >= 4 }"
                  class="material-icons-outlined"
                >
                  star
                </span>
              </li>
              <li>
                <span
                  :class="{ active: product.rate >= 5 }"
                  class="material-icons-outlined"
                >
                  star
                </span>
              </li>
            </ul>
          </div>
          <div class="available">
            <p v-if="product.availability">Avaible - <span>In stock</span></p>
            <p v-else>Not avaible - <span>Out of stock</span></p>
          </div>
          <div class="description">
            <p>{{ product.discription }}</p>
          </div>
          <div class="shipping">
            <strong>
              <span class="material-icons-outlined"> shopping_cart </span>
              FreeShipping
            </strong>
          </div>
          <div class="EMI">
            <strong>
              <span class="material-icons-outlined"> attach_money </span>
              EMI options available
            </strong>
          </div>
          <div class="colors">
            <p>Colors</p>
            <ul>
              <li class="puple"></li>
              <li class="green"></li>
              <li class="orange"></li>
              <li class="red"></li>
              <li class="blue"></li>
            </ul>
          </div>
          <div class="buttons">
            <button>View In Cart</button>
            <button>Whishlist</button>
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      product: {
        img: "",
        price: "",
        brand: "",
        rate: null,
        name: "",
        discription: "",
        availability: false,
        colors: [],
      },

      uri: "http://localhost:3000/products/" + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.product.img = data.img;
        this.product.price = data.price;
        this.product.brand = data.brand;
        this.product.colors = data.colors;
        this.product.availability = data.available;
        this.product.rate = data.rating;
        this.product.name = data.name;
        this.product.discription = data.discription;
      });
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

.content .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content .header .left {
  display: flex;
  align-items: center;
}
.content .header .left ul {
  list-style: none;
  display: flex;
  align-items: center;
}
.content .header .left ul li {
  font-size: 14px;
  display: flex;
  align-items: center;
}
.content .header .left ul li:nth-child(1),
.content .header .left ul li:nth-child(2) {
  padding: 5px;
  color: #796df3;
}
.content .header .left h2 {
  border-right: 1px solid #d6dce1;
  padding-right: 20px;
  font-size: 22px;
  font-weight: 600;
}
.header .right button {
  border: none;
  padding: 0;
  cursor: pointer;
}
.header .right span {
  padding: 10px;
  background-color: #796df3;
  border-radius: 5px;
  color: white;
  font-size: 20px;
}
.header .right span:hover {
  box-shadow: 0 8px 25px -8px #7367f0;
}
@media (max-width: 1199px) {
  .container {
    left: 0;
  }
}

.product {
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding: 30px;
}
.product .img {
  flex: 1;
}
@media (max-width: 1199px) {
  .product {
    flex-direction: column;
  }
}
.product ul {
  list-style: none;
}
.product ul li {
  display: inline-block;
}
.product ul li span {
  font-size: 15px;
}
.product .price {
  display: flex;
  align-items: center;
}
.product .colors {
  padding: 15px 0;
  border-top: 1px solid #dcdcdd;
  border-bottom: 1px solid #dcdcdd;
}
.product .colors ul {
  padding: 0;
}
.product .colors ul li {
  width: 15px;
  height: 15px;
  cursor: pointer;
  border-radius: 50%;
  margin-right: 5px;
}
.product .colors ul li.orange {
  background: orange;
}
.product .colors ul li.blue {
  background: rgb(30, 173, 192);
}
.product .colors ul li.red {
  background: rgb(248, 73, 73);
}
.product .colors ul li.green {
  background: rgb(62, 206, 86);
}
.product .colors ul li.puple {
  background: #7367f0;
}
.price ul li span.active {
  color: orange;
}
</style>
