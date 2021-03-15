<template>
  <div class="page__shop">
    <TitlePage title="Mon Eshop" />
    <ProductsGrid :productsArray="productsFromApi" />
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import ProductsGrid from "../components/ProductsGrid";
import ApiProducts from "../mixins/ApiProducts";
export default {

  name: 'Shop',
  components: {
      TitlePage,
      ProductsGrid
  },
  data: function() {
      return {
          productsFromApi:[]
      }
  },
  mixins: [ApiProducts],
  // methods: {
  //     getProducts : function(){
  //     fetch("http://localhost:3000/api/v1/products")
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log(data);
  //         this.productsFromApi = data;
  //     })
  //     .catch(err => console.log(err))
  //     }
  // },
  created() {
      this.getProducts()
      .then((data) => {
      this.productsFromApi = data;
    })
    .catch((err) => console.log(err));
  }
}
</script>

<style lang="css" scoped>
</style>

