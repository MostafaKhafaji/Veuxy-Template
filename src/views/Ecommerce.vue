<template>
  <Navbar :cartItems="cartItems" />
  <div class="container">
    <div class="content">
      <div class="header">
        <div class="left">
          <div class="name"><h2>Shop</h2></div>
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
            </ul>
          </div>
        </div>
        <div class="right">
          <button>
            <span class="material-icons-outlined"> settings </span>
          </button>
        </div>
      </div>
      <div class="filter"></div>
      <div class="products">
        <div class="left">
          <p>Filters</p>
          <form action="">
            <div class="multi-range">
              <label for="">Multi Range</label>
              <div class="item">
                <input
                  type="radio"
                  name="range"
                  checked
                  v-model="price"
                  value="all"
                />
                <label for="">All</label>
              </div>
              <div class="item">
                <input type="radio" name="range" v-model="price" value="10" />
                <label for=""> &lt; =$10</label>
              </div>
              <div class="item">
                <input
                  type="radio"
                  name="range"
                  v-model="price"
                  value="10-100"
                />
                <label for="">$10 - $100</label>
              </div>
              <div class="item">
                <input
                  type="radio"
                  name="range"
                  v-model="price"
                  value="100-500"
                />
                <label for="">$100 - $500</label>
              </div>
              <div class="item">
                <input type="radio" name="range" v-model="price" value="500" />
                <label for="">&gt; = $500</label>
              </div>
            </div>
            <div class="range">
              <label for="">Price </label>
              <input
                type="range"
                v-model="range"
                min="0"
                max="10000"
                step="10"
              />
            </div>
            <label v-show="range != Infinity" for="">{{ range }}</label>
            <div class="cat">
              <label for="">Categories</label>
              <div class="item">
                <input type="radio" name="cat" id="" />
                <label for="">Appliances</label>
              </div>
              <div class="item">
                <input type="radio" name="cat" id="" />
                <label for="">Audio</label>
              </div>
              <div class="item">
                <input type="radio" name="cat" id="" />
                <label for="">Cameras &amp; Camcorders</label>
              </div>
              <div class="item">
                <input type="radio" name="cat" id="" />
                <label for="">Car Electronics &amp; GPS</label>
              </div>
              <div class="item">
                <input type="radio" name="cat" id="" />
                <label for="">Cell Phones</label>
              </div>
              <div class="item">
                <input type="radio" name="cat" id="" />
                <label for="">Computers &amp; Tablets</label>
              </div>
              <div class="item">
                <input type="radio" name="cat" id="" />
                <label for="">Health, Fitness &amp; Beauty</label>
              </div>
              <div class="item">
                <input type="radio" name="cat" id="" />
                <label for="">Office &amp; School Supplies</label>
              </div>
              <div class="item">
                <input type="radio" name="cat" id="" />
                <label for="">TV &amp; Home Theater</label>
              </div>
              <div class="item">
                <input type="radio" name="cat" id="" />
                <label for="">Video Games</label>
              </div>
            </div>
            <div class="brand">
              <label for="">Brands</label>
              <div class="item">
                <input type="radio" name="brand" id="" />
                <label for="">Insignia™</label>
              </div>
              <div class="item">
                <input type="radio" name="brand" id="" />
                <label for="">Samsung</label>
              </div>
              <div class="item">
                <input type="radio" name="brand" id="" />
                <label for="">Metra</label>
              </div>
              <div class="item">
                <input type="radio" name="brand" id="" />
                <label for="">HP</label>
              </div>
              <div class="item">
                <input
                  type="radio"
                  name="brand"
                  value="apple"
                  v-model="brand"
                  id=""
                />
                <label for="">Apple</label>
              </div>
              <div class="item">
                <input
                  type="radio"
                  name="brand"
                  value="GE"
                  v-model="brand"
                  id=""
                />

                <label for="">GE</label>
              </div>
              <div class="item">
                <input type="radio" name="brand" id="" />
                <label for="">Sony</label>
              </div>
              <div class="item">
                <input type="radio" name="brand" id="" />
                <label for="">Incipio</label>
              </div>
              <div class="item">
                <input type="radio" name="brand" id="" />
                <label for="">KitchenAid</label>
              </div>
              <div class="item">
                <input type="radio" name="brand" id="" />
                <label for="">Whirlpool</label>
              </div>
            </div>
            <div class="rating">
              <label for="">Rating</label>
              <div class="item">
                <label>
                  <input
                    class="rate"
                    type="radio"
                    name="rate"
                    value="4"
                    v-model="rate"
                  />
                  <div class="star">
                    <span class="active material-icons-outlined"> star </span>
                    <span class="active material-icons-outlined"> star </span>
                    <span class="active material-icons-outlined"> star </span>
                    <span class="active material-icons-outlined"> star </span>
                    <span class="material-icons-outlined"> star </span>
                    <span> &amp; up</span>
                  </div>
                </label>
                <div class="number"><span>111</span></div>
              </div>
              <div class="item">
                <label>
                  <input
                    class="rate"
                    type="radio"
                    name="rate"
                    value="3"
                    v-model="rate"
                  />
                  <div class="star">
                    <span class="active material-icons-outlined"> star </span>
                    <span class="active material-icons-outlined"> star </span>
                    <span class="active material-icons-outlined"> star </span>
                    <span class="material-icons-outlined"> star </span>
                    <span class="material-icons-outlined"> star </span>
                    <span> &amp; up</span>
                  </div>
                </label>
                <div class="number"><span>153</span></div>
              </div>
              <div class="item">
                <label>
                  <input
                    class="rate"
                    type="radio"
                    name="rate"
                    value="2"
                    v-model="rate"
                  />
                  <div class="star">
                    <span class="active material-icons-outlined"> star </span>
                    <span class="active material-icons-outlined"> star </span>
                    <span class="material-icons-outlined"> star </span>
                    <span class="material-icons-outlined"> star </span>
                    <span class="material-icons-outlined"> star </span>
                    <span> &amp; up</span>
                  </div>
                </label>
                <div class="number"><span>160</span></div>
              </div>
              <div class="item">
                <label>
                  <input
                    class="rate"
                    type="radio"
                    name="rate"
                    value="1"
                    v-model="rate"
                  />
                  <div class="star">
                    <span class="active material-icons-outlined"> star </span>
                    <span class="material-icons-outlined"> star </span>
                    <span class="material-icons-outlined"> star </span>
                    <span class="material-icons-outlined"> star </span>
                    <span class="material-icons-outlined"> star </span>
                    <span> &amp; up</span>
                  </div>
                </label>
                <div class="number"><span>190</span></div>
              </div>
            </div>
          </form>
        </div>
        <div class="right">
          <p>{{ filterProducts.length }} result found</p>
          <form @submit.prevent="">
            <input
              style="
                padding: 5px;
                border: none;
                border-radius: 5px;
                width: 100%;
                height: 30px;
                box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
                margin-bottom: 20px;
                color: #6e6b7b;
                outline: none;
              "
              type="text"
              placeholder="Search Products"
              v-model="search"
            />
          </form>
          <div :class="{ box: products.length }">
            <template v-if="error">{{ error }}</template>
            <template v-if="products.length">
              <template v-if="filterProducts.length">
                <template v-for="product in filterProducts" :key="product.id">
                  <Products @addToCart="handleCart" :product="product" />
                </template>
              </template>
              <template v-else><h3>No Products</h3></template>
            </template>
            <template v-else><Spinner /></template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "../components/Products.vue";
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";
export default {
  components: { Products, Navbar, Spinner },
  data() {
    return {
      products: [],
      filterProduct: [],
      search: "",
      brand: "",
      range: Infinity,
      rate: null,
      cartItems: [
        {
          id: 1,
          name: "Apple Watch Series 5",
          price: 339.99,
          rating: 4,
          img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
          discription:
            "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
          brand: "apple",
          available: false,
          colors: ["red", "purple", "green"],
        },
      ],
      price: Infinity,
      error: null,
    };
  },
  methods: {
    filterByPrice(products) {
      if (this.price == 500) {
        return products.filter((product) => product.price >= this.price);
      } else if (this.price == "all") {
        return products;
      } else if (this.price == "10-100") {
        return products.filter(
          (product) => product.price <= 100 && product.price >= 10
        );
      } else if (this.price == "100-500") {
        return products.filter(
          (product) => product.price <= 500 && product.price >= 100
        );
      } else {
        return products.filter((product) => product.price <= this.price);
      }
    },
    filterProductsByBrand(products) {
      return products.filter((product) =>
        product.brand.toLowerCase().match(this.brand.toLowerCase())
      );
    },
    filterBySearch(products) {
      return products.filter((product) =>
        product.name.toLowerCase().match(this.search.toLowerCase())
      );
    },

    filterProductsByRange(products) {
      return products.filter((product) =>
        product.price > 0 && product.price < this.range ? product : ""
      );
    },
    filterProductsByRate(products) {
      return products.filter((product) => product.rating >= this.rate);
    },
    handleCart(one) {
      this.cartItems.push(one);
    },
  },
  computed: {
    filterProducts() {
      return this.filterBySearch(
        this.filterProductsByRange(
          this.filterProductsByRate(
            this.filterProductsByBrand(this.filterByPrice(this.products))
          )
        )
      );
    },
  },
  mounted() {
    const loadData = async () => {
      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });
        let data = await fetch("http://localhost:3000/products");
        if (!data.ok) {
          throw Error("No Data Available");
        }
        this.products = await data.json();
      } catch (err) {
        this.error = err.message;
      }
    };
    loadData();
  },
};
</script>

