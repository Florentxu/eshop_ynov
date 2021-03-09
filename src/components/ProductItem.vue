<template>
  <div class="product__item">
      <router-link :to="{name:'Product', params:{id:productObject._id}}">
      <p>{{productObject.title}}</p>
      </router-link>
      <p>{{productObject.description}}</p>
      <p>{{productObject.price}} €</p>
      <p><a>{{productObject.img}}</a></p>
      <!-- <p><img :src="productObject.img" :alt="product.title"></p> -->
  </div>
</template>
<script>
    export default {
        name:"ProductItem",
        props: {
            productObject: {
                type: Object
            }
        },
}
</script>

<style lang="scss" scoped>
</style>
