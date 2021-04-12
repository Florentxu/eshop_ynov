<template>
    <div class="product__page">
        <div>
            <TitlePage :title="productItem.title" />
            <div class="content">
                    <img class="product__image" :src="productItem.img" />

                    <p>Description: {{ productItem.description }}</p>
                    <p>
                        Prix:
                        {{
                            productItem.price | formatPriceDecimal | formatPrice
                        }}
                    </p>
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
    </div>
</template>

<script>
import apiConfigs from "../configs/api.configs";
import TitlePage from "../components/TitlePage";
import Carts from "../mixins/Cart";
import WishList from "../mixins/WishList"
export default {
    components: {
        TitlePage,
    },
    name: "Product",
    data: function() {
        return {
            productItem: {},
        };
    },
    mixins: [Carts, WishList],
    methods: {
        addItemToCart: function(product) {
            this.addToCart(product);
        },
        addItemToWishList: function(product) {
            this.addToWishList(product);
        },
    },
created() {
        fetch(`${apiConfigs.apiUrl}/products/${this.$route.params.id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.productItem = data;
            })
            .catch((err) => console.log(err));
        console.log(this.$route.params);
    },
};
</script>

<style lang="scss" scoped>
.content {
    border: lightgrey solid 1px;
    width: 40%;
    margin: auto;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.content div {
    display: inline;
    margin: 10px;
}

.product__image {
    max-height: 200px;
    max-width: 200px;
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
