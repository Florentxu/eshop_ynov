<template>
  <div class="products__grid">
    <ProductItem v-for="product in productsArray" v-bind:key="product._id" :productObject="product" />
  </div>
</template>

<script>
import ProductItem from './ProductItem';
export default {
  components: {
    ProductItem,
  },
  // data: function () {
  //     return {

  //     }
  // },
  name: "ProductsGrid",
  props: {
    productsArray: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.products__grid{
  
}
</style>