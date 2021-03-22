<template>
    <div class="product__item">
        <router-link :to="{ name: 'Product', params: { id: productObject._id } }">
            <p>{{ productObject.title }}</p>
        </router-link>
        <p>{{ productObject.description }}</p>
        <p>{{ productObject.price }}€</p>
        <p><img :src="productObject.img" /></p>
        <p><button @click="addItemToCart(productObject)" >Ajouter au panier</button></p>
        <p><button @click="clearItemCart()">Vider le panier</button></p>
        <!-- <Button buttonClass="btn-white" 
        buttonName="Ajouter au panier" 
        :buttonFunction="addItemToCart(productObject)" /> -->
    </div>
</template>
<script>
import Cart from "../mixins/Cart";
import Button from "./Button.vue";
export default {
    components: { Button },
    name: "ProductItem",
    props: {
        productObject: {
            type: Object,
        },
    },
    mixins:[Cart],
    methods: {
        addItemToCart: function (product) {
            this.addToCart(product)
        },
        clearItemCart: function(){
            this.clearCart()
        }
    }
};
</script>

<style lang="scss" scoped></style>
