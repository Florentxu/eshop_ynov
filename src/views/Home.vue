<template>
  <div class="home">
    <h1>{{ myTitle }}</h1>  
        <p>j'ai {{ myAge }} ans</p>
    <p>
      {{ myAge > 30 ? "je suis vieux" : "je suis jeune" }}
    </p>
    <p>{{ percentCa / 100 }}%</p>
    <div class="visible__block" v-if="!isVisible">
      <p>je suis invisible</p>
    </div>
    <div class="visible__block" v-else-if="isVisible">
      <p>je suis visible</p>
    </div>
    <div class="unvisible__block" v-else>
      <p>Je suis ni visible ni invisible</p>
    </div>
    <div class="font-bold" v-html="textStyling"></div>
    <div class="link">
      <p>
        <a target="_blank" :href="link">Link to google</a>
        <a target="_blank" v-bind:href="link">Link to google</a>
      </p>
    </div>
    <div class="google__logo">
      <img :src="googlelogo" />
    </div>
    <div class="logo">
      <img :src="logo" />
    </div>
    <div class="products__grid" v-for="(product, index) in productArray" v-bind:key="product.id">
      {{ index }}
      {{ product.id }}
      {{ product.title }}
      {{ product.price }} €
    </div>
    <button v-on:click="sayHello">say Hello</button><br>
    <button @click="sayHello('florent')">say Hello</button>
  </div>
</template>

<script>
import Button from '../components/Button.vue';
// @ is an alias to /src

export default {
  components: { Button },
  name: "Home",
  methods: {
    sayHello: function(){
      alert(`Hello ${name}`);
    }
  },

  data: function() {
    return {
      myTitle: "Ma homepage",
      myAge: 0,
      percentCa: 2000,
      isVisible: false,
      textStyling: "<strong>This text is bold</strong>",
      link: "https://google.fr",
      googlelogo:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
      logo:
        "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_y22a3sdv/def_height/365/def_width/364/version/100011/type/1",
      productArray:[
        {title:"product 1", price:20},
        {title:"product 2", price:50},
      ]
    };
  },
};
</script>

<style scoped>
</style>
