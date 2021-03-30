<template>
    <div class="wishlist">
        <TitlePage title="Page WishList" />
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Titre</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="product in wishListArray"
                        v-bind:key="product._id"
                    >
                        <td><img :src="product.img" class="img__product" /></td>
                        <td>{{ product.title }}</td>
                        <td>
                            {{
                                product.price | formatPriceDecimal | formatPrice
                            }}
                        </td>
                        <td>
                            <button @click="removeItem(product)">
                                Supprimer l'élément
                            </button>
                            <button @click="addItemToCart(product)">
                                Ajouter au panier
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button @click="clear()">Vider la liste</button>
    </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import WishList from "../mixins/WishList";
import Cart from "../mixins/Cart";
export default {
    components: {
        TitlePage,
    },
    data() {
        return {
            wishListArray: [],
        };
    },
    mixins: [WishList, Cart],
    created() {
        this.wishListArray = this.getWishList();
    },
    methods: {
        removeItem(product) {
            this.removeItemWishList(product);
            this.wishListArray = this.getCart();
        },
        addItemToCart: function(product) {
            this.addOneQty(product);
            this.cartArray = this.getCart();
        },
        clear(){
            this.clearWishList()
            this.wishListArray = this.getWishList()
        }
    },
};
</script>

<style lang="scss" scoped>
.wishlist {
    width: 50%;
    margin: 50px auto;
}
.img__product {
    max-width: 200px;
    max-height: 200px;
}
</style>
