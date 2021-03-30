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
        <p><button @click="addItemToWishList(productObject)" >Ajouter à la wishlist</button></p>
        <p><button @click="clearItemWishList()">Vider la wishlist</button></p>
        <!-- <Button buttonClass="btn-white" 
        buttonName="Ajouter au panier" 
        :buttonFunction="addItemToCart(productObject)" /> -->
    </div>
</template>
<script>
import Cart from "../mixins/Cart";
import Button from "./Button.vue";
import WishList from "../mixins/WishList"
export default {
    components: { Button },
    name: "ProductItem",
    props: {
        productObject: {
            type: Object,
        },
    },
    mixins:[Cart, WishList],
    methods: {
        addItemToCart: function (product) {
            this.addToCart(product)
        },
        clearItemCart: function(){
            this.clearCart()
        },
        addItemToWishList: function(product){
            this.addToWishList(product)
        },
        clearItemWishList: function(){
            this.clearWishList()
        }

    }
};
</script>

<style lang="scss" scoped></style>
