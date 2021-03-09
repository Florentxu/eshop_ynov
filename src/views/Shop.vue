<template>
  <div class="page__shop">
    <TitlePage title="Mon Eshop" />
    <ProductsGrid :productsArray="productsFromApi" />
  </div>
</template>

<script>
import ProductsGrid from "../components/ProductsGrid";
import TitlePage from "../components/TitlePage";
import Bouton from "../components/Button";
export default {
  components: {
    TitlePage,
    Bouton,
    ProductsGrid,
  },
  data: function () {
    return {
      productsFromApi:[],
    };
  },
  methods: {
    getProducts: function () {
      return fetch("http://localhost:3000/api/v1/products/all")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.productsFromApi = data;
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
</style>