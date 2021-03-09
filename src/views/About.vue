<template>
  <div class="about">
    <TitlePage title="Page About" />
    <br />
    <Bouton
      buttonClass="btn-white"
      buttonName="Page About"
      :buttonFunction="sayHello"
    />
    <ProductItem :ProductObject="myProduct"/>

  </div>
  
</template>
<script>
import TitlePage from "../components/TitlePage";
import Bouton from "../components/Button";
import ProductItem from "../components/ProductItem";
export default {
  name: "About",
  components: {
    TitlePage,
    Bouton,
    ProductItem,
  },
  data: function () {
    return {
      myProduct: { title: "test", price: 20 }
    }
  },
  methods: {
    sayHello: function () {
      alert("Hello");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>