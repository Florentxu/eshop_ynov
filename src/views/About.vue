<template>
  <div class="about">
    <TitlePage title="Page About" />
    <br />
    <Bouton
      buttonClass="btn-white"
      buttonName="Page About"
      :buttonFunction="sayHello"
    />
  </div>
  
</template>
<script>
import TitlePage from "../components/TitlePage";
import Bouton from "../components/Button";
export default {
  name: "About",
  components: {
    TitlePage,
    Bouton,
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