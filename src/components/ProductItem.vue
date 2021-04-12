<template>
    <div class="product__item">
        <router-link :to="{ name: 'Product', params: { id: productObject._id }}" >
            <h3>{{ productObject.title }}</h3>
        </router-link>
        <div class="container">

        <div class="div__img">
            <img class="product__img" :src="productObject.img" />
        </div>
        <div class="item__data">
        <p>Categorie: {{ productObject.category.title }}</p>
        <p>Description: {{ productObject.description }}</p>
        <p>Prix: {{ productObject.price | formatPriceDecimal | formatPrice}}</p>
        </div>
        <div>
            <button class="btn-icone" title="Ajouter au panier" @click="addItemToCart(productObject)">
                <img class="icone-cart" src="../assets/cart.png" />
            </button>
            <button class="btn-icone" title="Ajouter à la wishlist" @click="addItemToWishList(productObject)">
                <img class="icone-list" src="../assets/list.png" />
            </button>
        </div>
        </div>
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

.container{
  padding: 2px 16px;
}
.div__img{
    height: 200px;
    width: 200px;
    margin: auto;
}
.product__img{
max-width: 200px ;
max-height: 200px;
padding: auto;
}
.product__item {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border: lightgrey solid 1px;
}

.item__data {
    text-align: left;
}

h3{
    color: black;
    text-decoration: none;
}

.icone-cart {
    width: 50px;

}

.icone-list{
    width: 50px;
}

.btn-icone{
    margin: 20px;
        border: none;
        padding: 1;
        background: none;
}
</style>
