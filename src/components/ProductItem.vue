<template>
    <div class="product__item">
        <router-link :to="{ name: 'Product', params: { id: productObject._id }}" >
            <p>{{ productObject.title }}</p>
        </router-link>
        <p><img :src="productObject.img" /></p>
        <p>Categorie: {{ productObject.category.title }}</p>
        <p>Description: {{ productObject.description }}</p>
        <p>Prix: {{ productObject.price | formatPriceDecimal | formatPrice}}</p>
        <p>
            <button class="btn-icone" title="Ajouter au panier" @click="addItemToCart(productObject)">
                <img class="img-icone" src="../assets/cart.png" />
            </button>
            <button class="btn-icone" title="Ajouter à la wishlist" @click="addItemToWishList(productObject)">
                <img class="img-icone" src="../assets/list.png" />
            </button>
        </p>
    </div>
</template>
<script>
import Cart from "../mixins/Cart";
import Button from "./Button.vue";
import WishList from "../mixins/WishList";
export default {
    components: { Button },
    name: "ProductItem",
    props: {
        productObject: {
            type: Object,
        },
    },
    mixins: [Cart, WishList],
    methods: {
        addItemToCart: function(product) {
            this.addToCart(product);
        },
        clearItemCart: function() {
            this.clearCart();
        },
        addItemToWishList: function(product) {
            this.addToWishList(product);
        },
        clearItemWishList: function() {
            this.clearWishList();
        },
    },
};
</script>

<style lang="scss" scoped>
.img-icone{
            width: 50px;
}

.btn-icone{
        border: none;
        padding: 0;
        background: none;
}
</style>
