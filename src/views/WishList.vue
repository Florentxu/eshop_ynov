<template>
    <div class="wishlist">
        <TitlePage title="Liste de souhaits" />
        <div>
            <table class="wishlist__table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Action</th>
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
                            <button class="btn btn-red" @click="removeItem(product)">
                                Supprimer l'élément
                            </button>
                            <button class="btn btn-green" @click="addItemToCart(product)">
                                Ajouter au panier
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        <button class="btn btn-red" @click="clear()">Vider la liste</button>
        </div>
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
            this.wishListArray = this.getWishList();
        },
        addItemToCart: function(product) {
            this.addToCart(product);
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
.wishlist__table, td{
    margin-top: 20px;
    border-collapse: collapse ;
    border: 1px solid black;
    margin: auto;
}
.wishlist__table th{
    padding: 20px;
    background-color: rgb(65, 184, 131);
    color: white;
    font-size: 20px;
    width: auto;
}
.wishlist__table td{
    padding: 20px;
}

.btn {
    display: inline-block;
    border-radius: 50px;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.3s all;
    padding: 15px;
    margin: 15px;
}

.btn {    
    &-green {
        background: rgb(65, 184, 131);
        color: white;
        border: 1px solid rgb(65, 184, 131);

        &:hover {
            background: white;
            color: rgb(65, 184, 131);
        }
    }

    &-red {
        background: red;
        color: white;
        border: 1px solid red;
        &:hover {
            background: white;
            color: red;
        }
    }
}

</style>