<style scoped>
@import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";
.container {
  position: fixed;
  left: 260px;
  top: 0;
  right: 0;
  bottom: 0;

  overflow-y: scroll;
  background-color: #f8f8f8;
  transition: all 0.3s ease;
}
.content {
  position: absolute;
  top: 100px;
  left: 30px;
  right: 30px;
  background-color: #f8f8f8;
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

.box {
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 20px;
}
.products {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}
.products .right {
  flex: 1;
}
.right form {
  margin-right: 10px;
}
.left form {
  background-color: white;
  width: 190px;
  padding: 10px;
  font-size: 12px;
  color: #6e6b7b;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  border-radius: 5px;
}
@media (max-width: 1199px) {
  .left {
    display: none;
  }
  .box {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
}
.left form .cat,
.left form .brand,
.left form .range,
.left form .multi-range,
.left form .ratimg {
  margin-top: 20px;
}
.left form .cat > label,
.left form .brand > label,
.left form .range > label,
.left form .multi-range > label,
.left form .rating > label {
  padding: 10px 5px;
  font-weight: 600;
  display: block;
}
input[type="range"] {
  width: 100%;
}
input[type="range"] {
  /* overflow: hidden; */
  width: 100%;
  -webkit-appearance: none;
  border-radius: 6px;
  height: 5px;
  background-color: #7367f0;
}
input[type="range"]::-webkit-slider-thumb {
  width: 15px;
  -webkit-appearance: none;
  height: 15px;
  border-radius: 50%;
  background: #fffefe;
  border: 2px solid #7367f0;
}
input[type="radio"]:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #d1d3d1;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}
input[type="radio"]:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #7367f0;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}
.left form .item {
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 5px;
}
.left .rating {
  padding: 20px 0;
}
.left .rating .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
}
.left .rating .star {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.left .star span.material-icons-outlined {
  font-size: 15px;
}
.star span.active {
  color: orange;
}
.star span {
  color: #bbbbbb;
}
.star span:last-child {
  color: #7367f0;
}
.rate {
  display: none;
}
input,
textarea,
select {
  font-family: inherit;
}
</style>
